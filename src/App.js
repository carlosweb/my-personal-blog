
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

function App() {
  const title = 'Welcome to the new blog'
  const key = Math.random() * 20
  
  return (
    <div>
      <Navbar />
      <div className="content">
       <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
