
import { useState } from 'react';

import css from "./App.module.css"
import Discription from "../Description/Discription"
import Options from "../Options/Options";
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0, 
    positive: 0 
  });

  const updateFeedback = (feedbackType) => {
    setClicks(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
      total: prev.total + 1,
      positive: (feedbackType === 'good' || feedbackType === 'neutral')  ? prev.positive + 1 : prev.positive
    }));
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <div className={css.pad}>
      <Discription
        name="Sip Happens Café"
      />

      <Options
       updateFeedback={updateFeedback}
      />

      {totalFeedback > 0 ? (<Feedback items={clicks} />) 
                          : (<Notification message="No feedback yet" />)
      }
    </div>
  );
}