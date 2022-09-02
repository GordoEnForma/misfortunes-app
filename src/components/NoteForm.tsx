import { useState } from "react";
import { Note } from "../interfaces/NoteInterface";
interface NoteFormProps {
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export const NoteForm = ({ setNotes }: NoteFormProps) => {


    const [journalContent, setJournalContent] = useState('')
    const [journalTitle, setJournalTitle] = useState('')

    const date = new Date()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNotes((notes) => [{
            date: new Date(),
            content: journalContent,
            title: journalTitle
        }, ...notes]
        );
        setJournalTitle('');
        setJournalContent('');
        await fetch('http://localhost:3000/note',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ 
                content: journalContent,
                title: journalTitle,    
                date : new Date(),
            })  
        }).catch(e =>console.log(e) );
    }
    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input
                type="text"
                placeholder="Título"
                onChange={(e) => setJournalTitle(e.target.value)}
                value={journalTitle}
            />
            <textarea
                name="textDescription"
                cols={50}
                rows={10}
                placeholder='¿Qué te ha pasado papi?'
                onChange={(e) => setJournalContent(e.target.value)}
                value={journalContent}
            >
            </textarea>
            <button type='submit'>Submitea tu Desgracias</button>
        </form>
    )
}
