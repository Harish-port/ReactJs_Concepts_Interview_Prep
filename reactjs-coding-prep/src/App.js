import './App.css';
import Debounce from './Debouce_Concept/Debounce';
import Tester from './Testing_Jest_Enzyme/Tester';
function App() {
  return (
    <div className="App">
      {/* <Debounce /> */}
      <Tester initialValue={0}/>
    </div>
  );
}

export default App;
