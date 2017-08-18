import React, {Component} from 'react';
import ItemDetail from './ItemDetail.jsx';

class ItemList extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className="col-md-6 col-md-offset-1 well pull-left">
        <div className="col-sm-12">
          <h2>Your Search Results</h2>
          {this.props.products.map((product) => {
            return <ItemDetail key = {product.ASIN[0]}
              url = {product.DetailPageURL}
              imgUrl = {product.MediumImage[0].URL}
              />
            })
          }
         </div>
      </div>
    )

  }

}

export default ItemList;