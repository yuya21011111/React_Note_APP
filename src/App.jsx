import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() { 
  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    console.log('新しくノートが追加されました。')
    const newnote = {
      id: 1,
      title: '新しいノート',
      content: '新しいのノートの内容です。',
      modDate: Date.now(),
    }
    setNotes([...notes, newnote])
    console.log(notes)
  }
  return (
    <>
      <Sidebar onAddNote={onAddNote} />
    </>
  )
}

export default App
