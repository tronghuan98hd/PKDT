import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="headertop_desc">
          <div className="call">
            <p>
              <span>Need help?</span> call us{" "}
              <span className="number">01657934118</span>
            </p>
          </div>
          <div className="account_desc">
            <ul>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
          <div className="clear" />
        </div>
        <div className="header_top">
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <span>Cart:</span>
            </Link>
            <div id="dd" className="shopping-cart">
              {this.props.total}
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="header_bottom">
          <div className="menu">
            <ul>
              <li className="active">
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/categories">Danh mục</Link>
              </li>
              <li>
                <Link to="/suppliers">Nhà cung cấp</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <div className="clear" />
            </ul>
          </div>

          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default Header;
