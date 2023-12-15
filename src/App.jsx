import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import GetPage from "./pages/GetPage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetPage />} />
          <Route path="about" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
