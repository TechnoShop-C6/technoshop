import React from 'react';


class Phone extends React.Component {
    constructor(props){
        super(props)
        this.state={
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
        const listOfPhone = this.state.data.filter((item) => item.category === 'phone').map ((product) => ( 
         <div key={product.id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.property}</p>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add</button>

         </div>))
        return(
            <div>
               {listOfPhone}

            </div>
        )
    }
}

export default Phone;