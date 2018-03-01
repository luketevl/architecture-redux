import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as counterAction from '../../actions/counterActions';
import * as resultsAction from '../../actions/resultsActions';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
            break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ctr: state.counter.counter,
    results: state.results.results,
});

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch(counterAction.increment()),
    onDecrementCounter: () => dispatch(counterAction.decrement()),
    onAddCounter: () => dispatch(counterAction.add(10)),
    onSubCounter: () => dispatch(counterAction.sub(5)),
    onStoreResult: (counter) => dispatch(resultsAction.acc(counter)),
    onDeleteResult: (id) => dispatch(resultsAction.remove(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);