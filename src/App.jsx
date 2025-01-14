import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListPage from './pages/CreateListPage/CreateListPage'
import EditListPage from './pages/EditListPage/EditListPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/create-list" exact element={<CreateListPage />} />
          <Route path="/edit-list/:id" exact element={<EditListPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
