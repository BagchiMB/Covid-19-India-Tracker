import sizes from './sizes'
const styles=
{
    c:
    {
        fontSize:'12px',
        marginLeft:'5px',
        [sizes.down('sm')]:
        {
            fontSize:'10px',
            marginLeft:'3px',
        }
    },
    r:
    {
        fontSize:'12px',
        marginLeft:'5px',
        [sizes.down('sm')]:
        {
            fontSize:'10px',
            marginLeft:'3px',
        }
    },
    d:
    {
        fontSize:'12px',
        marginLeft:'5px',
        [sizes.down('sm')]:
        {
            fontSize:'10px',
            marginLeft:'3px',
        }
    },
    s:
    {
        color:'#6d767e',
        "&:hover":
        {
            color:'black'
        },
        [sizes.down('sm')]:
        {
            fontSize:'10px',
            marginLeft:'3px',
        }
    },
    // nospecial:
    // {
    //     border:'1px solid #ddd',
    //     padding:'8px',
    //     [sizes.down('sm')]:
    //     {
    //         padding:'2px',
    //         fontSize:'10px'    
    //     },
    // },
    // special2:
    // {
    //     border:'1px solid #ddd',
    //     padding:'8px',
    //     [sizes.down('sm')]:
    //     {
    //         padding:'1px',
    //         fontSize:'18px'    
    //     },
    // },
    // special:
    // {
    //     border:'1px solid #ddd',
    //     padding:'8px',
    //     [sizes.down('sm')]:
    //     {
    //         padding:'1px',
    //         fontSize:'10px'    
    //     },
    // }
}
export default styles