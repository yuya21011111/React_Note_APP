import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() { 
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState('none')
  const [value, setValue] = useState('')
  const [content, setContent] = useState('')

  const onAddNote = () => {
    console.log('新しくノートが追加されました。')
    const newnote = {
      id: Date.now(),
      title: value,
      content: content,
      modDate: new Date().toLocaleDateString('sv-SE'),
    }
    setNotes([...notes, newnote])
    console.log(notes)
  }

  const onDeleteNote = (id) => {
   const filterNotes = notes.filter((note) => note.id !== id)
  setNotes(filterNotes)
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeContent = (newContent) => {
    setContent(newContent);
  };
  return (
    <>
      <Sidebar onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main  onChange={handleChange} onChangeContent={handleChangeContent} />
    </>
  )
}

export default App
