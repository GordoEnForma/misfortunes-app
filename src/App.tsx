import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Note as NoteInterface } from './interfaces/NoteInterface';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';

export const App = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  
  return (

    <div className='container'>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/*" element={<HomePage notes={notes} setNotes={setNotes}/>} />
      </Routes>
      {/*  */}
      
    </div>
  )

}


