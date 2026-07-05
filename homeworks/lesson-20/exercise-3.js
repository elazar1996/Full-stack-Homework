const requireCode = (req, res, next) => {  
    try {  
        if (['A1', 'B2'].includes(req.body.code)) {  
            res.locals.access = 'granted'  
            next() // BUG FIX 1: Added next() to pass control to the next middleware
        } else {  
            res.locals.access = 'denied'  
            res.status(401).send('Access denied')  
        }  
    } catch (error) {  
        res.status(500).send('Internal Server Error')  
    }  
}

app.post('/vault', [requireCode], (req, res) => {  
    try {  
        res.send(res.locals)  
        // res.send(res.locals) // BUG FIX 2: Removed the second res.send()
    } catch (error) {  
        res.status(500).send('Internal Server Error')  
    }  
})

/*
Explanations:
Bug 1 (Missing next()): If the user provided a valid code, the middleware never called next(). As a result, the request would hang indefinitely until the client timed out.
Bug 2 (Double res.send()): Calling res.send() twice for the same request would crash the app with a "Cannot set headers after they are sent to the client" error, because the response had already been finalized and sent by the first res.send().
*/
