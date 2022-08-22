// import React from 'react'

import { Note as NoteProps } from "../interfaces/NoteInterface"

export const Note = ({date,title,content}:NoteProps) => {
    return (
        <article>
            <span>{date.getHours()}:{date.getMinutes()}</span>
            <h2>{title}</h2>
            <p className='notes-content'>
                {content}
            </p>
        </article>
    )
}
