//  import { gql } from 'apollo-server-express'
import React from 'react'
import { useNavigate } from "react-router-dom"
import './user.css'
import {getAllLocation} from '../../components/api'
import * as AppActionType from '../../contextapi/actions/AppAction'

export const User = () => {
  const navigate = useNavigate()
  
  const { appState, appDispatch } = useContext(AppContext)

  useEffect(() => {
    const tree = new Tree(1, { id: 1, region: "region_id" })
  getAllLocation()
  .then(res => res.data.getAllLocation
    .map(location=> tree.insert(
      location.region_id,
      location.id,
      {
        name: location.location,
        checked: true,
        statue: "full"
      }
    ))
  )
  .then(() => appDispatch({
    type: AppActionType.GET_ALL,
    payload: tree
  }))
  .then(console.log(appState))
  .catch(err => console.error(err))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  //  go to the admin page
  const goBack = () => navigate(-1)

  return (
    <div className="container">
      <div className="top-btn">
        <Button
          className="bg-dark text-light"
          action={"Manage Regions"}
          handleAction={goBack}
        />
      </div>

      <div className="tree">
        <List parentNode={appState.regions.root} />
      </div>
    </div >
  )
}