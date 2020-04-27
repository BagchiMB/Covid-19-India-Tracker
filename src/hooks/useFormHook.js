import {useState} from 'react'

function useFormHook(ini)
{
    const [val,setVal]=useState(ini)
    const handleChange= (e)=>
    {
        setVal(e.target.value)
    }
    const Reset = () =>
    {
        setVal('')
    }
    return [val,handleChange,Reset]
}
export default useFormHook