import React from 'react';
import axios from 'axios';

class AdminAcceuil extends React.Component {
    constructor(){
        super()
        this.state={
            data : [],
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
          .catch(error => {
            console.error(error);
          })
        }
        addNewProduct(e,id){
          e.preventDefault();
         
          const newProduct = {
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
            this.setState({
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

    render(){
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
               </div>
            </div>
        )
    }
}

export default AdminAcceuil;