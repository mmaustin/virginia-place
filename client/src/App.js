import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Error, Register } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/error' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App