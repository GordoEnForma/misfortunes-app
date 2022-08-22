import { useState } from 'react'
import { Note as NoteInterface } from './interfaces/NoteInterface';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';

export const App = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  
  return (

    <div className='container'>
      {/* <AuthPage /> */}
      <HomePage notes={notes} setNotes={setNotes}/>
    </div>
  )

}


