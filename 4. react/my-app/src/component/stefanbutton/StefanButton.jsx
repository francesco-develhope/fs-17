import { useState } from 'react'
import './StefanButton.css'

export function StefButton(){
  const [clicked, setClicked] = useState(0)
  function result(){
    setClicked((prev) => prev + 1)
  }
  return <div>
    <button onClick={result} className="button">click!</button>
    <p>Bottone cliccato: {clicked}</p>
  </div>
}
