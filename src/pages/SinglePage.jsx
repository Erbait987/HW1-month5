import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DummyjsonApi } from "../api";
import BtnDelete from "../components/BtnDelete";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await DummyjsonApi.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <BtnDelete postId={postId} />
    </div>
  );
};

export default SinglePostPage;
