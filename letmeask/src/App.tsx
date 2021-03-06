import { BrowserRouter, Route } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import { Home } from './pages/Home';
import { AuthContextProvider } from './contexts/AuthContext'
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';
// import firebase from 'firebase';





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;


