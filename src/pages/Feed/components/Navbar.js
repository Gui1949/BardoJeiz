import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="top_nav">
        <a
          style={{ cursor: "pointer" }}
          // onClick={() => {
          //   url = "https://bardojeiz-server.herokuapp.com/data";
          //   // puxar_api();
          // }}
          className="nav_top_link"
        >
          <p className="nav_top_filter_title" id="title_navbar">
            Bar do Jeiz
          </p>
        </a>
      </nav>
    );
  }
}

export default Navbar
