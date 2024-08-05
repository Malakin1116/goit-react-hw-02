import css from "./Feedback.module.css"

export default function Feedback ({items}) {
  return (
          <div>
            <ul className={css.noTi}>
              <li>Good: {items.good}</li>
              <li>Neutral: {items.neutral}</li>
              <li>Bad: {items.bad}</li>
              <li>Total: {items.total}</li>
              <li>Positive: {items.positive}</li>
            </ul>
          </div>

  )

}