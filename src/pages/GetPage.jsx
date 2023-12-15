import axios from "axios";
import React from "react";
import { useState } from "react";
import "../App.css";

const GetPage = () => {
  const [getData, setGetData] = useState(() => {
    const savedData = localStorage.getItem("getData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const getRequset = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setGetData(res.data.posts);
        localStorage.setItem("getData", JSON.stringify(res.data.posts));
      })
      .catch((err) => console.log(err));
  };

  const clearData = () => {
    setGetData([]);
    localStorage.removeItem("getData");
  };

  return (
    <>
      <div>
        <h1>GET REQUEST</h1>
        <button onClick={getRequset}>Получить запрос</button>
        <button onClick={clearData}>Очистить данные</button>
      </div>
      <ul>
        {getData.map((post) => (
          <li className="getReq" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetPage;
