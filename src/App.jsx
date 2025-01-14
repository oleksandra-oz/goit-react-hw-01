import { useState } from 'react'
import './App.css'
import './Profile.jsx'
import userData from "./userData.json";

function App() {
  const [count, setCount] = useState(0)
  
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
  };
  


}

export default App
