import React from "react";
import { useState } from "react";
import "../App.css";
import axios from "axios";

const PostPage = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    axios
      .post("https://dummyjson.com/products/add", post)
      .then((res) => {
        console.log(res);
        setResult(res.data);
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
          onChange={handleInput}
          name="title"
        />
        <input
          type="text"
          placeholder="Add text"
          onChange={handleInput}
          name="description"
        />
        <button onClick={handleSubmit}>Отправить запрос </button>
      </div>
      <div>
        {result && (
          <div className="postResult">
            <h2>Результат:</h2>
            <p>Title: {result.title}</p>
            <p>Description: {result.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PostPage;
