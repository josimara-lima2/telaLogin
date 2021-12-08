import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import User from './components/User'
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/page2" element={<User/>}/>
                <Route path="/page3" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router