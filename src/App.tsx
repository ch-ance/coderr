import React, { useState, useEffect } from 'react';
import './App.scss';
import MainContent from './components/MainContent/index';
import SideBar from './components/SideBar/index'
const PostsData: IPosts[] = require("./PostsData.json").posts
const UserData: IUser = require("./UserData.json").user

interface IPosts {
  username: string;
  code: string;
  language: string;
  id: number;
}

interface IUser {
  username: string;
}

const App: React.FC = () => {

  return (
    <div className="app-container">
      <SideBar user={UserData}/>
      <MainContent posts={PostsData} />
    </div>
  );
}

export default App;