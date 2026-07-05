// middlewares/requestId.js  
export default (req, res, next) => {  
    try {
        const id = Math.floor(Math.random() * 9000) + 1000;
        res.locals.requestId = id;
        console.log({ message: 'Incoming request', requestId: id });
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
}

/*
Answers:
* How would you mount requestId so it runs on every route in the whole app?  
app.use(requestId);

* How would you mount it so it only runs for routes inside a single Router (e.g. housesRouter), without touching server.js?
housesRouter.use(requestId);
*/
