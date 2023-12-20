import { Routes, Route } from "react-router-dom";
import "./App.css";

import GetPage from "./pages/GetPage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import SinglePostPage from "./pages/SinglePage";
import DeletePostPage from "./pages/DeletePostPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="get" element={<GetPage />} />
          <Route path="post" element={<PostPage />} />
          <Route path="posts/:postId/delete" element={<DeletePostPage />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
