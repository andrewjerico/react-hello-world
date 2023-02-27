import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import './Product.css';
import { connect } from "react-redux";
import { GlobalConsumer } from "../../../context/context";

class Product extends Component{
    // state = {
    //     order:4,
    //     name: "Andrew"
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
            <div className="header">
                <div className="logo">
                    <img src="wp4355291.jpg" alt="" width={100}/>
                </div>
                <div className="troley">
                    <img src="cart-icon.png" alt="" />
                    {/* <div className="count">{this.props.order}</div> */}
                    <div className="count">{this.props.state.totalOrder}</div>
                </div>
            </div>
            <CardProduct/>
            </Fragment>
            
        );
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);