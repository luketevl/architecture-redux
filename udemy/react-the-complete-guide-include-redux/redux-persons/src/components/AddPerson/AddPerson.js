import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component{
    state ={
        name: '',
        age: null
    }
    nameChangedHandler = event => this.setState({name: event.target.value});
    ageChangedHandler = event => this.setState({age: event.target.value});
    render(){
        return (
            <div className="AddPerson">
                <input value={this.state.age} onChange={this.nameChangedHandler} type="text" placeholder="Name" />
                <input value={this.state.age} onChange={this.ageChangedHandler} type="text" placeholder="Age" />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );  
    }
}

export default AddPerson;