import sizes from './sizes'
const styles=
{
    root:
    {
        color:'#fff',
        backgroundColor:'#4CAF50',
        textAlign:'center',
        marginBottom:'20px',
        padding:'10px',
        borderRadius:'10px',
        "& a":
        {
            backgroundColor:'#7abbff',
            [sizes.down('sm')]:
            {
                display:'block'
            },
        }
    },
    name:
    {
        fontSize:'1.2rem',
        fontWeight:'500'
    },
    descriptionContainer:
    {
        display:'flex',
        justifyContent:'center',
    },
    description:
    {
        fontSize:'0.9rem',
        width:'80%',
    },
    contact:
    {
        color:'#027dff',
        overflowX:'hidden',
    }

}
export default styles