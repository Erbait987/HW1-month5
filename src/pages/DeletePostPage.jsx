import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { DummyjsonApi } from "../api";

function DeletePostPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const handleClick = async () => {
    const delReq = await DummyjsonApi.delete(`/posts/${postId}`);
    console.log(delReq);
    navigate(-2);
  };

  return (
    <div className="delete">
      <div className="delete-flex">
        <button onClick={handleClick} className="red">
          Delete
        </button>
        <button onClick={() => navigate(-1)}>Cancel</button>
      </div>
      <p>Вы дейстительно хотите удалить пост?</p>
    </div>
  );
}

export default DeletePostPage;
