import Navbar from "../components/Navbar"
import Map from "../components/Map"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `color-black`,
}

export default function Home(){
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <div className={style.main}><Map/></div>
    </div>
  )
}