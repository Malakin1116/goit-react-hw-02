
import Profile from '../Profile/Profile'; 
import FriendList from "../FriendList/FriendList/FriendList"
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../userData/userData.json'; 
import friendsData from "../userData/friends.json"
import transactions from "../userData/transactions.json"

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList 
        friends={friendsData} 
      />
      
      <TransactionHistory 
        items={transactions}
       />
   </>
  );
}

