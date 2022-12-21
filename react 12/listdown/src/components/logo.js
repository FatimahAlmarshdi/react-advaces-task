import React from 'react'

export default function 



() {

    useEffect(()=>{
fetch('http://localhost:4000/graphql', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
  'Accept': 'application/json',
          
        },
        body: JSON.stringify({ query,
          variables:{LocationInput: { id, name ,region_id} }})
        
       })
       .then(r => r.json())
       .then(data => console.log('data returned:', data[0]));
},[])
const handlesubmit=(e)=>{
    console.log("")
  }
  
  return (
    <div>
        

  
        <div className="App">  <select>
        <option value="css"> Css book</option>
        <option value="javascript"> Javacript book</option>
        <option value="git"> Git book</option>
        <option value="html"> Html book</option>
      </select>
      <button> Remove </button>
      
      <button onClick={handlesubmit}>Remove</button> 
     </div>


    </div>
  )
}
