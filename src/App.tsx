
import { roles } from './roles';
import { Todolist } from './todolist';




export const App = () => {
 


  return (
    <>
    
      <div>
        <Todolist roles= {roles}/>
      </div>
      
      
    </>
  )
}

export default App
