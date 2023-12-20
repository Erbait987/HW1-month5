import React from "react";
import { NavLink } from "react-router-dom";

function BtnDelete({ postId }) {
  return (
    <div>
      <NavLink to={`/posts/${postId}/delete`}>
        <button>Delete</button>
      </NavLink>
    </div>
  );
}

export default BtnDelete;
