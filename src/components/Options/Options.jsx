import css from "./Options.module.css"

export default function Options({ updateFeedback }) {
    return (
      <div className={css.beetw}>
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
 
      </div>
    );
  }