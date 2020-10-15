import React from 'react';


class Accessory extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data : []
        }

    }

    componentDidMount(){
        const options = {
          method: 'get',
          url: '/product'
        };
        axios(options)
          .then(products=> {
            this.setState({
              data: products.data
            });
          })
          .catch(error => {
            console.error(error);
          })
        }
    


    render(){
        const listOfAccessories = this.state.data.filter((item) => (item.category !== 'laptop' && item.category !== 'phone'  )).map ((product) => ( 
         <div key={product.id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.property}</p>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add to Chart</button>

         </div>))
        return(
            <div>
               {listOfAccessories}

            </div>
        )
    }
}

export default Accessory;