import React from 'react'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/StackStyles'

function Stack(props)
{
    const {classes,resources}=props
    return(
        <div className={classes.root}>
            <p className={classes.name}>{resources.nameoftheorganisation}</p>
            <div className={classes.descriptionContainer}><p className={classes.description}>{resources.descriptionandorserviceprovided}</p></div>
            {resources.phonenumber && <p>Phone number :{resources.phonenumber}</p>}
            {resources.contact && <p className={classes.contact}><a href={resources.contact} target="_blank" rel="noopener noreferrer">{resources.contact}</a></p>}
        </div>
    )
}

export default withStyles(styles)(Stack)