import React from 'react'
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/StateCovidStyles'


let d=new Date()
function StateCovid(props)
{
    // let {active,confirmed,deaths,recovered,state,lastupdatedtime,deltaconfirmed,deltadeaths,deltarecovered}=props.data
    let {active,confirmed,deaths,recovered,name,lastupdatedtime,deltaconfirmed,deltadeaths,deltarecovered}=props
    let {classes}=props
    const handleDate=(d2)=>
    {
        const res=d2.split(" ")
        const t2=res[1]
        const d21=res[0]
        const d21a=d21.split("/")
        const dd=parseInt(d21a[0])
        const mm=parseInt(d21a[1])
        // const yyyy=parseInt(d21a[2])
        const t2a=t2.split(":")
        const h=parseInt(t2a[0])
        const m=parseInt(t2a[1])
        // const s=parseInt(t2a[2])
        if((d.getHours()===h && d.getMinutes()===m) && (d.getDate()===dd && d.getMonth()+1===mm) )
        {
            return "Just Now"
        }
        else if((d.getDate()===dd && d.getMonth()+1===mm) && d.getHours()>h)
        {
            const diff=d.getHours()-h
            const str=diff+" hours ago"
            return str;
        }
        else if((d.getDate()===dd && d.getMonth()+1===mm && d.getHours()===h) && d.getMinutes()>m)
        {
            const diff=d.getMinutes()-m
            const str=diff+" minutes ago"
            return str
        }
        else if(d.getDate()>dd || d.getMonth()+1>mm)
        {
            if(d.getDate()>dd+1)
            {
                return "more than a day"
            }
            let flag=0
            let hc=d.getHours()
            while(hc !==0)
            {
                flag=flag+1
                hc=hc-1
            }
            hc=24;
            while(hc!==h)
            {
                flag=flag+1
                hc=hc-1
            }
            if(flag>=24)
            {
                return "more than a day"
            }
            else
            {
                const str=flag+" hours ago"
                return str
            }
        }
    }
    return(
        <tr>
            {lastupdatedtime !== undefined ? 
            <td className={classes.special2}><Link className={classes.s} to={`/state/${name}`}>{name}</Link></td>:
            <td className={classes.nospecial}>{name}</td>}
            <td className={classes.nospecial}>{confirmed} <span className={classes.c} style={{color:'#ff0937'}}>{parseInt(deltaconfirmed)!==0 && <i className="fas fa-arrow-up"> {deltaconfirmed}</i>}</span></td>
            <td className={classes.nospecial}>{active}</td>
            <td className={classes.nospecial}>{recovered} <span className={classes.r} style={{color:'#2AA747'}}>{parseInt(deltarecovered)!==0 && <i className="fas fa-arrow-up"> {deltarecovered}</i>}</span></td>
            <td className={classes.nospecial}>{deaths} <span className={classes.d} style={{color:'#727b82'}}>{parseInt(deltadeaths)!==0 && <i className="fas fa-arrow-up"> {deltadeaths}</i>}</span></td>
            {lastupdatedtime !== undefined && <td className={classes.special}>{handleDate(lastupdatedtime)}</td>}
        </tr>
    )
}
export default withStyles(styles)(StateCovid)