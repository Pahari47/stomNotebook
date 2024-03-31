import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)
      // Get all Notes
      const getNotes = async ()=>{
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDU3Y2RhODRhMmZhZmE0ZDM5YWJjIn0sImlhdCI6MTcxMTYyMzcwM30.17krfES3Bs42OTIk9TwExx_UuoPoEkdWxFy21bKrdNU"
          }
        }); 
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }
      // Add a Note
      const addNote = async (title, description, tag)=>{
        // TODO: API Call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDU3Y2RhODRhMmZhZmE0ZDM5YWJjIn0sImlhdCI6MTcxMTYyMzcwM30.17krfES3Bs42OTIk9TwExx_UuoPoEkdWxFy21bKrdNU"
          },
          body: JSON.stringify({title, description, tag})
        }); 
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
      const deleteNote = async (id)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDU3Y2RhODRhMmZhZmE0ZDM5YWJjIn0sImlhdCI6MTcxMTYyMzcwM30.17krfES3Bs42OTIk9TwExx_UuoPoEkdWxFy21bKrdNU"
          }
        }); 
        const json = response.json();
        console.log(json)

        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = async (id, title, description, tag)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDU3Y2RhODRhMmZhZmE0ZDM5YWJjIn0sImlhdCI6MTcxMTYyMzcwM30.17krfES3Bs42OTIk9TwExx_UuoPoEkdWxFy21bKrdNU"
          },
          body: JSON.stringify({title, description, tag})
        }); 
        const json = response.json();
        
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
          
        }
      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
