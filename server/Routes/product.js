import express from "express"
import { getproducts,getproduct,addproduct,deleteproduct,updateproduct } from '../controllers/product.js'
          

const router = express.Router()

router.get('/',getproducts)
router.get('/:id',getproduct)
router.post('/add',addproduct)
router.delete('/delete/:id',deleteproduct)
router.put('/:id',updateproduct)


export default router