
import React from 'react';
import logo from "../imgs/logo.png";
// import ReactDOM from 'react-dom';
import "./style-module.css";

function Header() {

    return (
        <div className="container">
            <div className="header">
            <img src={logo} alt="Logo" ></img>
            <h1>التوثيق الموحد</h1>
            <p className="mainTitle">لمشاريع إدارة التطوير و البرمجيات</p>
            </div>
        </div>
    );
}

export default Header;
