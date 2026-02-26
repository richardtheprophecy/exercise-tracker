// Timer logic inspired by React useEffect documentation:
// https://react.dev/reference/react/useEffect

import { useEffect, useState } from "react"

function pad2(n) {
  return String(n).padStart(2, "0")
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [running])

  const handleReset = () => {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div>
      <h2>{name}</h2>

      <p style={{ fontSize: 48, margin: "16px 0" }}>{formatTime(seconds)}</p>

      <div style={{ display: "flex", gap: 10 }}>
        {!running ? (
          <button onClick={() => setRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setRunning(false)}>Stop</button>
        )}

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}