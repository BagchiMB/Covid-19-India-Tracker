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
    form:
    {
        "& form":
        {
            [sizes.down('sm')]:
            {
                display:'flex',
                flexDirection:'column',
            },
            
            "& select":
            {
                marginRight:'10px',
                padding:'10px',
                width:'200px',
                borderRadius:'5px',
                outline:'none',
                [sizes.down('sm')]:
                {
                    width:'300px',
                    marginBottom:'10px' 
                },
            },
            "& button":
            {
                display:'block',
                marginLeft:'40%',
                marginTop:'10px',
                borderRadius:'20px',
                outline:'none',
                padding:'5px 50px 5px 50px',
                backgroundColor:'rgb(76,175,80,0.9)',
                border:'1px solid #4CAF50',
                color:'#fff',
                cursor:'pointer',
                [sizes.down('sm')]:
                {
                    marginLeft:'20%',
                    marginRight:'20%'
                },
            }
        }
    },
    info:
    {
        width:'75%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        [sizes.down('sm')]:
        {
            width:'100%',
        },
    },
    infoWrapper:
    {
        width:'80%',
        [sizes.down('sm')]:
        {
            width:'90%',
        },
    },
    inp:
    {
        padding:'10px',
        width:'200px',
        borderRadius:'5px',
        outline:'none',
        border:'1px solid gray',
        marginBottom:'10px',
        [sizes.down('sm')]:
        {
            width:'140px',
            padding:'5px',
        },
    },
    infoBar:
    {
        marginTop:'10px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        "& div":
        {
            "& p":
            {
                [sizes.down('sm')]:
                {
                    fontSize:'0.8rem',
                    width:'100px',
                }
            }
        }
    },
    searchBar:
    {
        "& label":
        {
            fontSize:'0.8rem',
        },
        [sizes.down('sm')]:
        {
            width:'50%',
        },
        marginTop:'10px'
    }
}
export default styles