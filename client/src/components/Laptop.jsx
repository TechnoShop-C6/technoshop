import React from 'react';


class Laptop extends React.Component {
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
        const listOfLaptop = this.state.data.filter((item) => item.category === 'laptop').map ((product) => ( 
         <div key={product.id}>
            <img src={product.url} className="post-image"/>
            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <div className='paragraph'>
            <p className='paragraph'>{product.property}</p>
            </div>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add</button>

         </div>))
        return(
            <div>
               {listOfLaptop}

            </div>
        )
    }
}

export default Laptop;