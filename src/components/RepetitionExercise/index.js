// Counter logic based on class examples and React useState documentation:
// https://react.dev/reference/react/useState

import { useState } from "react"

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{name}</h2>

      <p style={{ fontSize: 48, margin: "16px 0" }}>{count}</p>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}