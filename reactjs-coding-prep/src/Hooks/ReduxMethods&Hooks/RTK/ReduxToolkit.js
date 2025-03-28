//RTK
// Its a way to use Redux for state management in react applications.It simpplifies Redux development by reducing the boilerplate and providing built-in tools for efficient state management.

// why use RTK?
// 1. Less Bilerplate - No need to write action types and creators manually.
// 2. Built -in Async Handling - Supports createAsyncThunk for API calls.
// 3. Pre - configured middleware - Includes Redux devtools and redux - thunk by default.


// Core concepts in Redux ToolKit
// 1. Slices(createSlice)
// A Slice is a collection of redux logic for a feature(state, actions and reducers);
// Example of slice File

// Note to remember
// 1. extraReducers in Redux toolkit - extraReducers is used in a slice file when handling asynchronous actions created using createAsyncThunk.
// Unlike reducers which handle synchronous state updates, extraReducers listens for actions from other slice or async thunks.

// ✅ extraReducers is used for handling async actions like API calls.
// ✅ createAsyncThunk makes it easy to fetch data in Redux Toolkit.
// ✅ builder.addCase listens for pending, fulfilled, and rejected states.
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    }
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


2. Configure the Store.

    import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
// this is optioal for typescript you can use this 
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;

3. Provide the store to the App.

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    )

// 4. Async Thunk for API calls.
//  Redux toolkit includes createAsyncThunk for handling async logic.

let initialState = {
    data: null,
    loading: false,
}
export fetchUserDetails = createAsyncThunk('/user/fetchUser', async (userId: number) => {
    const response = await fetch("https:/exmaple/.com");
    return response.json()
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.pending, (state) => {
            state.loading = true
        }).addCase(fetchUserDetails.fullfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        }).addCase(fetchUserDetails.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default userSlice.reducer;


// Persisting Redux State

// if you want to persist the redux state use redux-persist.

import { configureStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counterSlice';

const persistConfig = {
    key: 'root',
    storage
}

const persistReducer = persistReducer(persistConfig, counterReducer);

const rootStore = configureStore({
    reducers: {
        counter: persistReducer
    }
})

export default persistor = persistStore(rootStore);

// in index.js

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>
