import { Router } from "express"

const router = Router()

import * as productCtrl from '../controllers/products.controller'

router.get('/',(req,res)=>res.json('get products'))

export default router;