import { DatePicker } from 'antd';

// react-router-dom
import { Routes, Route } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
