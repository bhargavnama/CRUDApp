import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUser from './createUser';
import UpdateUser from './UpdateUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Users/> } /> 
          <Route path="/create" element={ <CreateUser /> } />
          <Route path="/update" element={ <UpdateUser /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
