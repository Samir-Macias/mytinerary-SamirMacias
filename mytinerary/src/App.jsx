import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import StandarLayouts from "./Layouts/StandarLayouts"
import './App.css'

const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children: [{ path: "/", element: <Home></Home> },
    { path: "cities", element: <Cities></Cities> }]
  }

])
function App() {
   return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
