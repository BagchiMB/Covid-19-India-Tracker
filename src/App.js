import React,{useState,useEffect} from 'react';
import Covid from './Covid'
import {Route,Switch} from "react-router-dom"
import StateWiseCovid from './StateWiseCovid'
import axios from 'axios'
import Footer from './Footer'
import Navbar from './Navbar'
import Facts from './Facts'
import Codebase from './Codebase'
import './App.css'
import ReactGA from 'react-ga'

function App() {
  const [data, setData] = useState({ statewise: [] });
  const [Sdata,SetSdata] = useState({})
  const [Gdata,setGdata] = useState({})
  const [GSdata,setGSdata]= useState({})
  const [facts,setFacts]= useState({})
  const [resources,setResources]= useState([])
  let [CN,setCN]=useState('dashboard')
  useEffect(()=>{
    const dataCall = async ()=>
    {
        const res= await axios('https://api.covid19india.org/data.json');
        // setData(res.data.statewise)
        setGdata(res.data.cases_time_series)

        const reRes= await axios('https://api.covid19india.org/v3/min/data.min.json');
        setData(reRes.data)

        const res2= await axios('https://api.covid19india.org/v2/state_district_wise.json');
        SetSdata(res2.data)
        const res3= await axios('https://api.covid19india.org/states_daily.json')
        setGSdata(res3.data.states_daily)
        const res4= await axios('https://api.covid19india.org/website_data.json')
        setFacts(res4.data.factoids)
        const res5= await axios('https://api.covid19india.org/resources/resources.json')
        setResources(res5.data.resources)
    }
    dataCall()
    ReactGA.initialize('UA-164667005-1')

    ReactGA.pageview(window.location.pathname)

  },[])
  const ParticularStateData= (n)=>
  {
    let arr=[]
    for (let i = 0; i < data.length; i++) 
    {
      if(data[i].state===n)
      {
        arr.push(data[i])
      } 
    }
    for (let i = 0; i < Sdata.length; i++) 
    {
      if(Sdata[i].state===n)
      {
        arr.push(Sdata[i])
      } 
    }
    return arr
  }
  const GraphStateData = (n)=>
  {
    let state=[]
    
    for (let i = 0; i < data.length; i++) 
    {
      let obj={stateName:'',stateCode:''}
      obj.stateName=data[i].state
      obj.stateCode=data[i].statecode
      state.push(obj)  
    }
    let index=0
    let stateDaily=[]
    for(let i=0;i<GSdata.length;i++)
    {
      // console.log("i:",i)
      // console.log(GSdata[i])
      
      let obj={stateCode:'',date:'',recovered:'',deceased:'',confirmed:'',totalrecovered:0,totaldeceased:0,totalconfirmed:0}
      for(let i=1;i<state.length;i++)
      {
        if(state[i].stateName===n)
        {
          obj.stateCode=state[i].stateCode.toLowerCase()
          break;
        }
      }


        obj.date=GSdata[i].date
        obj.confirmed=GSdata[i][obj.stateCode]

        if(i===0)
        {
          obj.totalconfirmed=parseInt(GSdata[i][obj.stateCode])
          i=i+1
        }
        else
        {

          obj.totalconfirmed=stateDaily[index-1].totalconfirmed+parseInt(GSdata[i][obj.stateCode])
          i=i+1
        }


        obj.recovered=GSdata[i][obj.stateCode]
        if(i===1)
        {
          obj.totalrecovered=parseInt(GSdata[i][obj.stateCode])
          i=i+1
        }
        else
        {
          obj.totalrecovered=stateDaily[index-1].totalrecovered+parseInt(GSdata[i][obj.stateCode])
          i=i+1
        }



        obj.deceased=GSdata[i][obj.stateCode]
        if(i===2)
        {
          obj.totaldeceased=parseInt(GSdata[i][obj.stateCode])
        }
        else
        {
          obj.totaldeceased=stateDaily[index-1].totaldeceased+parseInt(GSdata[i][obj.stateCode])

        }


      index=index+1

      stateDaily=[...stateDaily,obj]
      console.log(stateDaily)

    }
    return stateDaily
  }
  function changeNav(n)
  {
    let name=n.slice(1)
    setCN(name)
    return name
  }
  return (
    <div className="App">
      {<Navbar center={CN}/>}
      <Switch>
        <Route exact path='/' render={(routeProps)=> <Covid data={data} Gdata={Gdata} path={changeNav(routeProps.location.pathname)} />} />
        <Route exact path='/state/:Sname' render={(routeProps)=> <StateWiseCovid PSdata={ParticularStateData(routeProps.match.params.Sname)} GSdata={GraphStateData(routeProps.match.params.Sname)}  />} />
        <Route exact path='/facts' render={(routeProps)=> <Facts Factoids={facts} path={changeNav(routeProps.location.pathname)}/> } />
        <Route exact path='/resources' render={(routeProps)=> <Codebase resources={resources} path={changeNav(routeProps.location.pathname)}/>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
