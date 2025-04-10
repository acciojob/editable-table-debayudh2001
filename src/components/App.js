
import React, { useMemo, useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  const editedRows = useRef([])
  
  function handleSaveChanges(e){
    e.preventDefault()
    console.log("Edited Rows:", [...new Set(editedRows.current)].sort((x,y) => x-y))
    editedRows.current = []
  }

  function handleChange(e, id){
    if(e.target.name === "name"){
      editedRows.current.push(id)
    }
    if(e.target.name === "age"){
      editedRows.current.push(id)
    }
  }

  return (
    <div>
      <form onSubmit={handleSaveChanges}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><input type="text" name="name" defaultValue="Ram" onChange={(e) => handleChange(e, 1)}  /></td>
            <td><input type="number" name="age" defaultValue="25" onChange={(e) => handleChange(e, 1)}  /></td>
          </tr>
          <tr>
            <td>2</td>
            <td><input type="text" name="name" defaultValue="Shyam" onChange={(e) => handleChange(e, 2)} /></td>
            <td><input type="number" name="age" defaultValue="30" onChange={(e) => handleChange(e, 2)} /></td>
          </tr>
          <tr>
            <td>3</td>
            <td><input type="text" name="name" defaultValue="Ali" onChange={(e) => handleChange(e, 3)}  /></td>
            <td><input type="number" name="age" defaultValue="35" onChange={(e) => handleChange(e, 3)}  /></td>
          </tr>
          <tr>
            <td>4</td>
            <td><input type="text" name="name" defaultValue="Shaw" onChange={(e) => handleChange(e, 4)} /></td>
            <td><input type="number" name="age" defaultValue="20"  onChange={(e) => handleChange(e, 4)}/></td>
          </tr>
          <tr>
            <td>5</td>
            <td><input type="text" name="name" defaultValue="Tavneet" onChange={(e) => handleChange(e, 5)} /></td>
            <td><input type="number" name="age" defaultValue="50" onChange={(e) => handleChange(e, 5)} /></td>
          </tr>
          <tr>
            <td>6</td>
            <td><input type="text" name="name" defaultValue="Lakshmi" onChange={(e) => handleChange(e, 6)} /></td>
            <td><input type="number" name="age" defaultValue="40" onChange={(e) => handleChange(e, 6)}  /></td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Save Changes</button>
      </form>
    </div>
  )
}

export default App
