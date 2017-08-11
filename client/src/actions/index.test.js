import {ADD_NOTE, addNote, SET_NOTES, setNotes, fetchNotes, postNotes, deleteNote} from './index'

describe ('addNote', () => {
    it ('It should return the action', () => {
        const action = addNote()
        expect(action.type).toEqual(ADD_NOTE);
    } )
})

describe ('setNotes', () => {
    it ('It should return the action', () => {
        const action = setNotes()
        expect(action.type).toEqual(SET_NOTES);
    } )
})
