import { Router } from 'express'

const router = Router()

const checkMembership = (req, res, next) => {  
    if (req.headers['x-member'] === 'true') {  
        res.locals.member = true  
        next() // let the request continue to the next middleware  
    } else {  
        res.locals.member = false  
        res.status(403).send('Forbidden: Members only') // respond with 403 and a short message, and do NOT call next  
    }  
}

const attachDiscount = (req, res, next) => {  
    res.locals.discount = res.locals.member ? 20 : 0 // 20 if res.locals.member is true, otherwise 0  
    next()  
}

router.get('/:id', [checkMembership, attachDiscount], // mount checkMembership and attachDiscount, in order, as the middleware for this route  
    (req, res) => {  
        res.json({  
            productId: req.params.id, // read the id from the route params  
            discount: res.locals.discount,  
        })  
    }  
)

export default router
