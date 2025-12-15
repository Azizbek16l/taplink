import { useState } from 'react'
import './App.css'
import myimg from './assets/work.jpg'
function App() {
  const [open,setopen]=useState(false)
  return (
    <main>
    <div className="container">
      <div className='img-frame'>
        <img src={myimg}  width={150}  />
      </div>
      <a href="#" className='project-btn'>Landing</a>
      <a href="#" className='project-btn'>Online store</a>
      <a href="#" className='project-btn'>API</a>
      <a href="#" className='project-btn'>Landing</a>
      <a href="#" className='project-btn'>Landing</a>




      <button onClick={()=>(setopen(true))} className='share-btn'>Share</button>
      {open?<Modal setopen={setopen}/>:null}
    </div>
    </main>
  )
}





export default App

function Modal({setopen}){
  return(
    <div className='overlay' onClick={()=>(setopen(false))}>
      <div className='Modal-body'>
     <button  className='modal-close-btn' onClick={()=>(setopen(false)) }>❌</button>
      <div className='Modal-container'>      
      </div>
      
     
    </div>
    </div>
  )
}