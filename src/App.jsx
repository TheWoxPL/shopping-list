import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListPage from './pages/CreateListPage/CreateListPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/create-list" exact element={<CreateListPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
