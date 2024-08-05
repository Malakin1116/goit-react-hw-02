

export default function Feedback ({items}) {
  return (
          <div>
            <ul>
              <li>Good: {items.Good}</li>
              <li>Neutral: {items.Neutral}</li>
              <li>Bad: {items.Bad}</li>
              <li>Total: {items.Total}</li>
              <li>Positive: {items.Positive}</li>
            </ul>
          </div>

  )

}