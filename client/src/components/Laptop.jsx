import React from 'react';

class Laptop extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data : [],
            user:this.props.name,
            name :"",
            category : "",
            property : "",
            price : "",
            url : "",
        }
        this.add=this.add.bind(this)
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
    add(e,id){
      e.preventDefault();
      axios.get(`http://localhost:3000/product/${id}`).then((res)=>{
        const newPurchase = {
          user:this.state.user,
          name :res.data.name,
          category : res.data.category,
          property :  res.data.property,
          price :  res.data.price,
          url : res.data.url
        }
        console.log("newPurchase" , newPurchase)
        axios.post('http://localhost:3000/purchase/add', newPurchase ).then((res)=>{
          this.componentDidMount()
        }) 
     
      })
     
    }


    render(){
        const listOfLaptop = this.state.data.filter((item) => item.category === 'laptop').map ((product) => ( 
         <div key={product._id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.property}</p>
            
            <button onClick={(e)=>this.add(e,product._id)}>BUY</button>

         </div>))
        return(
            <div>
               {listOfLaptop}
            </div>
        )
    }
}

export default Laptop; 
