import { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

class CounterClass extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Redux Class Counter</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <button onClick={reset}> Reset </button><br />
        <div style={{ position: 'relative' }}>
          <input type="text" />
          <span style={{ position: 'absolute',left:"0px" }}>X</span>
        </div>
      </div>
    );
  }
}

// 👇 map Redux state to props
const mapStateToProps = (state) => ({
  count: state.count
});

// 👇 map action dispatchers to props
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

// 👇 connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
