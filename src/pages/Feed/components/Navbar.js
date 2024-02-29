import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <nav id="top_nav">
        {this.props.text != "" ? (
          <div id="btn_filtro">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.reload();
              }}
              className="material-icons md-5 filtro"
            >
              arrow_back
            </span>
          </div>
        ) : null}
        <a style={{ cursor: "pointer" }} className="nav_top_link">
          <p className="nav_top_filter_title" id="title_navbar">
            {this.props.text == "" ? (
              <div style={{ display: "flex", alignItems: 'center' }}>
                Bar do
                <div
                  style={{
                    backgroundColor: "#FFB86C",
                    color: "#000000",
                    borderRadius: "1vh",
                    marginLeft: 5,
                    padding: 2,
                  }}
                >
                  Jeiz
                </div>
              </div>
            ) : (
              this.props.text
            )}
          </p>
        </a>
      </nav>
    );
  }
}

export default Navbar;