import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=>{this.props.onStoreResult(this.props.ctr)}}>Store Result</button>
                <ul>
                    {this.props.storeResult.map((res)=>{
                        console.log(res.value,res.id);
                        return <li key={res.id}  onClick={()=>{this.props.onDeleteResult(res.id)}}>{res.value}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return{
        ctr:state.ctr.counter,
        storeResult:state.res.results
    };
};
const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:       ()=> dispatch({type:actionTypes.ADD,value:5}),
        onSubtractCounter:  ()=> dispatch({type:actionTypes.SUBTRACT, value:5}),
        onStoreResult:      (_count)=> dispatch({type:actionTypes.STORE_RESULT, count:_count}),
        onDeleteResult:     (_id)=> dispatch({type:actionTypes.DELETE_RESULT, resultElId:_id})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);