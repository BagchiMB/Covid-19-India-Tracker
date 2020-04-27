import React,{useEffect} from 'react'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/CovidStyles'
import {useSpring, animated} from 'react-spring'
import ReactGA from 'react-ga'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function Facts(props)
{
    const Animatedprops = useSpring({
        to:{opacity:1}, 
        from: {opacity:0},
        config:{delay:2000, duration:1000}})

    let p
    const {Factoids,classes}=props
    if(!isEmpty(Factoids))
    {
        p=Factoids.map((f)=><li>{f.banner}</li>)
    }
    useEffect(()=>{
        window.scrollTo(0, 0)
        ReactGA.pageview(window.location.pathname)
    },[])
    return(
        <animated.div style={Animatedprops} className={classes.root}>
        <div className={classes.heading}><h1>Facts</h1></div>
        <ul className={classes.ul}>{p}</ul>
        
        </animated.div>
    )
}
export default withStyles(styles)(Facts)