import { useState } from 'react'
import { Note } from './components/Note';
import { NoteForm } from './components/NoteForm';
import { Note as NoteInterface } from './interfaces/NoteInterface';
import { MonthsList } from './utils/MonthsList'

export const App = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);

  const date = new Date();
  return (
    <div className='container'>
      <h1>Journal Page</h1>
      <h2>{date.getUTCDate()} of {MonthsList[date.getMonth()]}</h2>
      <NoteForm setNotes={setNotes} />
      <div className='notes-container'>
        <section >
          {notes.map((note, index) => (
            <Note key={index} date={note.date} title={note.title} content={note.content} />
          ))}
        </section>
      </div>
    </div>
  )

}


