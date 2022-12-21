
 export  async function fetchData(queryName,newQuery) {
    try {
      const response = await fetch('http://localhost:4000/graphql',{
        method: 'POST',
        body: JSON.stringify({ query: newQuery }),
        headers: {'Content-Type': 'application/json'}
    })
    const json = await response.json(); // // {data:{getAllData: [{…}, {…}, {…}, {…}]}}
    const data = json.data[queryName] // [{…}, {…}, {…}, {…}]
    return data
    } catch (error) {
      return { error: "400 Error :" + error };
    }
  }