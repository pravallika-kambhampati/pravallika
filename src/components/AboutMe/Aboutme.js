import React from 'react'
import Lists from '../Lists/Lists';
import './Aboutme.css';

export default function Aboutme() {
  return (
    <div>
        <div className='heading'>
      About Me
        </div>
        <div className='bodypt'>
        Hello there, my friends and foes! I am Pravallika Kambhampati, from Visakhapatnam, currently in Bengaluru, India. By day, I work my magic as a Network Consulting Engineer at the almighty Cisco, but by night, you can find me lurking on Github, LinkedIn, and Twitter. So, don't be shy, come say hi!
        </div>
        <div className='bodypt2'>
        Welcome to my humble abode on the interwebs, where you'll find a little bit of me and a lot of ramblings about things I care about. You can expect a balanced mix of technical wizardry, musings on mental health, and perhaps even some off-key singing about my love for music. So come on in, pull up a virtual chair, and let's get weird.
        </div>
        <div className='bodypt3'>
        I'm also posting my blog posts on Medium, so you can find them there as well. 
        </div>
        <Lists></Lists>
    </div>
    
    
  )
}

