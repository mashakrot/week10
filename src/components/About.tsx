import React, { useState, useEffect } from "react";
import "../styles/About.css";

// Define the structure of the API data
interface Post {
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const [items, setItems] = useState<Post[]>([]); // Tell TypeScript this is an array of 'Post'
  const [visibleItems, setVisibleItems] = useState(12);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setItems(data)); // Ensure TypeScript understands the fetched data is an array of 'Post'
  }, []);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 12);
  };

  return (
    <div>
      <div className="grid-container">
        {items.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="grid-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {visibleItems < items.length && (
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};

export default About;
