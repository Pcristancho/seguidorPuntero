
import './App.css'
import {useEffect,useState} from "react";
function App() {
  const [enabled,setEnabled]=useState(false);
  const [position,setPosition]=useState({x:0,y:0})
  useEffect(
     ()=>{
      console.log('efecto',{enabled})
      const handleMove=(event)=>{
        const {clientX,clientY} =event
        console.log('handleMover',{clientX,clientY})
        console.log('el evento es')
        console.log(event)
        setPosition({x:clientX,y:clientY})
      }
      if(enabled){
        window.addEventListener('pointermove',handleMove)
      }
    
      // se retira los event listener cada que actualiza enabled al terminar de descibir el efecto (tambien se ejecutaria cuando se desmonte el componente APP)
      return ()=>{window.removeEventListener('pointermove',handleMove)
      }
     },[enabled])
  return (
    <main>
      <div
      className='botonSeguimiento'
      style={{transform: `translate(${position.x}px,${position.y}px)`}}
      ></div>
      <button onClick={()=>{enabled ? setEnabled(false) : setEnabled(true)}}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
