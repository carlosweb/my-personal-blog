
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'

function App() {
  const title = 'Welcome to the new blog'
  const key = Math.random() * 20

  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
