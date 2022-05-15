import { Route, Routes } from 'react-router-dom';
import Header from './components/global/Header/Header';
import NotFoundPage from './components/global/NotFound/NotFound';
import { routes } from './router';

function App() {
    return (
        <div className='App'>
            <Header />

            <Routes>
                {routes.map((item) => (
                    <Route key={item.path} path={item.path} element={<item.element />} />
                ))}

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
