import React from 'react';
import Navigation from './components/Navigation';
import SaladMaker from './components/SaladMaker';
import UserContext from './components/User';

const user = {
    name: 'Jerome',
    favorites: [
        'avocado',
        'carrot'
    ]
}

function App() {
  return (
      <UserContext.Provider value={user}>
        <Navigation />
        <SaladMaker/>
      </UserContext.Provider>
  );
}

export default App;