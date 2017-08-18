import React, {Component} from 'react';

class ItemDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
    <div>
      <h3>Detail</h3>
      <img src={this.props.imgUrl} />
      <a href={this.props.url}>Go to Product Page </a>
    </div>
    )
  }
}

export default ItemDetail;