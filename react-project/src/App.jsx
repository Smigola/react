import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function handleAddNewPost() {
    const newPost = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
    };

    setPosts([newPost, ...posts]);
  }

  return (
    <>
      <div>
        <input
          placeholder="add new post"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          placeholder="add description"
          value={newBody}
          onChange={(e) => {
            setNewBody(e.target.vaue);
          }}
        />
      </div>
      <button onClick={handleAddNewPost}>add post</button>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "5px",
        }}
      >
        {posts.map((post, i) => (
          <Card key={i} title={post.title} id={post.id} body={post.body} />
        ))}
      </div>
    </>
  );
}

export default App;
