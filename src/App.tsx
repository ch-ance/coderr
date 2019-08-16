import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post';
const PostsData: IPosts[] = require("./PostsData.json").posts

interface IPosts {
  username: string;
  code: string;
  id: number;
}

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coderr</h1>
      </header>
      {PostsData.map(eachPost => {
        return <Post username={eachPost.username} code={eachPost.code} id={eachPost["id"]} />
      })}
    </div>
  );
}

export default App;