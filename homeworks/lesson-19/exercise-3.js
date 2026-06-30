document.getElementById("load-btn").addEventListener("click", async (e) => {  
  try {  
    const leaguesRes = await fetch("http://localhost:3000/leagues", {  
      method: "GET",  
      headers: { "Content-Type": "application/json" },  
    })

    const leagues = await leaguesRes.json()

    const teamRequests = []  
    for (const league of leagues) {  
      teamRequests.push(  
        fetch("http://localhost:3000/bulk-teams", {  
          method: "POST",  
          headers: { "Content-Type": "application/json" },  
          body: JSON.stringify({ teams: league.teams }) // Fill 1: Stringify the payload
        })  
      )  
    }

    const teamHeaders = await Promise.all(teamRequests) // Fill 2: Await all fetches

    const teamBodyRequests = []  
    for (const header of teamHeaders) {  
      teamBodyRequests.push(header.json()) // Fill 3: Parse JSON for each response
    }

    const teamsResponse = await Promise.all(teamBodyRequests) // Fill 4: Await all JSON parsing

    console.log(teamsResponse)  
  } catch (error) {  
    console.error({ data: error.message })  
  }  
})
