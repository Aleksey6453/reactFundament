import React from 'react';
import './style/GlobalStyle.css'
import PostItem from './components/postItem/PostItem';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post 1', body:'Text about Post1'},
    {id:2, title:'Post 2', body:'Text about Post2'},
    {id:3, title:'Post 3', body:'Text about Post3'},
])
  return (
    <div className="App">
      <PostItem post={} />
    </div>
  );
}

export default App;
