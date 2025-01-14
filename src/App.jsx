import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListPage from './pages/CreateListPage/CreateListPage';
import EditListPage from './pages/EditListPage/EditListPage';
import { ListProvider } from './context/ListContext';

function App() {
  return (
    <ListProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/create-list" exact element={<CreateListPage />} />
          <Route path="/edit-list/:id" exact element={<EditListPage />} />
        </Routes>
      </Router>
    </ListProvider>
  );
}

export default App;
