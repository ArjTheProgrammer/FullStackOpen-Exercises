  import ReactDOM from 'react-dom/client'
  import { configureStore } from '@reduxjs/toolkit'
  import { Provider } from 'react-redux'
  import App from './App'
  import anecdoteReducer from './reducers/anecdoteReducer'
  import filterReducer from './reducers/filterReducer'
  import messageReducer from './reducers/notificationReducer'
  // import anecdoteService from './services/anecdotes'

  const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      message: messageReducer
    }
  })

  // anecdoteService.getAll().then(anecdotes => {
  //   anecdotes.forEach(anecdote => {
  //     store.dispatch(appendAnecdote(anecdote))
  //   })
  // })

  store.subscribe(() => console.log(store.getState()))

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  )