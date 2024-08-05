
// import Profile from '../Profile/Profile'; 
// import FriendList from "../FriendList/FriendList/FriendList"
// import TransactionHistory from '../TransactionHistory/TransactionHistory';

// import userData from '../userData/userData.json'; 
// import friendsData from "../userData/friends.json"
// import transactions from "../userData/transactions.json"

// export default function App() {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />

//       <FriendList 
//         friends={friendsData} 
//       />
      
//       <TransactionHistory 
//         items={transactions}
//        />
//    </>
//   );
// }



import { useState } from 'react';

import css from "./App.module.css"
import Discription from "../Description/Discription"
import Options from "../Options/Options";
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1 });
  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1 });
  const handleReset = () => setClicks({good: 0, neutral: 0, bad: 0});

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = clicks.good + clicks.neutral; 

  
  const feedbackItems = {
    Good: clicks.good,
    Neutral: clicks.neutral,
    Bad: clicks.bad,
    Total: totalFeedback,
    Positive: positiveFeedback
  };

   return (
      <div className={css.pad}>
        <Discription
          name="Sip Happens Café"
        />

        <Options
          onGoodClick={handleGoodClick}
          onNeutralClick={handleNeutralClick}
          onBadClick={handleBadClick}
          onReset={handleReset}
        />

        <Feedback 
          items={feedbackItems} 
        />
      </div>
   );
}