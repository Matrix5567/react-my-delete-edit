import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Second from './Second';
import First from './First';
import Third from './Third';
import Edit from './Edit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="submit" element={<Second />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
