import React, { Component, Fragment } from "react";
import Counter from "./Counter";

class CardProduct extends Component{

    render() {
        return (
             <div className="card">
                <div className="img-thumb-prod">
                    <img src="400568.jpg" alt="" />
                </div>
                <p className="product-title">Daging Ayama Berbumbu Rasa Original</p>
                <p className="product-price">Rp 410.000</p>
                <Counter/>
             </div>
        );
    }
}

export default CardProduct;