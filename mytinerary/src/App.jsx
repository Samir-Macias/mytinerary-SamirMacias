import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store.js"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import MoreInf from "./Pages/MoreInf"
import CityDetail from "./Components/CityDetail"
import StandarLayouts from "./Layouts/StandarLayouts"
import './App.css'

const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children: [
      { path: "/", element: <Home /> },
      { path: "cities", element: <Cities /> },
      { path: "city/:cityName", element: <CityDetail /> }
    ]
  }

])
function App() {
  return (
    <>
      <Provider store={store} >
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
