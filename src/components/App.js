
import React, { useMemo, useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  //const [editedRows, setEditedRows] = useState([])
   
  const editedRows = useRef([])

  let rowIds = useMemo(() => {
    let arr = []
    for(let i=1; i<=6; i++){
      arr.push(i)
    }
    return arr
  }, [])
  
  function handleChange(e, id){
    if(e.target.name === "name"){
      //setEditedRows([...editedRows, id])
      editedRows.current.push(id)
    }
    if(e.target.name === "age"){
      //setEditedRows([...editedRows, id])
      editedRows.current.push(id)
    }
  }

  function handleSaveChanges() {
    //console.log(`Edited Rows: ${[...new Set(editedRows)].sort((x,y) => x-y)}`)
    //setEditedRows([])
    console.log([...new Set(editedRows.current)].sort((x,y) => x-y))
    editedRows.current = []
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rowIds.map((id, ind) => {
            return (
              <tr key={ind}>
                <td>{id}</td>
                <td><input type="text" name="name" onChange={(e) => handleChange(e, id)} /></td>
                <td><input type="number" name="age" onChange={(e) => handleChange(e, id)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  )
}

export default App
