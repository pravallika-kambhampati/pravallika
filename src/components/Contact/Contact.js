import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='heading'>
        Contact
        </div>
        <div className='bodypart'>
        You can reach out to me through LinkedIn or Twitter, as well as on my email at <code className='inline'>pravallika13kambhampati@gmail.com</code>
        </div>
      </div>
    )
  }
}
