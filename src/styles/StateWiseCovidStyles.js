import sizes from './sizes'



const styles=
{
    root:
    {
        width:"100%",
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"space-around",
    },
    heading:
    {
        textAlign:'center',
        fontSize:'15px',
        marginTop:"25px",
        marginBottom:"25px",
        backgroundColor:"#4CAF50",
        width:'30%',
        color:"#fff",
        borderRadius:"5px",
        [sizes.down('sm')]:
        {
            width:'50%',
            fontSize:'10px',
        }
    },
    totalContainer:
    {
        width:"100%",
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"space-around",
        "&>p":
        {
            [sizes.down('sm')]:
            {
                fontSize:'0.9rem',
            },
        }
    },
    total:
    {
        width:"80vw",
        display:"flex",
        justifyContent:"space-evenly",
        [sizes.down('sm')]:
        {
            width:'100%',
            fontSize:'10px',
        },
    },
    tableContainer:
    {
        width:'100%',
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"space-around",
        "& >p":
        {
            [sizes.down('sm')]:
            {
                width:'90%',
                fontSize:'15px',
            },
        },
        overflowX:'auto'
    },
    table:
    {

        width:"75%",
        borderCollapse:"collapse",
        borderRadius:'10px',
        "& td, & th":
        {
            border:'1px solid #ddd',
            padding:'8px',
            // [sizes.down('sm')]:
            // {
            //     padding:'1px',
            //     fontSize:'13px'    
            // },
        },
        // '& th':
        // {
        //     "& special":
        //     {
        //         [sizes.down('sm')]:
        //         {
        //             padding:'1px',
        //             fontSize:'2px'    
        //         }, 
        //     },
        // },
        "& tr:nth-child(even)":
        {
            backgroundColor:'#fdfdfd'
        },
        "& tr:hover":
        {
            backgroundColor:'#ddd'
        },
        "& th":
        {
            paddingTop: '12px',
            paddingBottom: '12px',
            textAlign: 'left',
            backgroundColor: '#4CAF50',
            color: 'white',
        },
        [sizes.down('sm')]:
        {
            width:'100%',
        },
    },
    // nospecialheading:
    // {
    //     border:'1px solid #ddd',
    //     padding:'8px',
    //     [sizes.down('sm')]:
    //     {
    //         padding:'1px',
    //         fontSize:'13px'    
    //     },
    //     paddingTop: '12px',
    //     paddingBottom: '12px',
    //     textAlign: 'left',
    //     backgroundColor: '#4CAF50',
    //     color: 'white',
    // },
    // specialheading:
    // {
    //     border:'1px solid #ddd',
    //     padding:'8px',
    //     [sizes.down('sm')]:
    //     {
    //         padding:'1px',
    //         fontSize:'10px'    
    //     },
    //     paddingTop: '12px',
    //     paddingBottom: '12px',
    //     textAlign: 'left',
    //     backgroundColor: '#4CAF50',
    //     color: 'white',
    // },
    btn:
    {
        backgroundColor:"#4CAF50",
        padding:'10px 80px',
        borderRadius:'5px',
        textDecoration:'none',
        color:'#fff',
        marginBottom:'8px',
    },
    GraphContainer:
    {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        width:"75%",
        marginBottom:'5vh',
    },
    Graph:
    {
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        [sizes.down('sm')]:
        {
            display:'block',
            marginBottom:'-2vh',
        },

    },
    GraphP:
    {
        fontWeight:'600',
        fontSize:'1.5rem'
    },
    ul:
    {
        "& li":
        {
            margin:"2vh 2vh",
            fontSize:'20px',
            [sizes.down('sm')]:
            {
                fontSize:'15px',
            },
        },
        
    },
    links:
    {
        [sizes.down('sm')]:
        {
            width:'98%',
        },
        
    },
    section:
    {
        marginBottom:'3.8vh',
        "& a":
        {
            color:"#48a0ff",
            [sizes.down('sm')]:
            {
                fontSize:'10px',
                backgroundColor:'#eff7ff',
                width:'80%'
            },
        },
        "& a:hover":
        {
            backgroundColor:'#eff7ff'
        },
        "& p":
        {
            fontWeight:'500',
            fontSize:'16px',
            [sizes.down('sm')]:
            {

                fontSize:'12px',
            },
        }
        
    }
}
export default styles