import { useState } from "react";

const Tiempo = () =>  {
  const [currentTime, setCurrentTime] = useState(`${new Date().toLocaleTimeString()}`)
  setInterval( () => {
    setCurrentTime(new Date().toLocaleTimeString())
  }, 1000)
  
  return (
    <div>
      <h3>La hora es { currentTime }</h3>
    </div>
  )
}
export default Tiempo