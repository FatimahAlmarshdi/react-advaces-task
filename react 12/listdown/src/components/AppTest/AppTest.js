import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contextapi/contexts/AppContext'
import * as AppQuery from "../../appHelper/appQueries/AppQueries"
import {fetchData} from "../../appHelper/appData/AppData"
import * as appActions from '../../contextapi/actions/AppAction'

const AppTest = () => {
  const {appState,appDispatch} =useContext(AppContext)

  const getData = async()=>{
    const [queryName,newQuery] = AppQuery.getlocationByParentID()
    const result = await fetchData( queryName, newQuery); 
    appState.categoryInfo = result

    appDispatch({
      type:appActions.Update_AppState,
      newAppState:appState
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {
        appState.Location?.map((item,index)=>{
          return (
            <p key={index}>{item.strName}</p>
          )
        })
      }
    </div>
  )
}

export default AppTest;