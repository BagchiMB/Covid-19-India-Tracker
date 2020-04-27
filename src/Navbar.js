import React from 'react'
import {NavLink} from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/NavbarStyles'


function Navbar(props)
{
    const {classes,center}=props
    let p
    if(center==='')
    {
        p=<div className={classes.Nav}>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/facts'>Facts</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/'>Dashboard</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/resources'>Resources</NavLink></div>
    }
    else if(center==='facts')
    {
        p=<div className={classes.Nav}>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/'>Dashboard</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/facts'>Facts</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/resources'>Resources</NavLink></div>
    }
    else
    {
        p=<div className={classes.Nav}>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/'>Dashboard</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/resources'>Resources</NavLink>
        <NavLink className={classes.link} activeClassName={classes.NavActive} exact to='/facts'>Facts</NavLink></div>
    }
    return(
        <div className={classes.NavContainer}>
            {p}
        </div>
    )
}
export default withStyles(styles)(Navbar)