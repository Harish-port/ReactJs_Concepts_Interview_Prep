import { useState } from "react";
import TodoWrapper from "./Challenges/Todo/TodoWrapper";
import Timer from "./Challenges/stopwatch/Timer";
import FrontEndPagination from "./Challenges/Pagination/FrontendFocusedPagination";
import BackendEndPagination from "./Challenges/Pagination/BackendFocusedPagiantion";
function App() {
  const [todos,addTodos] =useState('')
  return (
    <div className="App">
      <BackendEndPagination />
    </div>
  );
}

export default App;
