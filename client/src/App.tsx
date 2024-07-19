import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react/jsx-runtime';
import { ReactNode, useContext } from 'react';
import { AuthContext } from './services/context/AuthContext';

function App() {


    return (
        <Router>
            <>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </>
        </Router>
    );
}

export default App;
