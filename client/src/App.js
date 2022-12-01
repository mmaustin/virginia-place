import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Error, Register } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App