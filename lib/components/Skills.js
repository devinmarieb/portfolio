import React, { Component } from 'react'


export default class Skills extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <div className='skillset'>
          <p className='skills-intro'>
            Turing students invest over 1500 hours across seven months in becoming job-ready software developers.
            In the Front End Engineering program we begin by building skills in HTML, CSS, and design fundamentals.
            We continue by laying a solid foundation in core JavaScript, then progress into React and a small handful of
            libraries and frameworks. In the final quarter we build backend applications with Node and SQL. In total,
            front end engineering graduates have the skills to turn design comps into working applications.
          </p>
        </div>
        <aside className='technology-container'>
          <div className='frontend'>
            <h2 className='favs'>frontend favs:</h2>
            <p>React, Redux, Sass, Material-UI, Webpack</p>
            <br></br>
            <h3 className='other-tech'>Other frontend technologies I've used:</h3>
            <p>jQuery</p>
            <p>Ember</p>
            <p>Marko</p>
            <p>HTML5 Canvas</p>
            <p>CSS3</p>
          </div>
          <div className='backend'>
            <h2 className='favs'>backend favs:</h2>
            <p>NodeJS, Knex, PostgreSQL</p>
          </div>
          <div className='testing'>
            <h2 className='favs'>testing favs:</h2>
            <p>Mocha, Chai, Enzyme</p>
            <br></br>
            <h3 className='other-tech'>Other testing technologies I've used:</h3>
            <p>Selenium</p>
            <p>Jest</p>
          </div>
        </aside>
      </section>
    )
  }
}
