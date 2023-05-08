import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./components/Layout";
import {BrowserRouter} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<div>loading...</div>}>
                    <App/>
                </Suspense>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);

