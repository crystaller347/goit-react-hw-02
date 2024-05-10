// import './App.module.css'
import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx"
import Options from "../Options/Options.jsx"
import Feedback from "../Feedback/Feedback.jsx"
import Notification from "../Notification/Notification.jsx"

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options update={updateFeedback} total={totalFeedback} reset={resetFeedback} />
      {totalFeedback === 0 ? <Notification /> :
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback} />}
    </>
  );
}
