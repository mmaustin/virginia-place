import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute, GrabEvents } from './pages';
import { AllEvents, AddEvent, Profile, SharedLayout } from './pages/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllEvents />} />
          <Route path='add-event' element={<AddEvent />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        {/* <Route path='/landing' element={<Landing/>} /> */}
        <Route path='/register' element={<Register/>} />
        <Route path='/events' element={<GrabEvents/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App