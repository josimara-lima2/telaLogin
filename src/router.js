import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User'
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/page2" element={<User/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router