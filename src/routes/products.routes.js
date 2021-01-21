import { Router } from "express"

const router = Router()

<<<<<<< HEAD
router.get('/',(req,res)=>res.json('get products'))

export default router;
=======
import * as productCtrl from '../controllers/products.controller'

router.get('/',(req,res)=>res.json('get products'))

export default router;
>>>>>>> develop
