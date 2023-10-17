import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'


const Home = () => {
    let quoteData = {
        content: "Let time be your only competitor.",
        author: "Mohamed Ayman"
    }
    const [quete,setQuete]= useState(quoteData)
    const [Loading,setLoading]= useState(false)

 async function  getQuete(){
     setLoading(true)
    try {
        const {data} = await axios.get(`https://api.quotable.io/random`)
     setLoading(false)
        setQuete(data)
        
    } catch (error) {
        setLoading(false)
       toast.error(error)
    }
}


function copy(){
    navigator.clipboard.writeText(quete.author + ' Said ' + quete.content)
    toast.success('succefully Coppied')
}
 
    
  return <>
    <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column">
    <h2 className='fw-bold'>Quote Generator</h2>
    <div style={{width:'450px'}}  className="bg-black d-flex flex-wrap flex-column p-4  rounded-2">
        <span className='text-white text-start'>{quete.content}</span>
        <span style={{color:'rgb(159 163 167 / 75)'}} className='text-end my-2 '>{quete.author}</span>
        <div className="d-flex">
            <button onClick={copy} className="Btn">
  <span className="text">Copy</span>
  <span className="svgIcon">
    <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
  </span>
</button>
            <button onClick={getQuete} className='btn btn-success flex-grow-1 mx-1'> {Loading ?<i className='fas fa-spinner fa-spin'></i> : "Generate Another Quote"} </button>
        </div>
        

    </div>
   
    </div>
  </>
  
}

export default Home

