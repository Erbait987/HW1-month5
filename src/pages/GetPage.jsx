import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DummyjsonApi } from "../api";
import "../App.css";

const GetPage = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await DummyjsonApi.get(`/posts`);
        setGetData(res.data.posts);
      } catch (e) {
        console.error("404 Not Found", e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>GET REQUEST</h1>
      </div>
      <ul>
        {getData.map((post) => (
          <li className="getReq" key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetPage;
