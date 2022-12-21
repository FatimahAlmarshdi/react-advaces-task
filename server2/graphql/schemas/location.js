exports.Location=`
scalar Data
type Location{
    id:Int
    region_id: Int
    name: String 
}
`,
exports.LocationInput=`
input LocationInput{
    id:Int
    region_id: Int
    name: String
    
   
}
`
exports.LocationQueries=`
getlocationByParentID(region_id:Int):[Location!]!
getAllLocation:[Location!]!

`

exports.LocationMutation=`
addLocation(LocationInput:LocationInput):Location
updateLocation(LocationInput:LocationInput):Location


`