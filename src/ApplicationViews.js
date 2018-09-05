import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
// import FriendList from './components/FriendList'
// import FriendForm from './Forms/FriendForm'
import Login from './components/Login'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import TaskForm from './Forms/TaskForm'
// import MessageList from './components/MessageList'
// import MessageForm from './Forms/MessageForm'
import NewsList from './components/NewsList'
import NewsForm from './Forms/NewsForm'
import NewsDetail from './components/NewsDetail'
// import JokeList from './components/JokeList'
// import JokeForm from './Forms/JokeForm'
import EventList from './components/EventList'
import EventForm from './Forms/EventForm'
import EventDetail from './components/EventDetails'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    news: [],
    messages: [],
    tasks: [],
    jokes: [],
    events: [],
    friends: [],
    isLoaded: false
  }

  addNews = news => DataManager.add("news", news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  deleteNews = id => DataManager.delete("news", id)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  editNews = (id, news) => DataManager.edit("news", id, news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  addMessage = messages => DataManager.add("messages", messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  deleteMessage = id => DataManager.delete("messages", id)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  editMessage = (id, messages) => DataManager.edit("messages", id, messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  addTask = task => DataManager.add("tasks", task)
    .then(() => DataManager.getAll("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  deleteTask = id => DataManager.delete("tasks", id)
    .then(() => DataManager.getAll("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  editTask = (id, tasks) => DataManager.edit("tasks", id, tasks)
    .then(() => DataManager.getAll("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  addJoke = joke => DataManager.add("jokes", joke)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  deleteJoke = id => DataManager.delete("jokes", id)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  editJoke = (id, jokes) => DataManager.edit("jokes", id, jokes)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  addEvent = event => DataManager.add("events", event)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))

  deleteEvent = id => DataManager.delete("events", id)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))

  editEvent = (id, events) => DataManager.edit("events", id, events)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))

  addFriend = friend => DataManager.add("friends", friend)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  deleteFriend = id => DataManager.delete("friends", id)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  editFriend = (id, friends) => DataManager.edit("friends", id, friends)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  componentDidMount() {

    const newState = {}

    DataManager.getAll("news")
      .then(allNews => {
        newState.news = allNews
      })
      .then(() => {
        DataManager.getAll("messages")
          .then(allMessages => {
            newState.messages = allMessages
          })
          .then(() => {
            DataManager.getAll("tasks")
              .then(allTasks => {
                newState.tasks = allTasks
              })
              .then(() => {
                DataManager.getAll("jokes")
                  .then(allJokes => {
                    newState.jokes = allJokes
                  })
                  .then(() => {
                    DataManager.getAll("events")
                      .then(allEvents => {
                        newState.events = allEvents
                      })
                      .then(() => {
                        DataManager.getAll("friends")
                          .then(allFriends => {
                            newState.friends = allFriends
                          })
                          .then(() => {
                            this.setState(newState)
                          })
                      })
                  })
              })
          })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/news/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsForm {...props}
              addNews={this.addNews} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/news/:newsId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsDetail {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* <Route exact path="/messages" render={props => {
          if (this.isAuthenticated()) {
            return <MessageList {...props}
              deleteMessage={this.deleteMessage}
              messages={this.state.messages} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        {/* <Route exact path="/messages/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageForm {...props}
              addMessage={this.addMessage} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        {/* <Route exact path="/messages/:messageId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageDetail {...props}
              deleteMessage={this.deleteMessage}
              messages={this.state.messages} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        <Route exact path="/tasks" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskList {...props}
              deleteTask={this.deleteTask}
              tasks={this.state.tasks} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
       <Route exact path="/tasks/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskForm {...props}
              addTask={this.addTask} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/tasks/:taskId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskDetail {...props} deleteTask={this.deleteTask} tasks={this.state.tasks} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* <Route exact path="/jokes" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeList {...props}
              deleteJoke={this.deleteJoke}
              jokes={this.state.jokes} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/jokes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeForm {...props}
              addJoke={this.addJoke} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        {/* <Route exact path="/jokes/:jokeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeDetail {...props} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        <Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventList {...props}
              deleteEvent={this.deleteEvent}
              events={this.state.events} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/events/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventForm {...props}
              addEvent={this.addEvent} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/events/:eventId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventDetail {...props} deleteEvent={this.deleteEvent} events={this.state.events} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* <Route exact path="/friends" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendList {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/friends/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendForm {...props}
              addFriend={this.addFriend} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
        {/* <Route exact path="/friends/:friendId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendDetail {...props} deleteFriend={this.deleteFriend} friends={this.state.friends} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}
      </React.Fragment >
    )
  }
}

