import {db} from "../db.js"

export const  getproducts = (req,res)=>{
    let cat =  req.query.cat 
    // if(cat==='all')
   let  q = cat==='all'  
   if(!cat || cat==='all')
   {

       q='select * from products'
    }
   else
   {

       q = `select * from products where cat=(?)` 
    }
   
   db.query(q,[req.query.cat],(err,data)=>{
    if(err) res.json(err.message)
    else res.json(data)

   })
}
export const  getproduct = (req,res)=>{
    const q = "select * from products where id=(?)"
   
    db.query(q,[req.params.id],(err,data)=>{
     if(err) res.json(err.message)
     else res.json(data)
 
    })
}
export const  updateproduct = (req,res)=>{
    const postId = req.params.id;
    const q =
      "UPDATE products SET `name`=?,`description`=?,`img`=?,`cat`=?, `stock`=?,`price`=?,`platform`=? WHERE `id` = ? ";

    const values = [req.body.name, req.body.description, req.body.img, req.body.cat, req.body.stock, req.body.price, req.body.platform ];
    db.query(q,[...values,postId],(err,data)=>{
        if(err) res.json(err.message)
        else res.json("item updated succesfully")
    })

}
export const  deleteproduct = (req,res)=>{
   const id = req.params.id
   const q=  "delete from products where `id` = ?"
   db.query(q,[id],(err,data)=>{
    if(err) return res.status(500).json(err)
    return res.status(200).json("Deleted item succesfully ")
   })
}
export const  addproduct = (req,res)=>{
    const q = "insert into products(`name`,`description`,`img`,`cat`,`stock`,`price`,`platform`) values (?)"
    const     values = [req.body.name, req.body.description, req.body.img, req.body.cat, req.body.stock, req.body.price, req.body.platform ];
    db.query(q,[values],(err,data)=>{
        if(err) res.json(err.message)
        else res.json("item added succesfully")
    })
    // res.json("")
}
