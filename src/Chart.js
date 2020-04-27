import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


const dataa=
{

    "cases_time_series": [
        {
            "dailyconfirmed": "1",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "30 January ",
            "totalconfirmed": "1",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "31 January ",
            "totalconfirmed": "1",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "01 February ",
            "totalconfirmed": "1",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "1",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "02 February ",
            "totalconfirmed": "2",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "1",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "03 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "04 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "05 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "06 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "07 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "08 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "09 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "10 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "11 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "12 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "0"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "1",
            "date": "13 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "1"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "14 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "1"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "15 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "1"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "1",
            "date": "16 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "2"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "17 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "2"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "18 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "2"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "19 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "2"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "1",
            "date": "20 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "21 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "22 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "23 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "24 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "25 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "26 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "27 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "28 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "29 February ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "0",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "01 March ",
            "totalconfirmed": "3",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "2",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "02 March ",
            "totalconfirmed": "5",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "1",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "03 March ",
            "totalconfirmed": "6",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "22",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "04 March ",
            "totalconfirmed": "28",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "2",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "05 March ",
            "totalconfirmed": "30",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "1",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "06 March ",
            "totalconfirmed": "31",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "3",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "07 March ",
            "totalconfirmed": "34",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "5",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "08 March ",
            "totalconfirmed": "39",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "9",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "09 March ",
            "totalconfirmed": "48",
            "totaldeceased": "0",
            "totalrecovered": "3"
        },
        {
            "dailyconfirmed": "15",
            "dailydeceased": "0",
            "dailyrecovered": "1",
            "date": "10 March ",
            "totalconfirmed": "63",
            "totaldeceased": "0",
            "totalrecovered": "4"
        },
        {
            "dailyconfirmed": "8",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "11 March ",
            "totalconfirmed": "71",
            "totaldeceased": "0",
            "totalrecovered": "4"
        },
        {
            "dailyconfirmed": "10",
            "dailydeceased": "1",
            "dailyrecovered": "0",
            "date": "12 March ",
            "totalconfirmed": "81",
            "totaldeceased": "1",
            "totalrecovered": "4"
        },
        {
            "dailyconfirmed": "10",
            "dailydeceased": "0",
            "dailyrecovered": "6",
            "date": "13 March ",
            "totalconfirmed": "91",
            "totaldeceased": "1",
            "totalrecovered": "10"
        },
        {
            "dailyconfirmed": "11",
            "dailydeceased": "1",
            "dailyrecovered": "0",
            "date": "14 March ",
            "totalconfirmed": "102",
            "totaldeceased": "2",
            "totalrecovered": "10"
        },
        {
            "dailyconfirmed": "10",
            "dailydeceased": "0",
            "dailyrecovered": "3",
            "date": "15 March ",
            "totalconfirmed": "112",
            "totaldeceased": "2",
            "totalrecovered": "13"
        },
        {
            "dailyconfirmed": "14",
            "dailydeceased": "0",
            "dailyrecovered": "1",
            "date": "16 March ",
            "totalconfirmed": "126",
            "totaldeceased": "2",
            "totalrecovered": "14"
        },
        {
            "dailyconfirmed": "20",
            "dailydeceased": "1",
            "dailyrecovered": "1",
            "date": "17 March ",
            "totalconfirmed": "146",
            "totaldeceased": "3",
            "totalrecovered": "15"
        },
        {
            "dailyconfirmed": "25",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "18 March ",
            "totalconfirmed": "171",
            "totaldeceased": "3",
            "totalrecovered": "15"
        },
        {
            "dailyconfirmed": "27",
            "dailydeceased": "1",
            "dailyrecovered": "5",
            "date": "19 March ",
            "totalconfirmed": "198",
            "totaldeceased": "4",
            "totalrecovered": "20"
        },
        {
            "dailyconfirmed": "58",
            "dailydeceased": "0",
            "dailyrecovered": "3",
            "date": "20 March ",
            "totalconfirmed": "256",
            "totaldeceased": "4",
            "totalrecovered": "23"
        },
        {
            "dailyconfirmed": "78",
            "dailydeceased": "0",
            "dailyrecovered": "0",
            "date": "21 March ",
            "totalconfirmed": "334",
            "totaldeceased": "4",
            "totalrecovered": "23"
        },
        {
            "dailyconfirmed": "69",
            "dailydeceased": "3",
            "dailyrecovered": "0",
            "date": "22 March ",
            "totalconfirmed": "403",
            "totaldeceased": "7",
            "totalrecovered": "23"
        },
        {
            "dailyconfirmed": "94",
            "dailydeceased": "2",
            "dailyrecovered": "2",
            "date": "23 March ",
            "totalconfirmed": "497",
            "totaldeceased": "9",
            "totalrecovered": "25"
        },
        {
            "dailyconfirmed": "74",
            "dailydeceased": "1",
            "dailyrecovered": "15",
            "date": "24 March ",
            "totalconfirmed": "571",
            "totaldeceased": "10",
            "totalrecovered": "40"
        },
        {
            "dailyconfirmed": "86",
            "dailydeceased": "1",
            "dailyrecovered": "3",
            "date": "25 March ",
            "totalconfirmed": "657",
            "totaldeceased": "11",
            "totalrecovered": "43"
        },
        {
            "dailyconfirmed": "73",
            "dailydeceased": "5",
            "dailyrecovered": "7",
            "date": "26 March ",
            "totalconfirmed": "730",
            "totaldeceased": "16",
            "totalrecovered": "50"
        },
        {
            "dailyconfirmed": "153",
            "dailydeceased": "3",
            "dailyrecovered": "25",
            "date": "27 March ",
            "totalconfirmed": "883",
            "totaldeceased": "19",
            "totalrecovered": "75"
        },
        {
            "dailyconfirmed": "136",
            "dailydeceased": "5",
            "dailyrecovered": "10",
            "date": "28 March ",
            "totalconfirmed": "1019",
            "totaldeceased": "24",
            "totalrecovered": "85"
        },
        {
            "dailyconfirmed": "120",
            "dailydeceased": "3",
            "dailyrecovered": "17",
            "date": "29 March ",
            "totalconfirmed": "1139",
            "totaldeceased": "27",
            "totalrecovered": "102"
        },
        {
            "dailyconfirmed": "187",
            "dailydeceased": "14",
            "dailyrecovered": "35",
            "date": "30 March ",
            "totalconfirmed": "1326",
            "totaldeceased": "41",
            "totalrecovered": "137"
        },
        {
            "dailyconfirmed": "309",
            "dailydeceased": "6",
            "dailyrecovered": "13",
            "date": "31 March ",
            "totalconfirmed": "1635",
            "totaldeceased": "47",
            "totalrecovered": "150"
        },
        {
            "dailyconfirmed": "424",
            "dailydeceased": "6",
            "dailyrecovered": "19",
            "date": "01 April ",
            "totalconfirmed": "2059",
            "totaldeceased": "53",
            "totalrecovered": "169"
        },
        {
            "dailyconfirmed": "486",
            "dailydeceased": "16",
            "dailyrecovered": "22",
            "date": "02 April ",
            "totalconfirmed": "2545",
            "totaldeceased": "69",
            "totalrecovered": "191"
        },
        {
            "dailyconfirmed": "560",
            "dailydeceased": "14",
            "dailyrecovered": "39",
            "date": "03 April ",
            "totalconfirmed": "3105",
            "totaldeceased": "83",
            "totalrecovered": "230"
        },
        {
            "dailyconfirmed": "579",
            "dailydeceased": "13",
            "dailyrecovered": "56",
            "date": "04 April ",
            "totalconfirmed": "3684",
            "totaldeceased": "96",
            "totalrecovered": "286"
        },
        {
            "dailyconfirmed": "609",
            "dailydeceased": "22",
            "dailyrecovered": "43",
            "date": "05 April ",
            "totalconfirmed": "4293",
            "totaldeceased": "118",
            "totalrecovered": "329"
        },
        {
            "dailyconfirmed": "484",
            "dailydeceased": "16",
            "dailyrecovered": "65",
            "date": "06 April ",
            "totalconfirmed": "4777",
            "totaldeceased": "134",
            "totalrecovered": "394"
        },
        {
            "dailyconfirmed": "572",
            "dailydeceased": "27",
            "dailyrecovered": "75",
            "date": "07 April ",
            "totalconfirmed": "5349",
            "totaldeceased": "161",
            "totalrecovered": "469"
        },
        {
            "dailyconfirmed": "565",
            "dailydeceased": "20",
            "dailyrecovered": "96",
            "date": "08 April ",
            "totalconfirmed": "5914",
            "totaldeceased": "181",
            "totalrecovered": "565"
        },
        {
            "dailyconfirmed": "813",
            "dailydeceased": "46",
            "dailyrecovered": "70",
            "date": "09 April ",
            "totalconfirmed": "6727",
            "totaldeceased": "227",
            "totalrecovered": "635"
        },
        {
            "dailyconfirmed": "871",
            "dailydeceased": "22",
            "dailyrecovered": "151",
            "date": "10 April ",
            "totalconfirmed": "7598",
            "totaldeceased": "249",
            "totalrecovered": "786"
        },
        {
            "dailyconfirmed": "854",
            "dailydeceased": "40",
            "dailyrecovered": "186",
            "date": "11 April ",
            "totalconfirmed": "8452",
            "totaldeceased": "289",
            "totalrecovered": "972"
        },
        {
            "dailyconfirmed": "758",
            "dailydeceased": "42",
            "dailyrecovered": "114",
            "date": "12 April ",
            "totalconfirmed": "9210",
            "totaldeceased": "331",
            "totalrecovered": "1086"
        },
        {
            "dailyconfirmed": "1243",
            "dailydeceased": "27",
            "dailyrecovered": "112",
            "date": "13 April ",
            "totalconfirmed": "10453",
            "totaldeceased": "358",
            "totalrecovered": "1198"
        },
        {
            "dailyconfirmed": "1031",
            "dailydeceased": "37",
            "dailyrecovered": "167",
            "date": "14 April ",
            "totalconfirmed": "11484",
            "totaldeceased": "395",
            "totalrecovered": "1365"
        },
        {
            "dailyconfirmed": "886",
            "dailydeceased": "27",
            "dailyrecovered": "144",
            "date": "15 April ",
            "totalconfirmed": "12370",
            "totaldeceased": "422",
            "totalrecovered": "1509"
        },
        {
            "dailyconfirmed": "1061",
            "dailydeceased": "26",
            "dailyrecovered": "258",
            "date": "16 April ",
            "totalconfirmed": "13431",
            "totaldeceased": "448",
            "totalrecovered": "1767"
        },
        {
            "dailyconfirmed": "922",
            "dailydeceased": "38",
            "dailyrecovered": "273",
            "date": "17 April ",
            "totalconfirmed": "14353",
            "totaldeceased": "486",
            "totalrecovered": "2040"
        },
        {
            "dailyconfirmed": "1371",
            "dailydeceased": "35",
            "dailyrecovered": "426",
            "date": "18 April ",
            "totalconfirmed": "15724",
            "totaldeceased": "521",
            "totalrecovered": "2466"
        },
        {
            "dailyconfirmed": "1580",
            "dailydeceased": "38",
            "dailyrecovered": "388",
            "date": "19 April ",
            "totalconfirmed": "17304",
            "totaldeceased": "559",
            "totalrecovered": "2854"
        },
        {
            "dailyconfirmed": "1239",
            "dailydeceased": "33",
            "dailyrecovered": "419",
            "date": "20 April ",
            "totalconfirmed": "18543",
            "totaldeceased": "592",
            "totalrecovered": "3273"
        },
        {
            "dailyconfirmed": "1537",
            "dailydeceased": "53",
            "dailyrecovered": "703",
            "date": "21 April ",
            "totalconfirmed": "20080",
            "totaldeceased": "645",
            "totalrecovered": "3976"
        }
    ],
}    

// console.log(dataa.cases_time_series)
let a=dataa.cases_time_series
let arr=[]
for (let i = 0; i < a.length; i++) 
{
    arr.push(a[i].date)   
}
let arr2=[]
for (let i = 0; i < a.length; i++) 
{
    arr2.push(a[i].totalconfirmed)   
}
// let arr3=[]
// for (let i = 0; i < a.length; i+10) 
// {
//     arr3.push(a[i].totalconfirmed)   
// }
let flag=0


const data = {
  labels: arr,
  datasets: [
    {
      label: 'Confirmed Cases vs Days ',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#ff5f81',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ff0937',
      pointBackgroundColor: '#ff0937',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff0937',
      pointHoverBorderColor: '#ff0937',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 1,
      data: arr2,
    }
  ],
};

class Chart extends Component
{
    render()
    {

        let options = {
            scales: {
                xAxes: [{
                    ticks: {
                        min: arr[0],
                        max: arr[82],
                        autoSkip:false,
                        fontSize:10,
                        maxRotation:0,
                        callback: function(value,index)
                        {
                            console.log(arr.length-1)
                            if((index===Math.floor(arr.length/2)) || index===0 || index===arr.length-1)
                            {
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
                        max:30000,
                        stepSize: 5000,  
                    },
                    gridLines:
                    {
                        dispay:false
                    },
                    scaleLabel:
                    {
                        display: true,
                        labelString: 'Total Number of Cases'
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
                        let label=`Total Cofirmed: ${item.value}`
                        return label
                    },
                    labelColor: function(tooltipItem, chart) {
                        return {
                            borderColor: 'rgb(255, 0, 0)',
                            backgroundColor: 'rgb(255, 0, 0)'
                        };
                    },
                    labelTextColor: function(tooltipItem, chart) {
                        return '#fff';
                    }
                }
            },
            // legend: {
            //     display: true,
            //     labels:{
            //         boxWidth:50,
            //         fontSize:15,
            //         padding:15,
            //     }
            // },
            // layout:
            // {
            //     padding:{
            //         left:50,
            //         right:30,
            //         top:2,
            //         bottoom:50,
            //     }
            // }
        };


        // let myTooltip;
        //  if (this.state.tooltip) (
        //    <ty />
        //    )

        return(
            <div styles={{marginBottom:'50px'}}>
                <h2>Line Example</h2>
                <div style={{backgroundColor:"#ffe0e6"}}>
                    <Line data={data} 
                    options={options}
                    width={300} height={300} redraw={true}/>
                </div>
                
            </div>
        )
    }
}
export default Chart