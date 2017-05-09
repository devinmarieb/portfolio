import React, { Component } from 'react'


export default class AboutMe extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
    <section>
      <aside className='user-photo-container'>
        <img className='user-photo' src='../../images/user-photo.jpg' />
        <img className='user-photo' src='../../images/user-photo.jpg' />
        <img className='user-photo' src='../../images/user-photo.jpg' />
        <img className='user-photo' src='../../images/user-photo.jpg' />
      </aside>
      <div className='about-me-text'>
        Text
      </div>
    </section>
    )
  }
}
