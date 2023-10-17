import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import IdPosts from "./Pages/Idposts/IdPosts";
import Admin from "./Pages/Admin/Admin";
import EditPost from "./Pages/EditPost/EditPost";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/idposts/:id" element={<IdPosts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
