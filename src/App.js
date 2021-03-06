import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className = "profile">
        <h1 className = "profile_name">Kayode Omotosho</h1>

      </section>
      <section className = "container">
        <h1>My Latest Seeking Alpha Articles</h1>
        <p>
          I guys, here are the links to all my published works on Seeking Alpha. It's been fun for me. I hope you enjoy them.
        </p>
        <ul>
          <li>
          <a href="https://seekingalpha.com/article/4288469-picking-winners-cyber-security-space?source=all_articles_title"><b className = "brown" >HACK</b>: Picking Winners In The Cyber Security Space</a>
          </li>
          <li>
          <a href="https://seekingalpha.com/article/4288287-qualys-overpricing-growth?source=all_articles_title"><b className = "blue">Qualys</b>: Overpricing Growth</a>
          </li>
          <li>
          <a href="https://seekingalpha.com/article/4288237-jumia-take?source=all_articles_title"><b className = "orange">Jumia</b>: Take Off</a>
          </li>
          <li>
          <a href="https://seekingalpha.com/article/4287834-rapid7-underrated?source=all_articles_title"><b className = "red">Rapid7</b>: Is Underrated</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
