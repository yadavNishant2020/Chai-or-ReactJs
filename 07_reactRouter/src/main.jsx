import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home, About, Contact, User, Github} from "./components"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import githubInfoLoader from './components/githubInfoLoader.js'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element:<App/>,
//       children:[
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         },
//       ]
//     }
//   ]
// )

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
