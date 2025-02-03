import { useState } from "react";
import TodoWrapper from "./Challenges/Todo/TodoWrapper";
import Timer from "./Challenges/stopwatch/Timer";
import FrontEndPagination from "./Challenges/Pagination/FrontendFocusedPagination";
import BackendEndPagination from "./Challenges/Pagination/BackendFocusedPagiantion";
import PersistTabChange from "./Challenges/PersistTabChange/PersistTabChange";
function App() {
  const [todos,addTodos] =useState('')
  return (
    <div className="App">
      {/* <BackendEndPagination /> */}
      <PersistTabChange/>
    </div>
  );
}

export default App;
