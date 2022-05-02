import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import UserPage from './pages/UserPage';


function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/page1' element={<UserPage />} />
                <Route path='/page2' element={<BoardPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;