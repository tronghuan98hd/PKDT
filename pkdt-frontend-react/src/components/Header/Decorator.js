import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Decorator extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
    this.renderSuppliers = this.renderSuppliers.bind(this);
  }

  renderCategories = () => {
    var categories = [];
    categories = this.props.categories.map((data, index) => (
      <option value={data.id}>{data.name}</option>
    ));
    return categories;
  };

  renderSuppliers = () => {
    var suppliers = [];
    suppliers = this.props.suppliers.map((data, index) => (
      <option value={data.id}>{data.name}</option>
    ));
    return suppliers;
  };

  render() {
    const handleFilter = (value) => {
      this.props.changeFilter({
        queryFilter: {
          ...this.props.queryFilter,
          ...value,
        },
      });
    };

    const handlefetchData = () => {
      var supplier = this.props.queryFilter.supplier;
      var trademark = this.props.queryFilter.trademark;
      var category = this.props.queryFilter.category;
      var max = this.props.queryFilter.maxprice;
      var min = this.props.queryFilter.minprice;
      var sort = this.props.queryFilter.sort;
      var name = this.props.queryFilter.name;
      console.log();
      axios
        .get(
          `http://127.0.0.1:8000/api/v1/products/?supplier=${supplier}&trademark=${trademark}&category=${category}&price_min=${min}&price_max=${max}&ordering=${sort}&search=${name}`
        )
        .then((res) => {
          this.props.handlefetchData(res.data.results);
        })
        .catch((err) => console.log(err));
    };

    return (
      <div className="header_slide">
        <div className="header_bottom_left">
          <div className="categories">
            <ul>
              <h3>Tìm Kiếm</h3>
              <li>
                <h5>Tên sản phẩm</h5>
                <input
                  type="text"
                  value={this.props.queryFilter.name}
                  onChange={(event) =>
                    handleFilter({ name: event.target.value })
                  }
                ></input>
              </li>
              <li>
                <h5>Danh mục</h5>
                <select name="categories" id="categories">
                  <option value="">---None---</option>
                  {this.renderCategories()}
                </select>
              </li>
              <li>
                <h5>Nhà cung cấp</h5>
                <select
                  name="suppliers"
                  id="suppliers"
                  value={this.props.queryFilter.supplier}
                  onChange={(event) =>
                    handleFilter({ supplier: event.target.value })
                  }
                >
                  <option value="">---None---</option>
                  {this.renderSuppliers()}
                </select>
              </li>
              <li>
                <h5>Giá sản phẩm</h5>
              </li>
              <li>
                <h5>Min</h5>
                <input
                  type="text"
                  value={this.props.queryFilter.minprice}
                  onChange={(event) =>
                    handleFilter({ minprice: event.target.value })
                  }
                ></input>
              </li>
              <li>
                <h5>Max</h5>
                <input
                  type="text"
                  value={this.props.queryFilter.maxprice}
                  onChange={(event) =>
                    handleFilter({ maxprice: event.target.value })
                  }
                ></input>
              </li>
              <li>
                <h5>Sắp xếp theo:</h5>
              </li>
              <li>
                <h5>Từ A -&gt; Z</h5>
                <input
                  type="radio"
                  id="name"
                  name="sort"
                  value="name"
                  onChange={(event) =>
                    handleFilter({ sort: event.target.value })
                  }
                  checked={this.props.queryFilter.sort === "name"}
                />
              </li>
              <li>
                <h5>Từ Z -&gt; A</h5>
                <input
                  type="radio"
                  id="-name"
                  name="sort"
                  value="-name"
                  onChange={(event) =>
                    handleFilter({ sort: event.target.value })
                  }
                  checked={this.props.queryFilter.sort === "-name"}
                />
              </li>
              <li>
                <h5>Giá tăng dần</h5>
                <input
                  type="radio"
                  id="price"
                  name="sort"
                  value="price"
                  onChange={(event) =>
                    handleFilter({ sort: event.target.value })
                  }
                  checked={this.props.queryFilter.sort === "price"}
                />
              </li>
              <li>
                <h5>Giá giảm dần</h5>
                <input
                  type="radio"
                  id="-price"
                  name="sort"
                  value="-price"
                  onChange={(event) =>
                    handleFilter({ sort: event.target.value })
                  }
                  checked={this.props.queryFilter.sort === "-price"}
                />
              </li>
              <button onClick={handlefetchData}>Xác Nhận</button>
            </ul>
          </div>
        </div>
        <div className="header_bottom_right">
          <div className="slider">
            <div id="slider">
              <div id="mover">
                <div id="slide-1" className="slide">
                  <div className="slider-img">
                    <a href="preview.html">
                      <img src="images/slide-1-image.png" alt="learn more" />
                    </a>
                  </div>
                  <div className="slider-text">
                    <h1>
                      Phụ Kiện Điện Thoại
                      <br />
                      <span>SALE</span>
                    </h1>
                    <h2>Khuyến mãi lên tới 20%</h2>
                    <div className="features_list">
                      <h4>Nhấp vào đây để xem chi tiết</h4>
                    </div>
                    <a href="preview.html" className="button">
                      Shop Now
                    </a>
                  </div>
                  <div className="clear" />
                </div>
                <div className="slide">
                  <div className="slider-text">
                    <h1>
                      Clearance
                      <br />
                      <span>SALE</span>
                    </h1>
                    <h2>UPTo 40% OFF</h2>
                    <div className="features_list">
                      <h4>Get to Know More About Our Memorable Services</h4>
                    </div>
                    <a href="preview.html" className="button">
                      Shop Now
                    </a>
                  </div>
                  <div className="slider-img">
                    <a href="preview.html">
                      <img src="images/slide-3-image.jpg" alt="learn more" />
                    </a>
                  </div>
                  <div className="clear" />
                </div>
                <div className="slide">
                  <div className="slider-img">
                    <a href="preview.html">
                      <img src="images/slide-2-image.jpg" alt="learn more" />
                    </a>
                  </div>
                  <div className="slider-text">
                    <h1>
                      Clearance
                      <br />
                      <span>SALE</span>
                    </h1>
                    <h2>UPTo 10% OFF</h2>
                    <div className="features_list">
                      <h4>
                        Get to Know More About Our Memorable Services Lorem
                        Ipsum is simply dummy text
                      </h4>
                    </div>
                    <a href="preview.html" className="button">
                      Shop Now
                    </a>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
export default Decorator;
