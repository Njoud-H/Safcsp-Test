
import React from 'react';
import book1 from "../imgs/book1.png";
import book2 from "../imgs/book2.png"
// import ReactDOM from 'react-dom';
import "./style-module.css";

function ProjCards() {

    return (


        <div className="ProjContainer">
            <br/>
            <h4 className="title">مشاريعنا</h4>

            <div className="ProjMain">
                <div className="ProjFlex">
                    <img className="book2" src={book2} alt="img" />
                    <div >
                        <h4>مشروع ۳</h4>
                    </div>
                </div>

                <div className="ProjFlex">
                    <img className="book2" src={book2} alt="img" />
                    <div >
                        <h4>مشروع ۲</h4>
                    </div>
                </div>

                <div className="ProjFlex">
                    <img className="book1" src={book1} alt="img" />
                    <div >
                        <h4>مشروع ۱</h4>
                    </div>
                </div>

            </div>


            <div>
                <h4 className="soon2">قريبا</h4>
                <h4 className="soon1">قريبا</h4>

            </div>

            <div className="LeastContainer">
                <div className="ProjFlex">
                    <img className="book2" src={book1} alt="img" />
                    <div>
                        <h4>مشروع ٥</h4>
                    </div>
            </div>


                <div className="ProjFlex">
                    <img className="book2" src={book1} alt="img" />
                    <div>
                        <h4>مشروع ٤</h4>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProjCards;
