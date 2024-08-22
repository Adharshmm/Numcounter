import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incriment, reset } from '../redux/counterSlice'

function Counter() {
    // component can access the sate by useSelector hook
    let counterValue = useSelector((state)=>state.counter.value)
    // useDispatch is ahook used to call a method in action to update the state
    const disapatch = useDispatch()
    const [range,setRange] = useState(1)

    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-100 mt-3' >
                <div className='mt-2' >
                    <h3 className='mb-5'  style={{ textAlign: 'center',fontSize:'72px' }}>{counterValue}</h3>
                    <button className="btn btn-warning p-2 " onClick={()=>disapatch(decrement(range))}>DECREMENT</button>
                    <button className="btn btn-success p-2 ms-3" onClick={()=>disapatch(incriment(Number(range)))}>INCREMENT</button>
                    <button className="btn btn-danger p-2 ms-3" style={{width:'110px'}} onClick={()=>disapatch(reset())}>RESET</button>
                    <input  type="number" className='form-control mt-3' placeholder='Enter The Range' style={{borderColor:'#34c0eb'}} 
                    onChange={(e)=>setRange(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default Counter