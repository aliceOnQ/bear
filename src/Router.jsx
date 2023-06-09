import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artist from './pages/Artist'
import About from './pages/About'
import Shop from './pages/Shop'
import Product from './pages/Product';
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";
import { useSelector } from "react-redux";


function Router() {
    const lightMode = useSelector(selectLightMode);
    const theme = lightMode ? lightTheme : darkTheme;
    return (

        <ConfigProvider theme={theme} >
            <HelmetProvider context={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="artist" element={<Artist />} >
                            <Route path="artcategory/:artcategoryName" element={<Artist />} />
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="products">
                            <Route path="category/:categoryName" element={<Shop />} />
                            <Route path="author/:categoryName" element={<Shop />} />
                            <Route path="id/:productId" element={<Product />} />
                           
                        </Route>


                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ConfigProvider>

    )
}

export default Router
