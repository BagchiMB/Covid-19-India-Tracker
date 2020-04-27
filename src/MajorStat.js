import React from 'react'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/MajorStatStyles'

function MajorStat(props)
{
    const {classes}=props
    return(
        <div className={classes.root} style={{backgroundColor:props.bg}}>
            <p className={classes.head} style={{color:props.w}}>{props.head}</p>
            <p className={classes.fig} style={{color:props.f}}>{props.fig}</p>
            <p className={classes.delta} style={{color:props.w}}>{props.delta!==undefined && <i className="fas fa-arrow-up"> {props.delta}</i>}</p>
        </div>
    )
}
export default withStyles(styles)(MajorStat)