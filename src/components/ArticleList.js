import React from "react";
import Article from "./Article"; // Import the Article component

// The ArticleList component accepts 'posts' as a destructured prop.
// 'posts' is expected to be an array of article objects passed from App.js.
function ArticleList({ posts }) {
  // Map over the 'posts' array to render an Article component for each post.
  // Each Article component receives 'key', 'title', 'date', and 'preview' props.
  // A unique 'key' is crucial for React to efficiently update lists.
  const articles = posts.map((post) => (
    <Article
      key={post.id} // Assuming each post object has a unique 'id'. If not, use post.title or index.
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return (
    <main>
      {/* Render the array of Article components */}
      {articles}
    </main>
  );
}

export default ArticleList;