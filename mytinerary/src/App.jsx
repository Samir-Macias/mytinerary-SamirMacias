import { useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import StandarLayouts from "./Layouts/StandarLayouts"

const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children: [{ path: "/", element: <Home></Home> },
    { path: "cities", element: <Cities></Cities> }]
  }

])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
