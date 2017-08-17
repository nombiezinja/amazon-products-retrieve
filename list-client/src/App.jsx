import React, { Component } from 'react';
import ItemList from './ItemList.jsx';
import Search from './Search.jsx';
import axios from 'axios';
import io from 'socket.io-client';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Keywords: '',
      MaximumPrice: Number.POSITIVE_INFINITY,
      MinumumPrice: Number.NEGATIVE_INFINITY,
      SearchIndex:'',
      Sort:'',
    }
  }

  componentDidMount() {
    this.socket = io();
  }

  onSubmit = () => {

  }

  render() {
    return (
     <div>
       <Search Keywords={this.state.Keywords}
         MaximumPrice={this.state.MaximumPrice}
         MinimumPrice={this.state.MinimumPrice}
         SearchIndex={this.state.SearchIndex}
         Sort={this.state.sort}
         />
     </div>
    );
  }
}

export default App;