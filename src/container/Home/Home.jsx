import React, {Component, Fragment, createContext} from "react";
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import { BrowserRouter, Route, Link ,Routes} from "react-router-dom";
import './Home.css'
import YouTubeCompPage from "../pages/YouTubeComp/YouTubeComp";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";
import Hooks from "../pages/Hooks/Hooks";

class Home extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">Lifecycle</Link>
                    <Link to="/youtube-component">Youtube</Link>
                    <Link to="/hooks">Hooks</Link>
                </div>
                <Routes>
                    <Route path="/" element={<BlogPost/>}/>
                    <Route path="/detail-post/:id" element={<DetailPost/>}/>
                    <Route path="/product" element={<Product/>} />
                    <Route path="/lifecycle" element={<LifeCycleComp/>} />
                    <Route path="/youtube-component" element={<YouTubeCompPage/>} />
                    <Route path="/hooks" element={<Hooks/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(Home);