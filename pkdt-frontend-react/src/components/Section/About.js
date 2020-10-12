import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.column {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 8px;\n}\n\n.about-section {\n  padding: 50px;\n  text-align: center;\n  background-color: #474e5d;\n  color: white;\n}\n\n.container {\n  padding: 0 16px;\n}\n\n.container::after, .row::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n.title {\n  color: grey;\n}\n\n.button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button:hover {\n  background-color: #555;\n}\n\n@media screen and (max-width: 650px) {\n  .column {\n    width: 100%;\n    display: block;\n  }\n}\n',
          }}
        />

        <div className="about-section">
          <h1>About Us</h1>
          <p>
            Chúng tôi luôn mang đến những sản phẩm tốt nhất tới người tiêu dùng
          </p>
          <p>
            Mỗi khách hàng tham gia chính là động lực để chúng tôi có thể hoàn
            thành dự án
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Đội ngũ</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="images/huan.jpg" alt="Mai" style={{ width: "100%" }} />
              <div className="container">
                <h2>Trần Trọng Huấn</h2>
                <p className="title">Backend Developer</p>
                <p>Người thông minh là người biết dừng lại đúng thời điểm</p>
                <p>tronghuan98hd@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="images/dat.jpg" alt="Dat" style={{ width: "100%" }} />
              <div className="container">
                <h2>Nguyễn Tiến Đạt</h2>
                <p className="title">React Developer</p>
                <p>
                  Không có một sự thành công nào mà dễ dàng đạt được. (Trừ khi
                  nhà bạn giàu)
                </p>
                <p>nguyentiendat2881998@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="images/minh.png" alt="Minh" style={{ width: "100%" }} />
              <div className="container">
                <h2>Đồng Quang Minh</h2>
                <p className="title">Java Developer</p>
                <p>
                  Đường tình anh thua nhưng đường đua anh chấp. (Wo Men Bui
                  Yăng)
                </p>
                <p>quangminh1412@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
