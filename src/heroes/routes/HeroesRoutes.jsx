import { Navbar } from "../../ui"
import { Route,Routes,Navigate } from "react-router-dom"
import { MarvelPages,DCPage,HeroPage,SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPages/>}/>
            <Route path="dc" element={<DCPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="hero/:id" element={<HeroPage/>}/>

            <Route path="/" element={<Navigate to="/marvel" />}/>
        </Routes>
        </div>
    </>
  )
}
