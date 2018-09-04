import React, { Component } from 'react';
import NewsForm from './Forms/NewsForm'
// import Friend from './components/Friend'
// import Login from './components/Login'
// import Task from './components/Task'
// import Message from './components/Message'
// import News from './components/News'
// import Joke from './components/Joke'
// import Event from './components/Event'

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nutshell Dos!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <NewsForm />
      </div>
    );
  }
}

export default App;
