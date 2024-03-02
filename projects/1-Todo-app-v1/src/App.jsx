
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import ShowList from "./components/ShowList"
import "./App.css"
function App() {

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <div className="items-container">
        <ShowList />
      </div>

    </center>
  )


}

export default App
