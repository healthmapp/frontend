import Navbar from "../components/Navbar"
import Map from "../components/Map"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  
}

export default function Home(){
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <div className={style.main}><Map/></div>
    </div>
  )
}