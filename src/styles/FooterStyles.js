import sizes from './sizes'
const styles=
{
    root:
    {
        backgroundColor:"#4CAF50",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:'#fff',
        position:'sticky',
        top:'100vh',
    },
    root2:
    {
        width:"100vw",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        [sizes.down('sm')]: 
        {
            fontSize:'9px',
        },
    },
    p:
    {
        marginLeft:'2vw'
    },
    q:
    {
        marginRight:'2vw'
    }
}
export default styles