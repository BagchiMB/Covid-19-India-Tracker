import React,{useEffect} from 'react'
import StateCovid from './StateCovid'
import MajorStat from './MajorStat'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/CovidStyles'
import Graph from './Graph'
import {useSpring, animated} from 'react-spring'
import ReactGA from 'react-ga'

let S1=["Confirmed :","Active :","Recovered :","Deaths :"]
let S2=['confirmed','active','recovered','deceased']
let S3=['deltaconfirmed','deltaactive','deltarecovered','deltadeaths']
let colors=[ ['#ffe0e6','#ff5f81','#ff0937'],['#eff7ff','#62aeff','#027dff'],['#e4f4e8','#75c687','#2AA747'],['#f6f6f7','#a5aaaf','#727b82']]

function Covid(props)
{
    const Animatedprops = useSpring({
        to:{opacity:1}, 
        from: {opacity:0},
        config:{delay:2000, duration:1000}})
    const {data,classes,Gdata}=props
    let arr=[]
    for (let i = 1; i < data.length; i++) 
    {
        arr.push(<StateCovid    active={data[i].active}
                                recovered={data[i].recovered}
                                confirmed={data[i].confirmed}
                                deaths={data[i].deaths}
                                name={data[i].state}
                                lastupdatedtime={data[i].lastupdatedtime}
                                deltaconfirmed={data[i].deltaconfirmed}
                                deltadeaths={data[i].deltadeaths}
                                deltarecovered={data[i].deltarecovered}
                                key={data[i].state}/>)  
    }

    let arr2=[]
    for (let i=0;i<4;i++)
    {
        if(Object.keys(data).length >=28)
        {
            if(i!==1)
            {
                arr2.push(<MajorStat
                    key={S1[i]} 
                    head={S1[i]} 
                    fig={Object.keys(data).length !== 0 && data["TT"]["total"][S2[i]]} 
                    delta={Object.keys(data).length !== 0 && data["TT"]["delta"][S2[i]]}
                    bg={colors[i][0]}
                    w={colors[i][1]}
                    f={colors[i][2]}/>)
            }
            else
            {
                arr2.push(<MajorStat
                    key={S1[i]} 
                    head={S1[i]} 
                    fig={Object.keys(data).length !== 0 && data["TT"]["total"]["confirmed"]-data["TT"]["total"]["recovered"]-data["TT"]["total"]["deceased"]-data["TT"]["total"]["migrated"]} 
                    delta={Object.keys(data).length !== 0 && data["TT"]["delta"][S2[i]]}
                    bg={colors[i][0]}
                    w={colors[i][1]}
                    f={colors[i][2]}/>)
            }
        }
        
    }
    useEffect(()=>{
        window.scrollTo(0, 0)
        ReactGA.pageview(window.location.pathname)
    },[])
    return(
        <animated.div style={Animatedprops} className={classes.root}>
            <div className={classes.heading}><h1>Covid-19 vs India</h1></div>
            <div className={classes.totalContainer}>
                <div className={classes.total}>
                    {arr2}
                </div> 
                <p style={{color:'#e2321a'}}>Last updated: <span style={{color:'#e2322a',fontWeight:"700"}}>{Object.keys(data).length >= 28 && `${data["TT"]["meta"].last_updated.substring(0, 10)} ${data["TT"]["meta"].last_updated.substring(12, 19)}`} IST</span></p>
            </div>
            {<div className={classes.GraphContainer}>
                <p className={classes.GraphP}>Spread Trends</p>
                <div className={classes.Graph}>
                    <Graph Gdata={Gdata} attr={"totalconfirmed"} colors={colors[0]} leg={'Confirmed'}/>
                    <Graph Gdata={Gdata} attr={"totalrecovered"} colors={colors[2]} leg={'Recovered'}/>
                    <Graph Gdata={Gdata} attr={"totaldeceased"} colors={colors[3]} leg={'Deaths'}/>
                </div>
            </div>}
            <div className={classes.tableContainer}>
                <p style={{textAlign:'center'}}>State bulletins and official handles are used to update the numbers. Therefore it is faster than ICMR (official) as it updates the information over night</p>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.nospecialheading}>State/UT</th>
                            <th className={classes.nospecialheading}>Confirmed</th>
                            <th className={classes.nospecialheading}>Active</th>
                            <th className={classes.nospecialheading}>Recovered</th>
                            <th className={classes.nospecialheading}>Deaths</th>
                            <th className={classes.specialheading}>Last Activity</th>
                        </tr>
                        {arr}
                    </tbody>
                </table>
                <p style={{textAlign:'center'}}>37 states/UTS/Special Areas affected</p>
            </div>
        </animated.div>
    )
}

export default withStyles(styles)(Covid)