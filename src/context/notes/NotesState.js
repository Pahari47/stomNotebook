import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "66059d9d2eef1fd0d20ba529",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
        {
          "_id": "66059d9d2eef1fd0d20ba527",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
        {
          "_id": "66059d9d2eef1fd0d20ba528",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
        {
          "_id": "66059d9d2eef1fd0d20ba526",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
        {
          "_id": "66059d9d2eef1fd0d20ba525",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
        {
          "_id": "66059d9d2eef1fd0d20ba524",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
            "_id": "66059d9d2eef1fd0d20ba514",
            "user": "660457cda84a2fafa4d39abc",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-28T16:41:01.779Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote = ()=>{

      }
      // Edit a Note
      const editNote = ()=>{

      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
