import React, {Component} from 'react';

class Search extends Component {


  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render(){
    return (
      <div className="container col-md-10 col-md-offset-1">
      <div className="col-md-6 col-md-offset-1 well pull-left">
        <form method="POST" action={"/api/search/" + window.uri} className="search-form form-horizontal">
          <div className="col-sm-12">
          <h2>Look for products  to add to shopping list</h2>
          </div>
          <div className="form-group col-sm-12">
            <label className="col-sm-12" htmlFor="keyword">What would you like to search for?</label>
            <div className="col-sm-12">
              <input className="form-control" type="text" name="keyword" placeholder="Enter search keywords"/>
            </div>
          </div>
          <div className="form-group col-sm-12">
            <div className="col-sm-12">
              <label>What price range would you like to search within?</label>
            </div>
            <div className="col-sm-6">
              <input className="form-control" type="text" name="MinimumPrice" placeholder="Enter a minimum price"/>
            </div>
            <div className="col-sm-6">
              <input className="form-control" type="text" name="MaximumPrice" placeholder="Enter a maximum price"/>
            </div>
          </div>
          <div className ="form-group col-sm-12">
            <div className="col-sm-6">
            <label htmlFor="searchIndex">What category do you want to search in?</label>
            </div>
            <div className="col-sm-6">
            <select name="searchIndex" className="form-control">
              <option value="All">All Departments</option>
              <option value="ArtsAndCrafts">Arts, Crafts and Sewing</option>
              <option value="Books">Books</option>
              <option value="Collectibles">Collectibles</option>
              <option value="Electronics">Electronics</option>
              <option value="Toys">Toys and Games</option>
              <option value="VideoGames">Video Games</option>
            </select>
            </div>
          </div>
          <div className ="form-group col-sm-12">
            <div className="col-sm-6">
            <label htmlFor="sort">How would you like your results sorted?</label>
            </div>
            <div className="col-sm-6">
            <select name="sort" className="form-control">
              <option value="price">Price: low to high</option>
              <option value="-price">Price: high to low</option>
              <option value="salesrank">Availability</option>
              <option value="pmrank">Featured</option>
              <option value="relevancerank">Relevance</option>
              <option value="reviewrank">Reviews rating: high to low</option>
              <option value="VideoGames">Video Games</option>
            </select>
            </div>
          </div>
        <div className="col-md-4 offset-md-4">
          <button type="submit" className="submit-btn btn btn-block btn-outline-info">Submit</button>
        </div>
      </form>
      </div>
      </div>
    );
  }
}
export default Search;