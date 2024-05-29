import './App.css'
import {Part3} from "./Part3.jsx";
import {Part4} from "./Part4.jsx";

function App() {

  return (
      <>
          <div className='p-3 border-solid border-2 border-green-500 rounded-lg bg-red-50'>
              <div>
                  <h1 className='text-7xl text-green-500 font-medium p-2'>Hello World!</h1>
              </div>
              <div className='m-10 w-2/3 mx-auto'>footer</div>
          </div>
          <Part3></Part3>
          <Part4></Part4>
      </>
  )
}

export default App
