import React, {Component} from "react";
import { connect } from "react-redux";
import { GlobalConsumer } from "../../../../context/context";
import ActionType from "../../../../redux/reducer/globalActionType";

class Counter extends Component{
    render() {
        console.log(this);
        return (
            
            <div className="counter">
            {/* <button className="minus" onClick={this.props.handleMinus}>-</button> */}
            <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
            {/* <input type="text" value={this.props.order} /> */}
            <input type="text" value={this.props.state.totalOrder} />
            {/* <button className="plus" onClick={this.props.handlePlus}>+</button> */}
            <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return{
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);