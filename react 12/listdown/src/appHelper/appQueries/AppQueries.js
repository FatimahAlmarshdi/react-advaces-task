export function getlocationByParentID(region_id) {
    let queryName = "getAllLocation";
    let newQuery = `query{
        getlocationByParentID(root:${region_id}){
          id
          name
          region_id
        }
      }`

    return [queryName,newQuery]
}