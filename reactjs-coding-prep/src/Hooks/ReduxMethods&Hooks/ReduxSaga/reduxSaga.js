// Redux-saga is a middleware for managing the side effects(eg:- API Calls, delays,caching etc...) in redux applications.It uses generator function to handle asynchronous logic more efficiently than thunk.

// It uses generator functions to handle async operations.

// // Setting up redux-saga
// npm install redux-saga

// 🔹 How Redux-Saga Works
// Uses sagas (generator functions) to handle async operations.
// Listens to dispatched actions.
// Executes side effects like API calls in the background.
// Returns control back to Redux when done.

// 🔹 When to Use Redux-Saga?
// ✅ When handling multiple async operations in parallel.
// ✅ When you need to cancel or retry API requests.
// ✅ When implementing polling, debouncing, caching, or WebSockets.
// ✅ When you need complex async logic beyond createAsyncThunk.
// What are Generator functions?
// Generator functions in javascript(function*) allow you to pause and resume execution using the yield keyword.They are usefull for handling asynchronous tasks,iterators and lazy evaluation.

// How Generator functions work?
// 1. Use function* instead of function.
// 2. Use yield to pause execution and return a value.
// 3. use .next() to resume execution.
// 4. the generator function does not execute immediately, it returns an iterator object.

// Basic Example

function* simpleGenerator() {
    yield "Step 1"
    yield "Step 2"
    yield "Step 3"
}

const gen = simpleGenerator();

console.log(gen.next()); // {value:"Step 1",done:false}
console.log(gen.next()); // {value:"Step 2",done:false}
console.log(gen.next()); // {value:"Step 3",done:false}
console.log(gen.next()); // {value:undefined,done:true}
// Explanation
// Calling simpleGenerator() does not execute the function.
// Calling gen.next() executes until the first yield, pauses, and returns { value, done }.
// Calling gen.next() again resumes from the last yield.

// steps to setup redux - saga
// 1.npm install redux - saga.
// 2.create a Saga.ts [which contains the api calls and generator function and a watcher saga function that listens to action]
// 3.create the slice file with the api 
// 4️⃣ Configure Store with Saga Middleware (store.ts)
// 5. Dispatch API Calls in React Component

// Redux-Saga Helpers
// Function - 	Description
// takeEvery(actionType, sagaFunction)	      ----     Runs for every action of the given type (parallel execution)
// takeLatest(actionType, sagaFunction)	      ----     Runs only the latest action, cancels previous ones
// call(fn, ...args)	      ----     Calls a function (e.g., API call)
// put(action)	      ----     Dispatches an action
// select(selectorFn)	      ----     Accesses the Redux store state inside a saga
// delay(ms)	      ----     Pauses the saga for a given time
// fork(sagaFunction)	      ----     Runs a saga in the background (non-blocking)
// cancel(task)	      ----     Cancels a running saga