
import Profile from './Profile.jsx'
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from './FriendList.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import transactions from "../transactions.json"

  
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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
  };
  

export default App;
