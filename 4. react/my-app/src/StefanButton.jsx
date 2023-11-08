import './StefanButton.css'

export function StefButton(){
  function result(){
    console.log('mi hai cliccato')
  }
  return <button onClick={result} className="button">click!</button>
}
