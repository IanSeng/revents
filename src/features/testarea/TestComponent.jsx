import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testAction'
import {Button} from 'semantic-ui-react'

const mapStateToProps = (state) => ({ //state is from testReducer.js 
    data: state.test.data
})

const action = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is : {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
            </div>
        )
    }
}

export default connect(mapStateToProps, action)(TestComponent); //we pass in the mapStateToProps function which tell us what we want to get from our store. TestComponent as another parameter to our connect higher order function, this is going to return test component with the properties from the store. 