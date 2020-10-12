import React, { Component } from "react";
import { Link } from "react-router-dom";

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
    this.renderSupplier = this.renderSupplier.bind(this);
  }

  renderSupplier = () => {
    var suppliers = [];
    suppliers = this.props.suppliers.map((data, index) => (
      <div className="grid_1_of_4 images_1_of_4">
        <a href="preview.html">
          <img src={data.image} alt="" />
        </a>{" "}
        <Link to="/about"> {data.name} </Link>{" "}
      </div>
    ));
    return suppliers;
  };

  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="section group"> {this.renderSupplier()} </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Supplier;
