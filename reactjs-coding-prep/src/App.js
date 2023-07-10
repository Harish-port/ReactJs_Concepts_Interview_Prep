import './App.css';
import Debounce from './Debouce_Concept/Debounce';
import Child from './Pass_Props_Child_To_Parent/Child';
import CounterApp from './Redux_Counter_App/CounterApp';
import Tester from './Testing_Jest_Enzyme/Tester';

function App() {
  // Creating a function inside parent component
  const pullData = (data) => {
    console.log(data,"testing data");
  }

  return (
    <div className="App">
      {/* <Debounce /> */}
      <Tester initialValue={0} />
      {/* passing props to child component */}
      <Child props={pullData}/>
      {/* Redux implementation - a simple counter app */}
      <CounterApp/>
    </div>
  );
}

export default App;