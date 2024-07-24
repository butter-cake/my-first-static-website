import { useState } from "react";
import "./MyButton.css";

function MyButton() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLikesClick() {
    setLikes(likes + 1);
  }

  function handleDislikesClick() {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <button className="likeButton" onClick={handleLikesClick}>
        Like {likes}
      </button>
      <button className="dislikeButton" onClick={handleDislikesClick}>
        Dislike {dislikes}
      </button>
    </div>
  );
}

export default MyButton;
