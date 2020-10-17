import React from 'react';
import axios from 'axios';

class AdminAcceuil extends React.Component {
    constructor(){
        super()
        this.state={
            data : [],
            comments : [],
            id:0,
            name :"",
            category : "",
            property : "",
            price : "",
            url : "",
        }
        this.addNewProduct=this.addNewProduct.bind(this)
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
        this. deleteComment =  this.deleteComment.bind(this)
    }
    componentDidMount(){
        const options = {
          method: 'get',
          url: '/product'
        };
        axios(options)
          .then(products=> {
            this.setState({
              data: products.data,
              id:0,
              name :"",
              category : "",
              property : "",
              price : "",
              url : "",
            });
          })
          const comments = {
            method: 'get',
            url: '/comment'
          };
          axios(comments)
            .then(pro => {
              this.setState({
                comments: pro.data,
              });
            })
      
    }
        
        addNewProduct(e,id){
          e.preventDefault();
          const newProduct = {
            id:this.state.id,
            name :this.state.name,
            category : this.state.category,
            property : this.state.property,
            price : this.state.price,
            url : this.state.url,
          } 
          if(id === 0){
          axios.post('http://localhost:3000/product/add', newProduct)
          .then(()=>{this.componentDidMount()})
          .catch(err => console.log(err))
        }else{
          axios.put(`http://localhost:3000/product/${id}`,newProduct)
          .then(()=>{this.componentDidMount()})
          .catch(err => console.log(err))
        }
        }
        edit(e,id){
          axios.get(`http://localhost:3000/product/${id}`)
          .then((res)=>{
            console.log(res.data)
            this.setState({
              id:res.data._id,
              name :res.data.name,
              category : res.data.category,
              property : res.data.property,
              price : res.data.price,
              url : res.data.url,
            })
        })
        }
        delete(e,id){
          axios.delete(`http://localhost:3000/product/${id}`)
          .then(()=>{this.componentDidMount()})
        }
        deleteComment(e,id){
          e.preventDefault();
       axios.delete(`http://localhost:3000/comment/${id}`)
       .then(()=>{this.componentDidMount()})
      }
    render(){
      const MyComments = this.state.comments.map((item) =>(
        <div key={item._id}>
           <h3>{item.user} : {item.text}</h3>
           <button onClick={(e)=>this.deleteComment(e,item._id)}>Delete</button>
        </div>
    ))
        const list = this.state.data.map ((product) => ( 
         <div className="main" key={product._id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.property}</p>
            <button onClick={(e)=>this.edit(e,product._id)}>Edit</button>
            <button onClick={(e)=>this.delete(e,product._id)}>Delete</button>
         </div>
         ))
        return(
          
            <div>
            
            <h1 className="boss">Welcome Boss 💰💰</h1>
            
            <form className="SignInForm" onSubmit={(e)=>this.addNewProduct(e,this.state.id)}>
                <input type="text" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/>
                <input type="text" placeholder="Category" onChange={(e)=>{this.setState({category:e.target.value})}} value={this.state.category}/>
                <input type="text" placeholder="Property" onChange={(e)=>{this.setState({property:e.target.value})}} value={this.state.property}/>
                <input type="text" placeholder="Price" onChange={(e)=>{this.setState({price:e.target.value})}} value={this.state.price}/>
                <input type="url" placeholder="Url of your product image" onChange={(e)=>{this.setState({url:e.target.value})}} value={this.state.url}/>
                <input type="submit" value="Add new product"/>
            </form>
               <div>
               {list}
               <h2>Comments of users</h2>
               {MyComments}
               </div>
               <a href="javascript:location.reload(true)">Log Out</a>  
            </div>
        )
    }
}

export default AdminAcceuil;