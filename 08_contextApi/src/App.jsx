import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/userContext.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1>User</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
