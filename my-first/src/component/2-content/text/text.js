import "./text.css";
import React from "react";

const handleClick = () => {
  return <div></div>;
};

const Text = () => {
  const headerBtn = [
    { btnName: "TWITTER", className: "headerBtn headerBtn1" },
    { btnName: "LINKEDIN", className: "headerBtn headerBtn2" },
    { btnName: "MEDIUM", className: "headerBtn headerBtn3" },
  ];

  const HeaderBtns = (props) => {
    return (
      <button
        className={props.classNer}
        onClick={() => handleClick(props.name)}
      >
        {props.name}
      </button>
    );
  };
  return (
    <div className="mainText">
      <h1>Blog Posts</h1>
      <h2>I think so, this is it.</h2>
      <p>
        Design begins after I begin to think about how to present an experience
        most successfully, whether a button I put in can solve a problem. The
        only point in design is not ui design, if the user does not have a good
        experience at the end of the product, the design will be considered
        unsuccessful in my opinion.
      </p>
      <div className="headerBtn">
        {headerBtn.map((headerBtn) => (
          <HeaderBtns name={headerBtn.btnName} classNer={headerBtn.className} />
        ))}
      </div>
    </div>
  );
};

export default Text;
