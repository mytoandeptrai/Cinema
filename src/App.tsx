import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/global/Header/Header';
import NotFoundPage from './components/global/NotFound/NotFound';
import { routes } from './router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/Firebase';
import useStore from './stores';
import Loading from './components/global/Loading/Loading';
function App() {
    const { setUser, loading } = useStore((state) => state);
    useEffect(() => {
        const handleAuthStateChanged = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                return;
            }

            setUser(undefined);

            return () => {
                handleAuthStateChanged();
            };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='App'>
            {loading && <Loading />}
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
