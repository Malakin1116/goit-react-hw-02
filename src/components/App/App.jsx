
import { useState } from 'react';

import css from "./App.module.css"
import Description from "../Description/Description"
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
    setClicks(prev => {

      if (feedbackType === "reset") {
        return {
          ...prev,
          good: 0,
          neutral: 0,
          bad: 0,
          total: 0,
          positive: 0
        };
      }

      return {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
        positive: (feedbackType === 'good' || feedbackType === 'neutral') ? prev.positive + 1 : prev.positive
      };
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((clicks.positive / totalFeedback) * 100) : 0;


  return (
    <div className={css.pad}>
      <Description
        name="Sip Happens Café"
      />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 
        ? (<Feedback items={clicks} 
                     totalFeedback={totalFeedback} 
                     positivePercentage={positivePercentage} />)
        : (<Notification message="No feedback yet" />)
      }
    </div>
  );
}