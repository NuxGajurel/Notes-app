import React, { useState } from 'react'

const App = () => {
  const [newNote , setNewNote] = useState("");
  const [notes ,setNotes] = useState([]);
  const [editing , setEditing] =useState(null);
  const [editingText , setEditingText]= useState("");
  const [searchs , setSearchs] = useState("");
  const handleAddNote =()=>{
     const note={
    id : Math.random() + Date.now(),
    text : newNote,
  };
  setNotes([...notes , note])
 setNewNote("");
  }
const handleDelete=(id)=>{
 const updated = notes.filter((note)=> note.id !== id )


 setNotes(updated);
}
const handleEdit=(id , text)=>{
  setEditing(id);
  setEditingText(text)

};
const handleCancle =()=>{
  setEditing(null);
  setEditingText("");
}

  const handleSaveEdit =(id)=>{
    const noteUpdate = notes.map((note)=> note.id === id ?{...note ,text : editingText }:note
   )
   setNotes(noteUpdate);
   setEditing(null);
   setEditingText("");
  }
  const filterNotes = notes.filter((note)=>   note.text.toLowerCase().includes(searchs.toLowerCase()))
  return (
    <div>
      <h1>Note App</h1>
      <input onChange={(e)=> setNewNote(e.target.value)} type="text" placeholder='Enter Note ' value={newNote} />
      
      <button onClick={handleAddNote}> Add</button>
      <input type="text"  onChange={(e) => setSearchs(e.target.value)}placeholder='Search Note' />
      <button>Search</button>
    <ul>  {filterNotes.map((note)=>(
   <li key={note.id}>{note.text} 
  { editing === note.id ? (
  <div> 
    <input type="text" value={editingText} onChange={(e)=> setEditingText(e.target.value)} />
    <button onClick={()=> handleSaveEdit(note.id)}>Save</button>
     <button onClick={()=> handleCancle(note.id)}>Cancle</button>
    {/* <button>Edit</button>  */}
  </div>
):(
  <div>
    {/* {note.text} */}
    <button onClick={()=> handleEdit(note.id , note.text) }>Edit</button>
    <button onClick={()=> handleDelete(note.id)}> Delete</button>  
  </div>
)

}
     {/* <button onCli ck={()=> handleEdit(note.id , note.text)}>Edit </button>  */}
    
    </li>
      ))}  
      </ul>
    </div>

  )
}

export default App