import React from 'react'
import './Lists.css';

export default function Lists() {
  return (
    <div id='container'>
      <div id='inner'>
        <div className='child'>
            Life so far...  
              <ul>
              <li>A '00s baby</li>
              <li>Studying CS since 2018</li>
              <li>Earned my Bachelors in 2022</li>
              <li>At Cisco since 2022</li>
              </ul>
        </div>
        <div className='child'>
            Passionate about...
            <ul>
                <li>Books</li>
                <li>Food</li>
                <li>Coding</li>
                <li>Taylor Swift</li>
                
            </ul>    
        </div>
        <div className='child'>
            Thinking about...
          <ul>
              <li>Routing and Switching</li>  
              <li>Web Design</li>  
              <li>Automation</li>  
              <li>Artificial Intelligence</li>  
          </ul>    
            
        </div>  
      </div>
    </div>
  )
}

