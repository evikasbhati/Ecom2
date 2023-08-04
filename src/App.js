import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./pages/Shop";

const App=()=>{
  return(
    <>
    <Router>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Shop />} />
      </Routes>
    </Router>
    </>
  )
}
export default App;