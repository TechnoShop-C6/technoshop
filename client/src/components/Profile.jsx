import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data : [],
            id:0,
            user:this.props.name,
            name :"",
            category : "",
            property : "",
            price : "",
            url : "",
            alert:""
        }
        this.delete=this.delete.bind(this)
        this.deleteAll=this.deleteAll.bind(this)
        this.confirme=this.confirme.bind(this)
    }

    componentDidMount(){
        const options = {
          method: 'get',
          url: '/purchase'
        };
        axios(options)
          .then(res=> {
            this.setState({
              data: res.data,
              id:0,
              name :"",
              category : "",
              property : "",
              price : "",
              url : "",
              alert:""
            });
          })
          
          .catch(error => {
            console.error(error);
          })
          console.log(this.state)
        }
        delete(e,id){
            e.preventDefault();
        axios.delete(`http://localhost:3000/purchase/${id}`)
        .then(()=>{this.componentDidMount()
        })
        }
        deleteAll(e){
        e.preventDefault();
        axios.delete(`http://localhost:3000/purchase`)
        .then(()=>{this.componentDidMount()
        })
    }
    confirme(e){
      e.preventDefault();
      axios.delete(`http://localhost:3000/purchase`)
      .then(()=>{
      this.setState({
        alert:"alert"
      })
      })
    }


    render(){
    
        const myCartPrice = this.state.data.filter((item) => item.user === this.state.user).map((item)=>item.price*1)
        {console.log(myCartPrice)}
        const total =myCartPrice.reduce((result ,element ) => result += element , 0 )
        const myCart = this.state.data.filter((item) => item.user === this.state.user).map ((product) => ( 
         <div key={product._id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.property}</p>
            
            
            <button onClick={(e)=> this.delete(e,product._id)}>Delete</button>


         </div>))
         if(this.state.alert === "" ){
          return(
            <div>
            <h1>Welcome {this.state.user} in your profile </h1>
            <h2>The amount of your purchases is : {total} DT</h2>
            
               {myCart}
               <div>
               <button onClick={(e)=> this.confirme(e)}> Confirme my purchases </button>
               <button onClick={(e)=> this.deleteAll(e)}>Delete All</button><br></br>
               <a href="javascript:location.reload(true)">Log Out</a>  
               </div>
            </div>
        )
         }else if(this.state.alert === "alert" ){
          return(
            <div>
           <h1>Thanks {this.state.user} your request is Accepted </h1>
           <h1>You'll recieve your order in three days</h1>
           <a href="javascript:location.reload(true)">Log Out</a>   
            </div>
        )
         }
       
    }
}

export default Profile; 
