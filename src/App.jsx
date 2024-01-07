import './App.css'
import Component from './Component'
import VerticalMenu from './VerticalMenu'
import NavigationBar from './NavigationBar'
import TwoDivsComponent from './TwoDivsComponent'
import RightComponent from './RightComponent'

function App() {


  return (
   <div>
  
    <VerticalMenu />
    <NavigationBar />
    <Component />
   
    <div className="two-divs">
        <TwoDivsComponent />
        <RightComponent />
      
      </div>
    
   
  
   
    </div>
  )
}

export default App
