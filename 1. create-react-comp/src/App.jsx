
import {Fbutton} from "./Fbutton";
import Random from "./Random";
function App(){
  var g = 'chetan from var'
  var fullname=()=>{
    return 'chetan from function';
  }
return <div>
  <h1>
  Hello its me {fullname()} {g}
</h1>
<Fbutton></Fbutton>
<Random></Random>
<Random></Random>
<Random></Random>
<Random></Random>
<Random></Random>

</div>


}
export default App;