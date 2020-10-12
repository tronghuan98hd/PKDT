import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart = () => {
    if (localStorage.cart === undefined || localStorage.cart.length === 0) {
      return <p>Không có sản phẩm nào.</p>
    } else {
      return localStorage.cart.map((data, index) => (
        <tr>
          <td data-th="Product">
            <div className="row">
              <div style={{ boxSizing: "border-box" }} className="col-sm-2 hidden-xs"><img src={data.main_image} alt="Sản phẩm 1" className="img-responsive" width={100} />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">{data.name}</h4>
              </div>
            </div>
          </td>
          <td data-th="Price"> {data.price} đ</td>
          <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" />
          </td>
          <td data-th="Subtotal" className="text-center">{data.price}</td>
          <td className="actions" data-th>
            <button className="btn btn-danger btn-sm"><i className="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Tên sản phẩm</th>
              <th style={{ width: '10%' }}>Giá</th>
              <th style={{ width: '8%' }}>Số lượng</th>
              <th style={{ width: '22%' }} className="text-center">Thành tiền</th>
              <th style={{ width: '10%' }}> </th>
            </tr>
          </thead>
          <tbody>
            {this.renderCart()}
          </tbody>
          {/* <tfoot>
                        <tr className="visible-xs">
                            <td className="text-center"><strong>Tổng 200.000 vnđ</strong>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to="/" className="btn btn-warning"><i className="fa fa-angle-left" /> Tiếp tục mua hàng</Link>
                            </td>
                            <td colSpan={2} className="hidden-xs"> </td>
                            <td className="hidden-xs text-center"><strong>Tổng số lượng {this.props.total} </strong>
                            </td>
                            <td className="hidden-xs text-center"><strong>Tổng tiền {this.props.money} đ</strong>
                            </td>

                            <div className="formData" >
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Họ và tên</label>
                                    <input onChange={(event) => this.props.handleChangeUser({
                                        name: event.target.value
                                    })} type="text" className="inputData" id="exampleFormControlInput1" placeholder="Tên người mua" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">Địa chỉ</label>
                                    <input onChange={(event) => this.props.handleChangeUser({
                                        address: event.target.value
                                    })} type="text" className="inputData" id="exampleFormControlInput2" placeholder="Địa chỉ" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput3">Email</label>
                                    <input onChange={(event) => this.props.handleChangeUser({
                                        email: event.target.value
                                    })} type="email" className="inputData" id="exampleFormControlInput3" placeholder="Email " />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput4">Số điện thoại</label>
                                    <input onChange={(event) => this.props.handleChangeUser({
                                        phone: event.target.value
                                    })} type="number" className="inputData" id="exampleFormControlInput4" placeholder="Số điện thoại" />
                                </div>
                            </div>
                            <button onClick={this.props.showModal} className="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModalCenter" > Thanh toán <i className="fa fa-angle-right" /></button>
                            <button className="btn btn-success btn-block"> Thanh toán <i className="fa fa-angle-right" /></button>
                        </tr>
                    </tfoot> */}
        </table>
      </div>
    );
  }
}
export default Cart;
