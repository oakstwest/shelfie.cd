import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios'


class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [],
      productInput : '',
      updateProduct : '',
      imageurl : ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleProductChange = this.handleProductChange.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }
handleImageChange(e) {
  this.setState({
    imageurl : e.target.value
  })
}
getInventory(){
  axios.get('./api/inventory${this.}')
}



deleteProduct(id) {
  console.log(id)
  axios.delete(`/api/products/${id}`)
    .then((product) => {
      this.setState({

         })

    })
}

  handleProductChange(e) {
    this.setState({
      updateProduct : e.target.value
    })
  }

  handleChange(e) {
    this.setState({
      products : e.target.value
    })
  }

  render() {
    console.log (this.state.productInput)
    return (
      <div className="App">
        
        <input onChange={e => this.handleChange(e)}type="text" value={this.state.createInput} />

        <input onChange={e =>this.handleProductChange(e)} type="text" value={this.state.updateInput}/>

        <input onChange={e =>this.handleImageChange(e)} type="text" value={this.state.updateInput}/>


        <button onClock={()=>this.deleteProduct}>Cancel</button>

        <button onClick={()=>this.handleProductChange}>Add to Inventory</button>

        <div>
        <Dashboard/>
        <Form/>
        <Header/>
        </div>
      </div>
    );
  }
}

export default App;
