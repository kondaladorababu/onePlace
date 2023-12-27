import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UIContextProvider } from './Store/UIContextProvider';
import NewSprintModal from './Components/Modals/NewSprintModal';
import DataContextProvider from './Store/DataContextProvider';
import ExistingSprintItemModal from './Components/Modals/ExistingSprintItemModal';
import SprintStatusModal from './Components/Modals/SprintStatusModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <UIContextProvider>
        <App />
        <NewSprintModal />
        <SprintStatusModal />
        <ExistingSprintItemModal />
      </UIContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
