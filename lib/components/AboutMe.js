import React, { Component } from 'react'


export default class AboutMe extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
    <section>
      <div className='about-me-text'>
        I grew up in Portland, Maine, got my bachelor's degree from Champlain College in Burlington, Vermont and moved to Boston shortly after.
        I spent years in Boston working with technology and eventually decided I wanted to write software. I moved to Denver and enrolled in
        the Front-End Engineering program at the Turing School of Software & Design. I want to continue writing JavaScript while learning new things,
        whether it be more front-end frameworks and libraries or back-end technologies.
        <br></br>
        <br></br>
        My personal interests include travel, photography, writing, knitting and good IPAs. I'm very interested in the travel, education and advertising
        industries. While I was getting my bachelor's degree, I took a few advertising and marketing classes and I find the industry fascinating.
        Throughout my time in college and in Boston I had some amazing opportunities to travel and hope to continue to do so in the future. My dream job
        would be writing software for a company that deals with the travel or tourism industry.
      </div>
      <div className='skillset'>
        <aside className='skill'>
          <h3>Front-End Skills:</h3>
          JavaScript, jQuery, React, Redux, Ember, CSS3, Sass, Material-UI, HTML5, Webpack
          <br></br>
          <br></br>
        </aside>
        <aside className='skill'>
          <h3>Back-End Skills:</h3>
            Node, Knex, PostgreSQL
          <br></br>
          <br></br>
      </aside>
      <aside className='skill'>
        <h3>Testing Skills:</h3>
          Mocha, Chai, Enzyme, Selenium, Jasmine
        </aside>
      </div>
    </section>
    )
  }
}
