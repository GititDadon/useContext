import UserContext from '../components/UserContext.jsx'
import UserProfile from '../components/UserProfile.jsx'
import './App.css'

function App() {
  
  const userName = "Alice"
  return(
    
      <UserContext.Provider value={userName}>
        <UserProfile/>
      </UserContext.Provider>
    
  )
}

export default App
