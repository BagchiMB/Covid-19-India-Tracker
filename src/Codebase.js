import React,{useState,useEffect} from 'react'
import UseForm from './hooks/useFormHook'
import Stack from './Stack'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/CodebaseStyles'
import {useSpring, animated} from 'react-spring'
import ReactGA from 'react-ga'

const state=[<option  disabled selected value='first'>-- Select State --</option>]
let StateCity=[<option  disabled selected value>-- Select City --</option>]
const Services=[<option  disabled selected value>-- Select Service --</option>]

let OFA=[]

const resetInput=(id) =>
{
    let sel = document.getElementById(id)
    sel.selectedIndex = 0
}

function Codebase(props)
{
    const Animatedprops = useSpring({
        to:{opacity:1}, 
        from: {opacity:0},
        config:{delay:1000, duration:1000}})
    
    const Animatedprops2 = useSpring({
        to:{marginTop:0,opacity:1}, 
        from: {marginTop:-60,opacity:0},
        config:{duration:500}})

    const {classes,resources}=props
    const [stateVal,setStateVal]=UseForm('first')
    const [cityVal,setCityVal,resetCityVal]=UseForm('')
    const [servicesVal,setServicesVal,resetServicesVal]=UseForm('')
    const [show,setShow]=useState(false)
    const [FinalArray,setFinalArray]=useState([])
    const [search,setSearch,resetSearch]=UseForm('')


    if(resources.length!==0)
    {
        let currstate=''
        for (let i = 0; i < resources.length; i++) 
        {
            if(resources[i].state !== currstate)
            {
                state.push(<option value={resources[i].state}>{resources[i].state}</option>)
                currstate=resources[i].state
            }           
        }
    }
    const handleStateChange=(e) =>
    {
        resetInput('city')
        resetInput('services')
        resetCityVal()
        resetServicesVal()
        let s=e.target.value
        let CityArray=[]
        while(StateCity.length !==1)
        {
            StateCity.pop()    
        }
        while(Services.length !==1)
        {
            Services.pop()
        }
        for (let i = 0; i < resources.length; i++) 
        {
            if(resources[i].state === s)
            {
                if(!(CityArray.includes(resources[i].city)))
                StateCity=[...StateCity,<option value={resources[i].city}>{resources[i].city}</option>]
                // StateCity.push(<option value={resources[i].city}>{resources[i].city}</option>)
                CityArray.push(resources[i].city)
            }           
        }
        setStateVal(e)
    }
    const handleCityChange=(e)=>
    {
        resetInput('services')
        resetServicesVal()
        let c=e.target.value
        let ServiceArray=[]
        while(Services.length !==1)
        {
            Services.pop()
        }
        for (let i = 0; i < resources.length; i++) 
        {
            if(resources[i].city === c && resources[i].state === stateVal)
            {
                if(!(ServiceArray.includes(resources[i].category)))
                {
                    Services.push(<option value={resources[i].category}>{resources[i].category}</option>)
                    ServiceArray.push(resources[i].category)
                }
            }           
        }
        setCityVal(e)

    }
    const handleSubmit= (e)=>
    {
        e.preventDefault()
        let FA=[]
        setShow(true)
        for (let i = 0; i < resources.length; i++)
        {
            if(resources[i].state === stateVal && resources[i].city === cityVal && resources[i].category === servicesVal )
            {
                FA=[...FA,<Stack resources={resources[i]} />]
            }
        }
        OFA=FA
        setFinalArray(FA)
        resetSearch()
    }
    const handleSearch = (e)=>
    {
        setSearch(e)
        let se=e.target.value
        let NFA=OFA.filter(F => {
            return F.props.resources.nameoftheorganisation.toLowerCase().includes(se.toLowerCase())
        })
        setFinalArray(NFA)
    }
    useEffect(()=>{
        ReactGA.pageview('/resources') 
    },[])
    return(
        <animated.div style={Animatedprops} className={classes.root}>
            <div className={classes.heading}><h1>Resources</h1></div>
            <animated.div style={Animatedprops2} className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <select id='state' defaultValue={stateVal} onChange={handleStateChange}>{state}</select>
                    <select id='city' defaultValue={cityVal} onChange={handleCityChange}>{StateCity}</select>
                    <select id='services' defaultValue={servicesVal} onChange={setServicesVal}>{Services}</select>
                    <button type='submit'>Submit</button>    
                </form>
            </animated.div>
            {show && <div className={classes.info}>
                <div className={classes.infoWrapper}>
                    <div className={classes.infoBar}>
                        <div><p>About {FinalArray.length} results..</p></div>
                        <div className={classes.searchBar}>
                            <label>Search Organisation Name: </label>
                            <input value={search} className={classes.inp} onChange={handleSearch}/>
                        </div>
                    </div>
                    {FinalArray}
                </div> 
            </div>}
            
        </animated.div>
    )
}
export default withStyles(styles)(Codebase)
