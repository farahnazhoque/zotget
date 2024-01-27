//what will show up in all pages

// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets: the pictures
import wave from "../assets/wave.svg";

// components: to be used in multiple pages
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  //Outlet is the page content that will show up depending on the route
  return (
    <div className="layout">
      <Nav userName={userName} />

      <main>
        <Outlet /> 
      </main>

      <img src={wave} alt="" />
    </div>
  )
}
export default Main