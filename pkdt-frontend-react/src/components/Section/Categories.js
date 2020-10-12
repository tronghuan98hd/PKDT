import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
    this.renderCategories = this.renderCategories.bind(this);
  }

  renderCategories = () => {
    var categories = [];
    categories = this.props.categories.map((data, index) => (
      <div className="grid_1_of_4 images_1_of_4">
        <a href="preview.html">
          <img src={data.image} alt="" />
        </a>
        <Link to="/about"> {data.name} </Link>
      </div>
    ));
    return categories;
  };

  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="section group"> {this.renderCategories()} </div>
        </div>
      </div>
    );
  }
}
export default Categories;
