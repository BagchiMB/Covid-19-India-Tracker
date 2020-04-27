import React,{useEffect} from 'react'
import MajorStat from './MajorStat'
import {withStyles} from "@material-ui/core/styles"
import styles from './styles/StateWiseCovidStyles'
import StateCovid from './StateCovid'
import {Link} from 'react-router-dom';
import Graph from './Graph'
import {useSpring, animated} from 'react-spring'
import ReactGA from 'react-ga'

let S1=["Confirmed :","Active :","Recovered :","Deaths :"]
let S2=['confirmed','active','recovered','deaths']
let S3=['deltaconfirmed','deltaactive','deltarecovered','deltadeaths']
let colors=[ ['#ffe0e6','#ff5f81','#ff0937'],['#eff7ff','#62aeff','#027dff'],['#e4f4e8','#75c687','#2AA747'],['#f6f6f7','#a5aaaf','#727b82']]

function StateWiseCovid(props)
{
    const Animatedprops = useSpring({
        to:{opacity:1}, 
        from: {opacity:0},
        config:{delay:2000, duration:1000}})

    let state=''
    let arr2=[]
    let arr=[]
    let TotData={}
    let districtData={}
    const {PSdata,classes,GSdata}=props
    if(PSdata.length >0)
    {
        
        TotData=PSdata[0]
        state=TotData.state

        for (let i=0;i<4;i++)
        {
            arr2.push(<MajorStat
                        key={S1[i]} 
                        head={S1[i]} 
                        fig={TotData[S2[i]]} 
                        delta={TotData[S3[i]]}
                        bg={colors[i][0]}
                        w={colors[i][1]}
                        f={colors[i][2]}/>)
        }
        if(PSdata.length >1)
        {
            const DisData=PSdata[1]
            districtData=DisData.districtData

            for (let i = 0; i < districtData.length; i++) 
            {
                arr.push(<StateCovid  active={districtData[i].active} 
                                    confirmed={districtData[i].confirmed} 
                                    deaths={districtData[i].deceased}
                                    recovered={districtData[i].recovered}
                                    name={districtData[i].district}
                                    deltarecovered={districtData[i].delta.recovered}
                                    deltadeaths={districtData[i].delta.deceased}
                                    deltaconfirmed={districtData[i].delta.confirmed}
                                    key={districtData[i].state}/>)  
            }
        }
        
        
    }
    useEffect(()=>{
        window.scrollTo(0, 0)
        ReactGA.pageview(window.location.pathname)
    },[])
    return(
        <animated.div style={Animatedprops} className={classes.root}>
        <div className={classes.heading}><h1>{state}</h1></div>
        <div className={classes.totalContainer}>
            <div className={classes.total}>
                {arr2}
            </div> 
            <p style={{color:'#e2321a'}}>Last updated: <span style={{color:'#e2322a',fontWeight:"700"}}>{TotData.lastupdatedtime} IST</span></p>
        </div>
        <div className={classes.GraphContainer}>
            <p className={classes.GraphP}>Spread Trends</p>
            <div className={classes.Graph}>
                <Graph Gdata={GSdata} attr={"totalconfirmed"} colors={colors[0]} leg={'Confirmed'}/>
                <Graph Gdata={GSdata} attr={"totalrecovered"} colors={colors[2]} leg={'Recovered'}/>
                <Graph Gdata={GSdata} attr={"totaldeceased"} colors={colors[3]} leg={'Deaths'}/>
            </div>
        </div>
        <div className={classes.tableContainer}>
                <p>District-Wise Data [Under Maintenance]</p>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th>Districts</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        {arr}
                    </tbody>
                </table>
                {PSdata[1]===undefined?<p>Sorry no data here</p>:<p>The patients whose districts we don't know are tagged under unknown</p>}
                <Link className={classes.btn} to='/'>Back</Link>
            </div>
        </animated.div>
    )
}
export default withStyles(styles)(StateWiseCovid)