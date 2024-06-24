
import Demo from './Components/Demo'

const App = () => {
const names=[
  "bala",
"saraswathi",
"rahul",
"anbu"
]



  return (
    <>
  {/* {names.map((name,index)=>(
    <Demo name={name} key={index}/>
  ))} */
  names.map((name,ind)=>(<Demo name={name} key={ind}/>))
  
  }
  </>
  )
}
 
export default App
