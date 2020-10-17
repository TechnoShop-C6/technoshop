import react from 'react';
import axios from 'axios';

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments:[],
            id:0,
            user:this.props.name,
            text:""
        }
        this.edit=this.edit.bind(this)
        this.delete=this.delete.bind(this)
        this.add=this.add.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3000/comment').then((response) => {
            this.setState({
                comments:response.data,
                id:0,
                text:""
            })
        })
    }
    add(e,id){
        e.preventDefault();
        const newCommit ={
             user:this.state.user,
             text:this.state.text
        }
        if(id === 0 ){
            axios.post('http://localhost:3000/comment/add',newCommit)
            .then(()=>this.componentDidMount())
            .catch((err)=>console.log(err))
        }else{
            axios.put(`http://localhost:3000/comment/${id}`,newCommit)
            .then(()=>this.componentDidMount())
        }
    }
    delete(e,id){
        e.preventDefault();
     axios.delete(`http://localhost:3000/comment/${id}`)
     .then(()=>{this.componentDidMount()})
    }
    edit(e,id){
        e.preventDefault();
        axios.get(`http://localhost:3000/comment/${id}`).then((res) => {
            this.setState({
                id:res.data._id,
                text:res.data.text
            })
        })

    }
    render() {
        const MyComments = this.state.comments.filter((item)=>item.user === this.state.user).map((item) =>(
            <div key={item._id}>
               <li>{item.user} : {item.text}</li>
               <button onClick={(e)=>this.edit(e,item._id)}>Edit</button>
               <button onClick={(e)=>this.delete(e,item._id)}>Delete</button>
            </div>
        ))
        const listComments = this.state.comments.filter((item)=>item.user != this.state.user).map((item) =>(
            <div key={item.id}>
               <h2>{item.user} : {item.text}</h2>
            </div>
        ))
        return (
           <div>
               <form onSubmit={(e)=>this.add(e,this.state.id)}>
                 <input type="text" placeholder="What do you think of our services" onChange={(e)=>{this.setState({text:e.target.value})}} value={this.state.text}/><br></br>
                 <input type="submit" value="Add a commit"/>
               </form>
               <ul>
               <h1>My comments</h1>
                 {MyComments}  
               </ul>
               <ul>
               <h1>Other comments</h1>
                 {listComments}  
               </ul>
           </div> 
        )
    }
}
export default Comments ;