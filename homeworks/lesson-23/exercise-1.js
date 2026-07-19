import { hash, genSalt } from "bcryptjs"

export default async (req, res, next) => {  
    try {  
        const salt = await genSalt(10)  
        res.locals.hash = await hash(req.body.pin + process.env.PEPPER, salt)  
        next()  
    } catch (error) {  
        console.log(error)  
        res.status(500).send('Internal server error')  
    }  
}
