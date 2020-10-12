import React, { Component } from "react";
import axios from "axios";

class ProductProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetail: {
        colors: [],
      },
    };
    this.renderColor = this.renderColor.bind(this);
  }

  componentDidMount() {
    const urlParam = new URLSearchParams(window.location.search);
    var id = urlParam.get("id");
    axios
      .get(`http://127.0.0.1:8000/api/v1/product/${id}/`)
      .then((res) => {
        this.setState({ productdetail: res.data });
      })
      .catch((err) => console.log(err));
  }

  renderColor = () => {
    var colors = [];
    colors = this.state.productdetail.colors.map((data, index) => (
      <div
        style={{
          backgroundColor: `#${data.code}`,
          height: "20px",
          width: "20px",
          marginBottom: "15px",
          border: "1px solid black",
        }}
      />
    ));
    return colors;
  };

  render() {
    return (
      <div className="section group">
        <div className="cont-desc span_1_of_2">
          <div className="product-details">
            <div className="grid images_3_of_2">
              <div id="container">
                <div id="products_example">
                  <div id="products">
                    <img
                      src={this.state.productdetail.main_image}
                      alt={this.state.productdetail.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desc span_3_of_2">
          <h2>{this.state.productdetail.name}</h2>
          <p>{this.state.productdetail.description}</p>
          <div className="price">
            <p>
              Giá: <span>{this.state.productdetail.price}</span>
            </p>
          </div>
          <div className="available">Màu: {this.renderColor()}</div>
          <div className="share-desc">
            <div className="share">
              <p>Share Product :</p>
              <ul>
                <li>
                  <a href="#">
                    <img src="images/facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/twitter.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="button">
              <span>
                <a href="#">Add to Cart</a>
              </span>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductProfile;
