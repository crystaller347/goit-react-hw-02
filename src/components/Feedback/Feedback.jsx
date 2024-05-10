import css from "./Feedback.module.css"

export default function Feedback({ good, neutral, bad, total, positiveFeedback }) {
    return (
        <div className={css.feedback}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positiveFeedback}%</p>
        </div>
    )
}