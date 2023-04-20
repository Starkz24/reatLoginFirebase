import React from 'react';
import {Routes, Route} from "react-router-dom"; 
import Signin from './components/Signin';
import Signup from './components/Signup';
import Accounts from './components/Accounts';
import {AuthContextProvider} from './context/AuthContext'
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
    <div>
    <h1 className="text-center text-3xl font-bold">
      Firebase login signup
    </h1>
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/account" element={ <ProtectedRoute><Accounts/></ProtectedRoute> }/>
    </Routes>
    </AuthContextProvider>
    </div>
    </>
  );
}

export default App;
