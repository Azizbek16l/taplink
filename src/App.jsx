import './App.css'
import myimg from './assets/work.jpg'
function App() {
  return (
    <main>
    <div className="container">
      <div className='img-frame'>
        <img src={myimg}  width={150}  />
      </div>
      <a href="#" className='project-btn'>Landing</a>
      

    </div>
    </main>
  )
}

export default App