import React, { useContext, useEffect, useState } from 'react'
import { MyCrypto, Mydata, Mytheme } from '../context.js'
import logo from "../assets/Hodlinfo.png"
import telegram from "../assets/telegram.png"

const Header = () => {
       const {theme,SetTheme} = useContext(Mytheme)
       const {data} = useContext(Mydata)
       const {crypto, SetCrypto} = useContext(MyCrypto)
       const [counter, setCounter]=useState(60);
       useEffect(()=>{
        const timer =
      counter >= 0 && setInterval(() => setCounter(counter - 1), 1000);
      if(counter===-1)setCounter(60)
      
    return () => clearInterval(timer);
       },[counter])
       
  return (
    
    <div className=' flex justify-between align-items-center p-10  w-fit h-1/5 '>
        <div className=' w-1/5  h-2/4 '>
        <img className=' ' src={logo} alt="HodlInfo" />
        </div>
       
        <div className=' flex justify-between align-items-center  gap-4'>
            <select name="" id="" className=' p-3 rounded-lg  font-medium bg-slate-100'>
                <option className=' px-10 py-2 rounded-lg font-medium bg-white' value="INR">INR</option>
            </select>
            <select value={crypto} className='p-3 rounded-lg font-medium  bg-slate-100 '  onChange={(e)=>{SetCrypto(e.target.value)
        
            }} name="" id="">
                {data?.map((ele)=>(
                    <option key={ele._id}  className=' px-10 py-2 rounded-lg font-medium m-2 bg-white' value={ele.base_unit}>{ele.base_unit.toUpperCase()}</option>
                ))}
            </select>
        
            <a className=' p-3 rounded-lg font-medium bg-slate-100' href='https://wazirx.com/' target='_blank' >{`BUY ${crypto.toUpperCase()}`}</a>
            
            
        </div>
        <div className=' flex justify-between align-items-center gap-4'>
            <div className=' w-9 h-9 rounded-full border-2  border-teal-400  text-center'>{counter}</div>
            <div>
            <a href='https://t.me/HodlInfoBot?startgroup=true' target='_blank' className=' px-4 py-2 bg-teal-300 rounded-lg text-white font-semibold text-center flex gap-1 justify-center items-center '> <div  className=' w-5 h-7' > <img src={telegram} /></div> <span>Connect Telegram</span></a>
            </div>

         <div className='m-2 inline-block'>
    <label htmlFor="toggle" className='switch relative'>
        <input
            type='checkbox'
            checked={theme}
            onChange={() => SetTheme(!theme)}
            id="toggle"
            className='hidden'
        />
        <span className={`rounded-full ${theme ? ' bg-slate-900' : 'bg-gray-300'} w-12 h-6 inline-block relative transition-all duration-300`}>
            <span className={`absolute h-6 w-6  bg-teal-400 rounded-full top-0 ${theme ? 'animate-right' : 'animate-left'}`}></span>
        </span>
    </label>
      </div>
      </div>
      
    </div>
    
  )
}

export default Header
