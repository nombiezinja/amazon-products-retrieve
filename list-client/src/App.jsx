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
      products:[]
    }
  }

  broadcastProducts = (products) => {
    this.socket.emit("products", {products: products})
  }

  onSubmit = (input) => {
    return axios.post(`/api/search/${window.uri}`, {
      input
    });
  }

  getSearchResults = (uri) => {
    return axios.get(`/api/search/${window.uri}`)
  }


  displayNewProducts = (products) => {
    this.socket.emit("products", {products:products})
  }

  componentDidMount() {

    this.socket = io();

    this.getSearchResults(window.uri).then((results) => {
      console.log(results.data[0].ASIN[0])
      this.setState({
        products: results.data
      }, () => {
        console.log(this.state.products, 'here')
      })
    })
  }

  componentWillMount(){

  }


  render() {
    return (
     <div className="container col-md-10 col-md-offset-1">

        <Search Keywords={this.state.Keywords}
          MaximumPrice={this.state.MaximumPrice}
          MinimumPrice={this.state.MinimumPrice}
          SearchIndex={this.state.SearchIndex}
          Sort={this.state.sort}
          onSubmit={this.onSubmit.bind(this)}
          />
        <ItemList products={this.state.products}
          broadcastProducts={this.broadcastProducts.bind(this)}
          />
     </div>
    );
  }
}

export default App;