// What are mapStateToProps and mapDispatchToProps?

// They are functions you pass to the connect() HOC(higher order component) to connect a class component to redux store.

// what is mapStateToProps?
// A function that maps state from the Redux store to the props of your component.

const mapStateToProps = (state) => {
    return {
        count: state.count,
        theme: state.theme
    };
};

// So inside your class component, you can now access:
this.props.count
this.props.theme

// what is mapDispatchToProps?
// A function that maps dispatch functions (action creators) to your component’s props.

const mapDispatchToProps = (dispatch) =>{
    return  {
        increment:()=> dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}

// in component
this.props.increment();
this.props.decrement();

// connect() ---->	HOC to link the react component with Redux store

import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={increment}>+1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
