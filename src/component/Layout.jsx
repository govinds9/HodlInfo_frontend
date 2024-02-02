import React, { useContext, useEffect, useState } from 'react'
import { MyCrypto, Mydata } from '../context.js'
import logos from "../assets/wazirx.png"

const Layout = () => {
    const {crypto,SetCrypto} = useContext(MyCrypto)
    const {data} = useContext(Mydata)
    const [finalData,SetFinalData] = useState(null)

    useEffect(()=>{
        const temp = data?.filter((ele)=>ele.base_unit
        ===crypto)
        SetFinalData(temp)
    },[data,crypto])
   
  const heading = ["#","Platform", "Last Traded Price", "Buy / Sell Price", "Volume", "Name"]

    
  return (
    <div className='  w-screen h-screen p-10 flex flex-col items-center gap-16'>
        <div className=' flex  flex-col justify-evenly align-items-center gap-3 '>
        
            <h4 className=' text-center text-4xl text-gray-600'>Best Price to Trade</h4>
            <h2 className=' text-center text-6xl text-indigo-950 font-semibold' >{`₹ ${finalData && Math.trunc(finalData[0].high).toLocaleString('en-IN')}`}</h2>
            < h4 className=' text-center text-2xl text-gray-600'>Average <span>{finalData?.[0].name.toUpperCase()}</span> net price including commission</h4>
            
        </div>

        <div className= 'w-screen p-10'>
            <table className=' table-auto w-full '>
                <thead className=' m-4'>
                <tr className='  text-gray-600 uppercase text-sm leading-normal rounded-lg' >
                    {
                        heading.map((ele,index)=>(
                            <th key={index}><h4 className='py-3 px-6 text-left'><span>{ele}</span></h4></th>
                        ))
                    }
                </tr>
                </thead>
               <tbody className=' '>
               <tr className=' bg-gray-200 font-semibold rounded-xl text-indigo-950 '>
                    <td className='py-4 px-6'> <h4> <span>1</span></h4> </td>
                    <td className='py-4 px-6'> <h4 className=' flex gap-2'> <div className=' w-10 h-10'> <img src={logos}  /></div> <span> Wazirx</span></h4></td>
                    <td className='py-4 px-6'>₹ {finalData && Math.trunc(finalData[0].last).toLocaleString('en-IN')}</td>
                    <td className='py-4 px-6'> <h4>{`₹ ${finalData && Math.trunc(finalData[0].buy).toLocaleString('en-IN')} / ₹ ${finalData && Math.trunc(finalData[0].sell).toLocaleString('en-IN')}`}</h4></td>
                    <td className='py-4 px-6'><h4>{finalData?.[0].volume.toLocaleString('en-IN')} </h4></td>
                    <td className='py-4 px-6'><h4>{finalData?.[0].name.toUpperCase()}</h4></td>
                </tr>
               </tbody>
                
            </table>
        </div>
      
    </div>
  )
}

export default Layout
