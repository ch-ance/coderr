import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post';
import MainContent from './components/MainContent/index';
const PostsData: IPosts[] = require("./PostsData.json").posts

interface IPosts {
  username: string;
  code: string;
  language: string;
  id: number;
}

const App: React.FC = () => {

  return (
    <div className="app-container">
      <MainContent posts={PostsData} />
    </div>
  );
}

export default App;