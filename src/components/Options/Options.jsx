import css from "./Options.module.css"

export default function Options({ update, total, reset }) {
    return (
        <div className={css.buttonDiv}>
            <button onClick={() => { update("good") }} type="button">Good</button>
            <button onClick={() => { update("neutral") }} type="button">Neutral</button>
            <button onClick={() => { update("bad") }} type="button">Bad</button>
            {total === 0 ? "" : <button onClick={reset} type="button">Reset</button>}
        </div>
    )
}