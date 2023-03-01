import './App.css';
import { Link , Routes , Route , Navigate} from 'react-router-dom';
import Home from "./Components/home"
import About from "./Components/about"
import Gallery from './Components/gallery';
import Signup from './Components/signup';
import Login from './Components/login';
import { useState } from 'react';


function App() {

  const [isLogin, setIsLogin] = useState(false);



  return (
    <div className="App">
    <button onClick={()=>{setIsLogin(!isLogin)}}>Toggle login test</button>
    {(isLogin)?

      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/gallery'}>Gallery</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/profile'}>Profile</Link></li>
      </ul> 
      : 
      <ul>
        <li><Link to={'/'}>Login</Link></li>
        <li><Link to={'/signup'}>Signup</Link></li>
      </ul>
    }


      {
        (isLogin)?
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
        :
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      }
    </div>
  );
}

export default App;
