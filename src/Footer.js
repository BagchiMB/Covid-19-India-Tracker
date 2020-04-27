import React from 'react'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/FooterStyles'

function Footer(props)
{
    const {classes} = props
    return(
        <div className={classes.root}>
            <div className={classes.root2}>
                <div>
                <p className={classes.p}>A big salute to all the people who are on the Frontline | Jai Hind</p>
                </div>
                <div className={classes.q}><p>Mihir Bagchi <span role="img" aria-label="heart">❤️</span></p></div>
            </div>    
        </div>
    )
}
export default withStyles(styles)(Footer)