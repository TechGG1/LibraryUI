import React from 'react';
import './styles/styles.css';
import CreateBookForm from './components/CreateBookForm';
import CreateReaderForm from './components/CreateReaderForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateBookForm />}></Route>
                <Route path="/book" element={<CreateBookForm />}></Route>
                <Route path="/reader" element={<CreateReaderForm />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;