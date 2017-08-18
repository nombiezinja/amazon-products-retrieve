import React, {Component} from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Keywords: this.props.Keywords,
      MaximumPrice: this.props.MaximumPrice,
      MinumumPrice: this.props.MinimumPrice,
      SearchIndex:this.props.SearchIndex,
      Sort:this.props.Sort,
    }
  }

  handleKeywordsChange = (event) => {
    console.log(event.target.value)
    this.setState({Keywords:event.target.value});
  }

  handleMinPriceChange = (event) => {
    this.setState({MinimumPrice:event.target.value});
  }

  handleMaxPriceChange = (event) => {
    this.setState({MaximumPrice:event.target.value});
  }

  handleSortChange = (event) => {
    this.setState({Sort:event.target.value});
  }

  handleSearchIndexChange = (event) => {
    this.setState({SearchIndex:event.target.value});
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render(){
    return (
      <div className="col-md-6 col-md-offset-1 well pull-left">
        <form className="search-form form-horizontal">
          <div className="col-sm-12">
          <h2>Look for products  to add to shopping list</h2>
          </div>
          <div className="form-group col-sm-12">
            <label className="col-sm-12"
              htmlFor="keyword">What would you like to search for?</label>
            <div className="col-sm-12">
              <input className="form-control"
                type="text"
                name="keyword"
                placeholder="Enter search keywords"
                onChange={this.handleKeywordsChange}/>
            </div>
          </div>
          <div className="form-group col-sm-12">
            <div className="col-sm-12">
              <label>What price range would you like to search within?</label>
            </div>
            <div className="col-sm-6">
              <input className="form-control"
                type="number"
                name="MinimumPrice"
                placeholder="Enter a minimum price"
                onChange={this.handleMinPriceChange}/>
            </div>
            <div className="col-sm-6">
              <input className="form-control"
                type="number"
                name="MaximumPrice"
                placeholder="Enter a maximum price"
                onChange={this.handleMaxPriceChange}/>
            </div>
          </div>
          <div className ="form-group col-sm-12">
            <div className="col-sm-6">
            <label htmlFor="searchIndex">What category do you want to search in?</label>
            </div>
            <div className="col-sm-6">
            <select name="searchIndex"
              className="form-control"
              onChange={this.handleSearchIndexChange}>
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
            <select name="sort"
              className="form-control"
              onChange={this.handleSortChange}>
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
          <button type="submit"
            className="submit-btn btn btn-block btn-outline-info"
            onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
      </div>
    );
  }
}
export default Search;