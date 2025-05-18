import { useState } from "react";

export default function card(props) {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeCount() {
    setLikeCount(likeCount + 1);
  }

  function decreaseLikeCount() {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  }

  return (
    <div>
      <button onClick={() => increaseLikeCount()}>Increase</button>
      <br />
      <button>{likeCount}</button>
      <br />
      <button onClick={() => decreaseLikeCount()}>Decrease</button>
    </div>
  );
}
