import Product from "../db.js"

export const  getproducts = (req,res)=>{
    let cat =  req.query.cat 
    // if(cat==='all')
   let  q = cat==='all'  
   if(!cat || cat==='all')
   {

     Product.find()
     .then((data)=>res.json(data))
     .catch(e=>res.json(e));
    }
   else
   {

       Product.find({cat:req.query.cat})
       .then((data)=>res.json(data))
        .catch(e=>res.json(e));
    }

}
export const  getproduct = (req,res)=>{
    const q = "select * from products where id=(?)"
   
    // Product.query(q,[req.params.id],(err,data)=>{
    //  if(err) res.json(err.message)
    //  else res.json(data)
 
    // })
    Product.findOne({_id:req.params.id}).then((data)=>res.json(data)).catch(err=>res.json(err))
}
export const  updateproduct = async (req,res)=>{
    const postId = req.params.id;
    // const q =
    //   "UPDATE products SET `name`=?,`description`=?,`img`=?,`cat`=?, `stock`=?,`price`=?,`platform`=? WHERE `id` = ? ";

    // const values = [req.body.name, req.body.description, req.body.img, req.body.cat, req.body.stock, req.body.price, req.body.platform ];
    // Product.query(q,[...values,postId],(err,data)=>{
    //     if(err) res.json(err.message)
    //     else res.json("item updated succesfully")
    // })
   await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.json("updated succefully: "+req.params.id)

}
export const  deleteproduct = (req,res)=>{
   const id = req.params.id


    Product.findByIdAndDelete(id).then(()=>res.json("item deleted succesfully")).catch(e=>res.json(e));
      

}
export const  addproduct = (req,res)=>{
    // const q = "insert into products(`name`,`description`,`img`,`cat`,`stock`,`price`,`platform`) values (?)"
    const product = new Product(
        {
            name:req.body.name,
            description:req.body.description,
            img: req.body.img,
            cat: req.body.cat,
            stock:req.body.stock,
            price:req.body.price,
            platform: req.body.platform


        }
    )
    product.save()
    .then(()=>{
        res.json("Product added succesfully")
    })
    .catch((err)=>console.log(err))
  
    
}
