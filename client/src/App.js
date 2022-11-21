import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/landing' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App