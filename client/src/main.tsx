import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './components/GlobalStyles/index.tsx';
import { AuthContextProvider } from './services/context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
