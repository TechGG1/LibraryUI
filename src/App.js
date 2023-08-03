import React from 'react';
import './styles/styles.css';
import CreateBookForm from './components/CreateBookForm';

const App = () => {
  return (
      <div>
        <h1>Create a Book</h1>
        <CreateBookForm />
      </div>
  );
};

export default App;