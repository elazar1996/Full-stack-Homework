function processQueue(queue, logs) {
  let index = 0;
  while (index < queue.length) {
    //פקודה שאומרת שאם ה type הוא CRITICAL_HALT שיצא מהלולאה
    if (queue[index].type === "CRITICAL_HALT") {
      console.error("Fatal Error: System Halted!");
      break;
    }
    index++;
  }

  for (const request of queue) {
    // פקודה שאומרת שאם ה status הוא  corrupted או שה payload הוא null שידלג על האוביקט הנוכחי וימשיך להבא
    if (request.status === "corrupted" || request.payload === null) {
      continue;
    }

    //יצירת משתנה האישור עם כל התנאים
    let isApproved =
      (request.user.role === "admin" || request.priority > 2) &&
      request.user.active === true &&
      !(request.payload.model === "claude" && request.payload.tokens < 200);

    // עכשיו אנחנו יכולים לבדוק אם היא אושרה
    if (isApproved) {
      // מעבר על כל מפתח בתוך אובייקט ה-payload
      for (let key in request.payload) {
        // בדיקה: האם הערך של המפתח הזה הוא ריק או לא מוגדר?
        if (
          request.payload[key] === null ||
          request.payload[key] === undefined
        ) {
          // אם כן, אנחנו דורסים אותו וכותבים במקומו טקסט
          request.payload[key] = "MISSING_DATA";
        }
      }

      // ניתוב לפי סוג הבקשה
      switch (request.type) {
        case "AI_PROMPT":
          console.log("Routing to LLM Engine...");
          break;

        case "DB_QUERY":
          console.log("Executing Secure Query...");
          break;

        case "SEND_EMAIL":
          console.log("Adding to Mail Delivery Queue...");
          break;

        // אם סוג הבקשה לא תואם לאף אחד מהמקרים למעלה
        default:
          console.log("Unknown request type, moving to dead-letter queue.");
          break;
      }
    }
  }
  for (let i = logs.length - 1; i >= logs.length - 3 && i >= 0; i--) {
    console.log(logs[i]);
  }
}
const requestsQueue = [
  {
    id: 1,
    type: "AI_PROMPT",
    status: "pending",
    priority: 1,
    payload: { model: "claude", tokens: 150, stream: true },
    user: { role: "student", active: true },
  },
  {
    id: 2,
    type: "DB_QUERY",
    status: "pending",
    priority: 3,
    payload: { query: "SELECT *", limit: 10 },
    user: { role: "admin", active: true },
  },
  {
    id: 3,
    type: "SEND_EMAIL",
    status: "corrupted",
    priority: 2,
    payload: null,
    user: { role: "guest", active: false },
  },
  {
    id: 4,
    type: "AI_PROMPT",
    status: "pending",
    priority: 5,
    payload: { model: "gpt-4", tokens: null, temp: undefined },
    user: { role: "admin", active: true },
  },
  {
    id: 5,
    type: "CRITICAL_HALT",
    status: "fatal",
    priority: 0,
    payload: { error: "Memory Overflow" },
    user: { role: "system", active: true },
  },
];

const actionLogs = [
  "init",
  "auth_check",
  "load_modules",
  "connect_db",
  "ready",
];

processQueue(requestsQueue, actionLogs);
