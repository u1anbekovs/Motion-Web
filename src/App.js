import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import AboutUs from "./components/about-page/AboutUs";
import ClubPage from "./components/club-page/ClubPage";
import UiUx from "./pages/UI-UX/Ui-Ux";
import MainFr from "./pages/Frontend/MainFr";
import Footer from "./components/Footer";
import Backend from "./pages/Backend/Backend";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/contact' element={<Footer/>}/>
                <Route path='/about_us' element={<AboutUs/>}/>
                <Route path='/it_club' element={<ClubPage/>}/>
                <Route path='/backend' element={<Backend/>}/>
                <Route path='/MainFr' element={<MainFr/>}/>
                <Route path='/UxUi' element={<UiUx/>}/>
            </Routes>

        </div>
    );
}

export default App;
