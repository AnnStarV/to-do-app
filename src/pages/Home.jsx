import React from "react";
import ResponsiveAppBar from '../components/TemporaryDrawer'

const HomePage = () => {
  return (
    <div className="home">
      <ResponsiveAppBar/>
        <div className="home-content">
            <div className="home-info">
                <h1 className="home-title">To-Do List</h1>
                <p className="home-description">
                    A simple and intuitive to-do list application to help you manage your tasks efficiently.
                    Create, edit, and delete tasks with ease. Stay organized and boost your productivity!
                </p>
                <a href="/create" className="home-button">Get Started</a>
            </div>
            <div className="home-image">
                <img height="500" src="/images/main.png" alt="To-Do List"/>
            </div>
        </div>
    </div>
  );
}


export default HomePage;