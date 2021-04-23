import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [line, setLine] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    const newList = [...list]
    if(!text) return
    newList.push(text)
    setList(newList)
    setText('')
  } 
  return (
    <div className="App">
      <h1>List of Items</h1>
      <form onSubmit={handleClick}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div>
        {list.map((item, index) => {
          return (
            <>
            <li onClick={() => setLine(prev => !prev)} className={`${line ? 'strike-through' : ''}`} key={index}>{item}</li>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
