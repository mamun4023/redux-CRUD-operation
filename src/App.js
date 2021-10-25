import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/add_contact";
import EditContact from "./components/edit_contact";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  
  return (
    <>
       <div className = "App">
          <ToastContainer/>
          <Navbar/>

          <Switch> 
            <Route exact path = "/" component = {()=> <Home/>}> 

            </Route>

            <Route path = "/add">
              <AddContact/>
            </Route>

            <Route path = "/edit/:id">
                <EditContact/>
            </Route>

          </Switch>
          
       </div>       
    </>

  );
}

export default App;
