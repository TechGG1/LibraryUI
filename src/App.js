import React from 'react';
import './styles/styles.css';
import CreateBookForm from './components/CreateBookForm';
import CreateReaderForm from './components/CreateReaderForm';

const App = () => {
  return (
      <div>
        <h1>Create a Book</h1>
        <CreateBookForm />
          <h1>Create a reader</h1>
          <CreateReaderForm />
      </div>
  );
};

export default App;