
import Sidebar from './Componenets/SideBar';
import ProjectPage from './Componenets/ProjectPage'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

  return (
   <>
    <Router>

       <Sidebar>
       <ProjectPage/>
       </Sidebar>
       </Router>
       </>
   
  )
}

export default App
