import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <div className="list_header">{props.title}</div>
      <hr></hr>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Daily Task List'
};

export default Header;
