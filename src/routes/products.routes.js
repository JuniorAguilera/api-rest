import { Router } from "express"

const router = Router()

<<<<<<< HEAD
import * as productsCtrl from '../controllers/products.controller'
=======
<<<<<<< HEAD
router.get('/',(req,res)=>res.json('get products'))

export default router;
=======
import * as productCtrl from '../controllers/products.controller'
>>>>>>> main

router.get('/', productsCtrl.getProducts)

export default router;
>>>>>>> develop
