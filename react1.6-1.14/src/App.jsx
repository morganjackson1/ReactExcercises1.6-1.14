import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const score = good * 1 + neutral * 0 + bad * -1 
  const average = total === 0 ? 0 : score / total
  const positive = total === 0 ? 0 : (good / total) * 100


  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>

      <p>total: {total}</p>
      <p>average: {average.toFixed(2)}</p> 
      <p>positive: {positive.toFixed(2)} %</p>
    
    </div>
  )
}


export default App