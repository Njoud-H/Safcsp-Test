
import React from 'react';
import book1 from "../imgs/book1.png";
import book2 from "../imgs/book2.png"
// import ReactDOM from 'react-dom';
import "./style-module.css";

function DocsCards() {

    return (

        <div className="mostContainer">
            <h4 className="title">التوثيق</h4>
            <div className="main">
                <div className="flex">
                <img className="book1" src={book2} alt="img" />
                <div >
                <h4>التوثيق ۳</h4>
        </div>
            </div>

            <div className="flex">
                <img className="book2" src={book2} alt="img" />
                <div >
                    <h4>التوثيق ۲</h4>
                </div>
            </div>

            <div className="flex">
                <img className="book2" src={book1} alt="img" />
                <div >
                    <h4>التوثيق ۱</h4>
                </div>
            </div>

        </div>
        </div>

    );
}

export default DocsCards;
