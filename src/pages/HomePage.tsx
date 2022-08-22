import { Note } from "../components/Note";
import { NoteForm } from "../components/NoteForm";
import { Note as NoteInterface} from "../interfaces/NoteInterface";
import { MonthsList } from "../utils/MonthsList";

interface NoteProps {
    notes: NoteInterface[]
    setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}

export const HomePage = ({ notes, setNotes }: NoteProps) => {
    const date = new Date();
    return (
        <>
            <h1>El Diario de Gordazo</h1>
            <h2>{date.getUTCDate()} of {MonthsList[date.getMonth()]}</h2>
            <NoteForm setNotes={setNotes} />
            <div className='notes-container'>
                <section >
                    {notes.map((note, index) => (
                        <Note key={index} date={note.date} title={note.title} content={note.content} />
                    ))}
                </section>
            </div>
        </>
    )
}
