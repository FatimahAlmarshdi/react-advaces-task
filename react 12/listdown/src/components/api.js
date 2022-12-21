// get all locations from server
export const getAllLocation = async () => {
  const query = `query{
        getAllLocation{
          id
          name
          region_id
        }
      }`

  return await fetchApi(query)
}

// get all locations by parent id from server
export const getPerntId = async (region_id) => {
  const query = `query{
        getlocationByParentID(region_id: ${region_id}){
          id
          name
          region_id
        }
      }`

  return await fetchApi(query)
}






export const addlocation = async (name, region_id) => {
  let mutation = `mutation  {
       addlocation(locationInput: { 
        region_id: ${region_id}
         name: "${name}"
         }) {
          id 
       region_id 
      name 
         }}`

  return await fetchApi(mutation)
}


export const updateLocation = async (name, id) => {
  let mutation = `mutation  {
    updateLocation(locationInput: { 
        id: ${id}
         name: "${name}"
         }) {
          id 
       region_id 
      name 
         }}`

  return await fetchApi(mutation)
}


// Fetch data from server
const fetchApi = async body => {

  return await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: body })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
