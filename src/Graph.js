import React from 'react'
import {Line} from 'react-chartjs-2';

function Graph(props)
{
    const {Gdata,attr,colors,leg}=props
    let a=Gdata
    let date=[]
    for (let i = 0; i < a.length; i++) 
    {
        date.push(a[i].date)   
    }
    let y=[]
    for (let i = 0; i < a.length; i++) 
    {
        y.push(a[i][attr])   
    }
    // console.log("a :",a)
    let range=y[y.length-1]
    let ro
    let step
    if(range>500000)
    {
        ro=500000
        step=100000
    }
    if(range>100000)
    {
        ro=100000
        step=50000
    }
    else if(range>50000)
    {
        ro=50000
        step=10000
    }
    else if(range>10000)
    {
        ro=10000
        step=5000
    }
    else if(range>5000)
    {
        ro=5000
        step=1000
    }
    else if(range > 1000)
    {
        ro=1000
        step=500
    }
    else if(range>500)
    {
        ro=500
        step=100
    }
    else if(range >100)
    {
        ro=100
        step=50
    }
    else if(range >50)
    {
        ro=50
        step=10
    }
    else
    {
        ro=10
        step=1
    }
    let r=Math.round(range/ro)*ro

    const data = {
        labels: date,
        datasets: [
          {
            label: `Total ${leg} Cases vs Days`,
            fill: false,
            lineTension: 0.1,
            borderColor: colors[1],
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: colors[2],
            pointBackgroundColor: colors[2],
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: colors[2],
            pointHoverBorderColor: colors[2],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 1,
            data: y,
          }
        ],
      };


      let options = {
        scales: {
            xAxes: [{
                ticks: {
                    min: date[0],
                    autoSkip:false,
                    fontSize:10,
                    maxRotation:0,
                    callback: function(value,index)
                    {
                        if((index===Math.floor(date.length/2)) || index===0 || index===date.length-1)
                        {
                            // console.log(value)
                            return value
                        }
                    }
                },
                gridLines:
                {
                    display:false
                },
                scaleLabel:
                {
                    display: true,
                    labelString: 'Date in Ascending Order'
                }
            }],
            yAxes: [{
                position: 'right',
                ticks: {
                    min: 0,
                    max:r+ro,
                    stepSize:step, 
                },
                gridLines:
                {
                    dispay:false
                },
                scaleLabel:
                {
                    display: true,
                    labelString: `Total Number of Cases`
                }
            }]
        },
        tooltips:{
            enabled:true,
            callbacks:{
                title: (item,data) => {
                    return item[0].label
                },
                label: (item,data) => {
                    let label=`Total ${leg}: ${item.value}`
                    return label
                },
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: colors[2],
                        backgroundColor: colors[2]
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#fff';
                }
            }
        },
    };



    return(
        <div style={{marginBottom:'2vh'}}>
            <div style={{backgroundColor:colors[0], borderRadius:"10px"}}>
                <Line data={data} 
                options={options}
                width={370} height={300} redraw={true}/>
            </div>
        </div>
    )
}
export default Graph