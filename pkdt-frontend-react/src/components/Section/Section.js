import React, { Component } from "react";
import { Link } from "react-router-dom";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      product: [],
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts = () => {
    var products = [];
    products = this.props.products.map((data, index) => (
      <div className="grid_1_of_4 images_1_of_4">
        <Link to={`/product/detail?id=${data.id}`}>
          <img src={data.main_image} alt="" />
        </Link>
        <Link to="/product/detail"> {data.name} </Link>
        <div className="price-details">
          <div className="price-number">
            <p>
              <span className="rupees" style={{ fontSize: "16px" }}>
                {Number(data.price)} VNĐ
              </span>
            </p>
          </div>
          <div class="add-cart">
            <h4>
              <button
                onClick={() => this.props.addCart(data)}
                className="btn btn-sm btn-primary"
              >
                Add to Cart
              </button>
            </h4>
          </div>
          <div className="clear" />
        </div>
      </div>
    ));
    return products;
  };

  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="content_top">
            <div className="heading">
              <h3> New Products </h3>
            </div>
            <div className="see">
              <p>
                <a href="#"> See all Products </a>
              </p>
            </div>
            <div className="clear" />
          </div>
          <div className="section group"> {this.renderProducts()} </div>
        </div>
      </div>
    );
  }
}
export default Section;
