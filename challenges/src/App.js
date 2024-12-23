import { useState } from "react";
import TodoWrapper from "./Challenges/Todo/TodoWrapper";
import Timer from "./Challenges/stopwatch/Timer";
function App() {
  const [todos,addTodos] =useState('')
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
