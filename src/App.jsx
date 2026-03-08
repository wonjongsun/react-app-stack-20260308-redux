import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/*
function reducer(state, action) {
  if (action.type === 'up') {
    return { ...state, value: state.value + action.step };
  }
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer, initialState);
*/
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'counterSlice/up', step: 2 });
        }}
      >
        +
      </button>{' '}
      {count}
    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
