import { useEffect, useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Mydata } from './context.js'
import { Mytheme } from './context.js'
import { MyCrypto } from './context.js'
import Layout from './component/Layout.jsx'

function App() {
   const [data, setData] = useState([])
  const [theme , SetTheme ]= useState(true)
  const [crypto,SetCrypto] = useState("btc")
   const fetchData= ()=>{
    fetch("https://hodlinfo-backend-m9a6.onrender.com/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    }).catch((err)=>{
      console.log(err)
    });
   }
  


   useEffect(() => {
    // Fetch data initially
    fetchData();
   

    // Set up interval to fetch data every 60 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);
 
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Mytheme.Provider value ={{theme,SetTheme}}>
      <Mydata.Provider value={data}>
        <MyCrypto.Provider value={{crypto,SetCrypto}}>
        <Header/>
         
         <Layout/>
         <hr className=' bg-slate-600'></hr>
       <Footer/>
        </MyCrypto.Provider>
      </Mydata.Provider>
    </Mytheme.Provider>
   
     
    </>
  )
}

export default App
