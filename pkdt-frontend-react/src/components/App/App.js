import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import Categories from "../Section/Categories";
import Supplier from "../Section/Supplier";
import About from "../Section/About";
import ProfileProduct from "../Section/ProductProfile";
import Cart from "../Cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Decorator from "../Header/Decorator";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page: 0,
      categories: [],
      suppliers: [],
      total: 0,
      cart: [],
      money: 0,
      queryFilter: {
        name: "",
        category: "",
        trademark: "",
        supplier: "",
        minprice: "",
        maxprice: "",
        sort: "",
      },
      infoUser: {
        name: "",
        email: "",
        address: "",
        phone: "",
      },
      onOff: false,
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(data) {
    // this.setState({
    //   total: this.state.total + 1,
    //   cart: [...this.state.cart, data],
    //   money: this.state.money + parseInt(data.price),
    // });
    localStorage.total = Number(localStorage.total) + 1
    localStorage.cart = [...localStorage.cart, data]
    localStorage.money = Number(localStorage.money) + parseInt(data.price)
  }

  async componentDidMount() {
    const [
      firstResponse,
      secondResponse,
      thirdResponse,
    ] = await Promise.all([
      axios.get(`http://127.0.0.1:8000/api/v1/products/`),
      axios.get(`http://127.0.0.1:8000/api/v1/categories/`),
      axios.get(`http://127.0.0.1:8000/api/v1/suppliers/`),
    ]);
    this.setState({
      products: firstResponse.data.results,
      categories: secondResponse.data.results,
      suppliers: thirdResponse.data.results,
    });
  }

  render() {
    const toggle = () => this.setState({ onOff: !this.state.onOff });

    return (
      <div className="App">
        <div className="wrap">
          <BrowserRouter>
            <Header total={this.state.total} />
            <Decorator
              categories={this.state.categories}
              suppliers={this.state.suppliers}
              queryFilter={this.state.queryFilter}
              changeFilter={(value) => this.setState(value)}
              handlefetchData={(value) => this.setState({ products: value })}
            />
            <Modal isOpen={this.state.onOff} toggle={toggle}>
              <ModalHeader toggle={toggle}> Thanh toán thành công </ModalHeader>
              <ModalBody>
                <div>
                  Chúc mừng bạn {this.state.infoUser.name}
                  đã thanh toán thành công {this.state.total}
                  sản phẩm với mức giá là {this.state.money}.Sản phẩm sẽ được
                  chuyển về địa chỉ {this.state.infoUser.address}.Chúng tôi sẽ
                  liên hệ với bạn qua SDT: {this.state.infoUser.phone}.Chúng tôi
                  sẽ gửi những khuyễn mãi tiếp theo qua email:
                  {this.state.infoUser.email}
                </div>
              </ModalBody>
              <ModalFooter
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button color="primary" onClick={toggle}>
                  Cảm ơn bạn đã tin tưởng chúng tôi
                </Button>
              </ModalFooter>
            </Modal>
            <Switch>
              <Route exact path="/">
                <Section
                  products={this.state.products}
                  addCart={this.addCart}
                />
              </Route>
              <Route exact path="/product/detail">
                <ProfileProduct />
              </Route>
              <Route exact path="/cart">
                <Cart
                  // cart={this.state.cart}
                  // total={this.state.total}
                  // money={this.state.money}
                  showModal={toggle}
                  handleChangeUser={(value) =>
                    this.setState({
                      infoUser: {
                        ...this.state.infoUser,
                        ...value,
                      },
                    })
                  }
                />
              </Route>
              <Route exact path="/categories">
                <Categories categories={this.state.categories} />
              </Route>
              <Route exact path="/suppliers">
                <Supplier suppliers={this.state.suppliers} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
