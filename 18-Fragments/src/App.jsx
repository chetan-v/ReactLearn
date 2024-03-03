// import { Fragment } from 'react';
import './App.css'

function App() {
  let foodItems = ["dal", "roti", "chawal"];

  // we can also use <></> in the place of <Fragment></Fragment> without importing react
  return <>
    <h1>Fragments</h1>
    <ul className="list-group">
      {foodItems.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>))}



    </ul>
  </>
  // return <Fragment> 
  //   <h1>Fragments</h1>
  //   <ul className="list-group">
  //     <li className="list-group-item">An item</li>
  //     <li className="list-group-item">A second item</li>
  //     <li className="list-group-item">A third item</li>
  //     <li className="list-group-item">A fourth item</li>
  //     <li className="list-group-item">And a fifth one</li>
  //   </ul>
  // </Fragment>
}

export default App
