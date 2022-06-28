import Navbar from "./components/Navbar";
import UserSearch from "./components/UserSearch";
import Footer from "./components/Footer";
import User from "./components/pages/User";
import SmallScreenNav from "./components/SmallScreenNav";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GithubProvider} from "./context/githubContext"


function App() {
  return (
    <div className="App">
      <GithubProvider>
        <Router>
          <Navbar />
          <div className="main bg-light">
            <Routes>
              <Route path="/" element = {<><UserSearch /><SmallScreenNav /></>}/>
              <Route path="/user/:login" element = {<User />}/>
            </Routes>
          </div>
          <Footer />
        </Router>
      </GithubProvider>
    </div>
  );
}

export default App;
