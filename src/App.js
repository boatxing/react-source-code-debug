import React, { useState } from 'react';
import State from './components/State'
import LanesDemo from './components/LanesDemo'
import AppSibling from './components/AppSibling'
import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities'
import Concurrent from './components/ConcurrentInput'
import Diff from './components/Diff'
import PropsDiff from './components/PropsDiff'
import './App.css';

class App extends React.Component {
  render() {
    return <PropsDiff/>
  }
}
// function App() {
//   const [ count, setCount ] = useState(0)
//   // return (
//   //   <div className="App">
//   //     <span className={'app-span'} onClick={() => setCount(count + 1)}>App{count}</span>
//   //     <AppSibling count={count}/>
//   //   </div>
//   // );
//   // return <TasksWithDifferentPriorities/>
//
//   return <Diff ref={'diffRef'}/>
// }

export default App;

