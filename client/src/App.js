import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Error, Register } from './pages';
import { AllJobs, AddJob, Profile, SharedLayout } from './pages/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App