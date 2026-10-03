import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <output className="counter-value" aria-live="polite">
        {count}
      </output>
      <div className="button-row">
        <button type="button" className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
          Add one
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setCount(0)} disabled={count === 0}>
          Reset
        </button>
      </div>
    </div>
  )
}
