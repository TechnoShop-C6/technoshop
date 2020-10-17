//create a server with express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.static(__dirname + '/client/dist'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//database connection 
const Url ='mongodb://localhost:27017/technoshop'
mongoose.connect(Url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
})
const Connection = mongoose.connection ;
Connection.on('error',console.error.bind(console,'connection error:'))
Connection.once('open',function(){
console.log('Database is connected ')
})
//crud operation for users schema 
const User = require('./Schema/Users.js')
app.get('/user',async(req,res)=>{
  await User.find({},(err,data)=>{
    res.json(data)
  })
});
app.get('/user/:id',async(req,res)=>{
  await User.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})
app.post('/user/add',async(req,res)=>{
  newUser = new User ({
     name: req.body.name,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber,
  })
  await newUser.save(()=>{res.json(newUser)})
})
app.delete('/user',async(req,res)=>{
  await User.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
})
app.delete('/user/:id',async(req,res)=>{
  await User.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'spacific data deleted'})
})
app.put('/user/:id',async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'spacific data updated'})
})
//crud operation for products schema 
const Product= require('./Schema/Products.js')

app.get('/product',async(req,res)=>{
  await Product.find({},(err,data)=>{
    res.json(data)
  })
});
app.get('/product/:id',async(req,res)=>{
  await Product.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})
app.post('/product/add',async(req,res)=>{
  newProduct = new Product ({
    name: req.body.name,
    category:req.body.category,
    property:req.body.property,
    price:req.body.price,
    url:req.body.url,
  })
  await newProduct.save(()=>{res.json(newProduct)})
})
app.delete('/product',async(req,res)=>{
  await Product.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
})
app.delete('/product/:id',async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'spacific data deleted'})
})
app.put('/product/:id',async(req,res)=>{
  await Product.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'spacific data updated'})
})

//crud operation for purchases schema 
const Purchase= require('./Schema/Purchases.js')

app.get('/purchase',async(req,res)=>{
  await Purchase.find({},(err,data)=>{
    res.json(data)
  })
});
app.get('/purchase/:id',async(req,res)=>{
  await Purchase.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})
app.post('/purchase/add',async(req,res)=>{
  newPurchase = new Purchase ({
    user: req.body.user,
    name: req.body.name,
    category:req.body.category,
    property:req.body.property,
    price:req.body.price,
    url:req.body.url,
  })
  await newPurchase.save(()=>{res.json(newPurchase)})
})
app.delete('/purchase',async(req,res)=>{
  await Purchase.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
})
app.delete('/purchase/:id',async(req,res)=>{
  await Purchase.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'spacific data deleted'})
})
app.put('/purchase/:id',async(req,res)=>{
  await Purchase.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'spacific data updated'})
})
//Crud for comments schema
const Comment = require('./Schema/Comments.js')

app.get('/comment',async(req,res)=>{
  await Comment.find({},(err,data)=>{
    res.json(data)
  })
});
app.get('/comment/:id',async(req,res)=>{
  await Comment.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})
app.post('/comment/add',async(req,res)=>{
  newComment = new Comment ({
     user: req.body.user,
     text:req.body.text,
   
  })
  await newComment.save(()=>{res.json(newComment)})
})
app.delete('/comment',async(req,res)=>{
  await Comment.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
})
app.delete('/comment/:id',async(req,res)=>{
  await Comment.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'spacific data deleted'})
})
app.put('/comment/:id',async(req,res)=>{
  await Comment.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'spacific data updated'})
})

//server listening
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 