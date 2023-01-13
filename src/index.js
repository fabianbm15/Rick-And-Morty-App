import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


const root = createRoot(document.getElementById('root'));
root.render(<App />);

