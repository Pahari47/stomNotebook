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
          "_id": "66059d9d2eef1fd0d20ba529",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
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
          "_id": "66059d9d2eef1fd0d20ba529",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
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
          "_id": "66059d9d2eef1fd0d20ba529",
          "user": "660457cda84a2fafa4d39abc",
          "title": "MY Title",
          "description": "Please wake up early",
          "tag": "persolnal",
          "date": "2024-03-28T16:41:01.779Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notesInitial)


    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
