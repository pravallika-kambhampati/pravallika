import './App.css';
import Header from '././components/Header/Header';
import Aboutme from './components/AboutMe/Aboutme';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Projects from './components/Projects/Projects';
import Books from './components/Books/Books';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
      <BlogPosts/>
      <Projects/>
      <Books/>
      <Contact/>
    </div>
  );
}

export default App;
