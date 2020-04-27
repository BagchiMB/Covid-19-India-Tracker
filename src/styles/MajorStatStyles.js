import sizes from './sizes'
const styles=
{
    root:
    {
       borderRadius:'5px',
       width:"15%",
       paddingTop:"2px",
       paddingLeft:"5px",
       [sizes.down('sm')]:
       {
           width:'20%', 
       },
    },
    head:
    {
        fontSize:'16px',
        [sizes.down('sm')]:
        {
            fontSize:'15px',
        }
    },
    fig:
    {
        marginTop:'-11px',
        fontSize:'18px',
        [sizes.down('sm')]:
        {
            fontSize:'17px',
        }
    },
    delta:
    {
        marginTop:'-11px',
        fontSize:'13px'
    },
}
export default styles