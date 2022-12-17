import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contexts from '@contexts';
import ProtectedRoute from '@components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Contexts>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute>{null}</ProtectedRoute>} path="/" />
          </Routes>
        </Router>
        <div className=""></div>
      </Contexts>
    </>
  );
};

export default App;
