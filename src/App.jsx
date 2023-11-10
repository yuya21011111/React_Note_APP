import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import { data } from 'autoprefixer'

function App() { 
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState('none')

  const onAddNote = () => {
    console.log('新しくノートが追加されました。')
    const newnote = {
      id: Date.now(),
      title: '新しいノート',
      content: '新しいのノートの内容です。',
      modDate: new Date().toLocaleDateString('sv-SE'),
    }
    setNotes([...notes, newnote])
    console.log(notes)
  }

  const onDeleteNote = (id) => {
   const filterNotes = notes.filter((note) => note.id !== id)
  setNotes(filterNotes)
  }
  return (
    <>
      <Sidebar onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} />
    </>
  )
}

export default App
