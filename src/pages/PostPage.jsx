import React from "react";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/products/add", post)
      .then((res) => {
        console.log(res.data);
        navigate("/get");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>POST REQUEST</h1>
      <div className="postReq">
        <input
          type="text"
          placeholder="Add title"
          name="title"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Add text"
          name="description"
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Отправить запрос </button>
      </div>
    </>
  );
};

export default PostPage;
