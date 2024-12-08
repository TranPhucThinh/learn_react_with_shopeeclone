import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return (
    <div>
      <ToastContainer />
      {routeElements}
    </div>
  )
}

export default App
