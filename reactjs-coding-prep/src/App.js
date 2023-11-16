import './App.css';
import Child from './Pass_Props_Child_To_Parent/Child';
import CounterApp from './Redux_Counter_App/CounterApp';
import Tester from './Testing_Jest_Enzyme/Tester';
import UseReducerHook from './UseReducer/useReducerHook';
import Debounce from './Debouce_Concept/Debounce'
function App() {
  // Creating a function inside parent component
  const pullData = (data) => {
    console.log(data,"testing data");
  }

  return (
    <div className="App">
      <Tester initialValue={0} />
      {/* passing props to child component */}
      <Child props={pullData}/>
      {/* useReducer use case implementation */}
      <UseReducerHook/>
      {/* Redux implementation - a simple counter app */}
      {/* <CounterApp/> */}
      {/* Debounce concept */}
      <Debounce/>
    </div>
  );
}

export default App;