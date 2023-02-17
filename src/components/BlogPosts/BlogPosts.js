import React, { Component } from 'react'
import Blogitems from '../Blogitems/Blogitems'
import './BlogPosts.css';

export default class BlogPosts extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{position:"relative"}}>
        <div className='heading'>
        Blog Posts
        </div>
        <div className='bodypart'>
        This is a list of my recent blog posts/articles.
        </div>
        <Blogitems/>
      </div>

      </div>
      
    )
  }
}
