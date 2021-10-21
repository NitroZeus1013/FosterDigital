import { BrowserRouter as Router ,HashRouter} from 'react-router-dom';
import Navbar from './Components/Navbar'
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <Router>
    <ScrollToTop />
    <div>
    <Navbar />
    
    </div>
    </Router>
  );
}

export default App;
