import { BrowserRouter as Router ,HashRouter} from 'react-router-dom';
import Navbar from './Components/Navbar'
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <HashRouter>
    <ScrollToTop />
    <div>
    <Navbar />
    
    </div>
    </HashRouter>
  );
}

export default App;
