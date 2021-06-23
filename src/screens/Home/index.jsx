import axios from 'axios'
import React from 'react'
import Card from '../../components/Card'

class Home extends React.Component{
  state = {
    data : []
  }
  
  componentDidMount(){
    this.getUser()
  }

  getUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.setState({data : res.data})
      console.log(this.state.data)
    })
  }

  renderCard = () => {
    // Object.key(this.state.data).map()
    // var jsx = this.state.data.map(key => (
    //   <Card dataUser={key}/>
    // ))

    var jsx = this.state.data.map(val => (
      <div style={{width: '300px', height: '450px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>{val.name}</h3>
        <h5>{val.username}</h5>
      </div>
    ))

    return jsx
    
  }


  render(){
    return(
      <div style={{width: '100vw', minHeight: '100vh', backgroundColor: 'blue'}}>
        <h1>Home</h1>
        {/* <Card/> */}
        {this.renderCard()}
      </div>
    )
  }
}

export default Home