import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersPage from './pages/usersPage/UsersPage';


function App() {
  const dispatch = useDispatch();
  const title = useSelector(state => state.titleR.title)
  // const count = useSelector(state => state.count)
  const changeText = () => {
    dispatch({type:"CHANGE_TITLE"})
  } 
  // const increment = () => {
  //   dispatch({type:"INCREMENT"})
  // }
  // const titleWithParams = () => {
  //   dispatch({type:"TITLE_WITH_PARAMS", payload:"elina"})
  // }
  return (
    <div className="App">
      
      {title}
      {/* <h1>Redux</h1>
      <h2>{title}</h2>
      <h3>{count}</h3> */}
      <button onClick={changeText}>change text</button>

      {/* <button onClick={increment}>count increment</button>

      <button onClick={titleWithParams}>change title with params</button>

      <h1>--------------</h1>
      <Users/> */}

      <h1>--------------</h1>

      <UsersPage/>
    
    </div>
  );
}

export default App;
