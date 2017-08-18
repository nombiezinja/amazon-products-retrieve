import React, { Component } from 'react';
import ItemList from './ItemList.jsx';
import Search from './Search.jsx';
import axios from 'axios';
import io from 'socket.io-client';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Keywords: 'test',
      MaximumPrice: Number.POSITIVE_INFINITY,
      MinumumPrice: Number.NEGATIVE_INFINITY,
      SearchIndex:'',
      Sort:'',
      products:['product1','product2'],
    }
  }

  broadcastProducts = (products) => {
    this.socket.emit("products", {products: products})
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on('incomingProducts',(event)=>{
      console.log(event, 'is event')
      const newProducts = this.state.products.concat(e);
      this.setState({
        products: newProducts
      });
    });
  }

  onSubmit = (input) => {

    // const submitQuery = (input) => {
      return axios.post(`/api/search/${window.uri}`, {
        input
    //   })
    // }

    const getQuery = () => {
      return axios.get(`/api/search/${window.uri}`)
    }

    // return axios.all([submitQuery(input),getQuery()])
    //   .then(axios.spread((submitResponse,getResponse) => {
    //     console.log(getResponse)
    //     console.log('log something out ffs')
    //     this.setState({products: getResponse})
    //   }))


  }


  render() {
    return (
     <div>
       <p>{this.state.products}</p>
       <Search Keywords={this.state.Keywords}
         MaximumPrice={this.state.MaximumPrice}
         MinimumPrice={this.state.MinimumPrice}
         SearchIndex={this.state.SearchIndex}
         Sort={this.state.sort}
         onSubmit={this.onSubmit.bind(this)}
         />
     </div>
    );
  }
}

export default App;