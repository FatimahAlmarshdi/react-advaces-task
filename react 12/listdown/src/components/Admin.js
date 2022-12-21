//import logo from './logo.svg';
import React,{ useEffect,useState } from 'react';
import {getPerntId} from './api'
import { Panel } from './panle';



export default function Admin() {
   
  const [countries,setCountries]= useState([]);
  const [states,setStates]= useState([]);
  const [cities,setCities]= useState([]);

  const [country,setCountry]= useState({});
  const [state,setState]= useState({});
  const [city,setCity]= useState({});
  const [showState, setShowState] = useState(false)
  const [showCity, setShowCity] = useState(false)

  const [panel, setPanel] = useState(<></>)


  useEffect(()=>{
    getPerntId(1)
    .then(res => setCountries(res.data.getlocationByParentID))
    .catch(err => console.log(err))

  },[])
  
  useEffect(() => {console.log(country)
    if (country.id) {
console.log(country)

        getStates(country.id)
        setShowState(true)
    }
    if (state.id) {
        getCities(state.id)
    }
}, [country, state])

const reload = async () => {
  getCountries()
  setShowState(false)
  setShowCity(false)
}

//  get all countries
const getCountries = async () => await getPerntId(1)
  .then(res => setCountries(res.data.getPerntId))
  .catch(err => console.error(err))

const getStates = async (country_id) => await getPerntId(country_id)
.then(res => setStates(res.data.getlocationByParentID))
.catch(err => console.log(err))

const getCities = async (state_id) => await getPerntId(state_id)
        .then(res => setCities(res.data.getlocationByParentID))
        .catch(err => console.log(err))

//   const handleCountry= (e) => {
//     console.log(e)
   
//     const dt=states.filter(x=> x.region_id === country.id)
//     setState(dt);
//     console.log(country)
//   }
//  const  updateCountries=(e)=>{
//     console.log(e.target.value)
//   }

  // const handleState= (id) => {
  //   const dt=cities.filter(x=> x.region_id === id);
  //   setCity(dt);
  // }
  
  // const handlesubmit=(e)=>{
  //   console.log("")
  // }
  

  const addCountry = () => setPanel(<Panel
    region={{ parent_id: 1 }}
    placeholder={"Country Name"}
    value={null}
    action={"Add"}
    closePanel={() => setPanel(<></>)}
/>)

  const updateCountry = () => setPanel(<Panel location={{ id: country.id }} placeholder={"Country Name"} value={country.name} action={"update"} />)

  const addState = () => setPanel(<Panel location={{region_id: country.id }} placeholder={"State Name"} value={null} action={"add"} />)

  const updateState = () => setPanel(<Panel location={{ id: state.id }} placeholder={"State Name"} value={state.name} action={"update"} />)

  const addCity = () => setPanel(<Panel location={{ region_id: state.id }} placeholder={"City Name"} value={city.name} action={"add"} />)

  const updateCity = () => setPanel(<Panel location={{ id: city.id }} placeholder={"City Name"} value={city.name} action={"update"} />)
  
  

  return (
    <div className='App' >
      
   <div className='option'>
   <button onClick={reload}>Reload</button>
   
    <button onClick={addCountry} style={{alignItems:"center",background:"#999"}}> add countries</button>
    
     
   </div>
   <div className="App" style={{width:"440px",height:"10px"}} >
  
      <select id="ddlcountry" className='form-control select-class'
      onChange={e =>  setCountry({id: e.target.options[e.target.options.selectedIndex].getAttribute("accessKey"),
      name: e.target.value})}>
      <option value="0"> select country</option>
      { 
      countries &&
      countries !== undefined ?
      countries.map((ctr,index) =>{
        return(
          <option key={index} accessKey={ctr.id}>{ctr.name}</option> 

        )
      })
    
:'no country'
    }
      </select>  <button type="button" onClick={addState}>adds</button>
                <button type="button" onClick={updateCountry}>update</button>
      </div>
      

    
      
                        
   <div className="App" style={{width:"440px" ,height:"20px"}} >
      <select  id="ddlstates"  className='form-control select-class'     onChange={e =>  setState({id: e.target.value, 
      name: e.target.value})}>
      <option value="0"> select state</option>
      {
      states &&
      states !== undefined ?
      states.map((ctr,index) =>{
        return(
          
          <option key={index} value={ctr.id}>{ctr.name}</option>
          
        ) 
      })
      
:'no states'
    } 
      </select><button type="button" onClick={addCity}>addState</button>
                <button type="button" onClick={updateState}>updateState</button>
                
                </div>




      
   <div className="App" style={{width:"440px" ,height:"20px"}} >

<select  id="ddlCity"  className='form-control select-class'onChange={e =>  setCity({id: e.target.value, 
      name: e.target.value})} >
      <option value="0"> select city</option>
      {
      cities &&
      cities !== undefined ?
      cities.map((ctr,index) =>{
        return(
          <option key={index} value={ctr.id}>{ctr.name}</option>
        
        )
      })
    
:'no city'
    }  
  
      </select>
      <button type="button" onClick={updateCity}>update</button>  



            {panel}
</div>
      
      
    </div>

  );
}
