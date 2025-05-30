import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render
(
<Router>
    <App />
</Router>
);