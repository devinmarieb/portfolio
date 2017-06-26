import React, { Component } from 'react'
import { CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


export default class Projects2 extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <p className='skills-intro'>
          Turing students invest over 1500 hours across seven months in becoming job-ready software developers.
          In the Front End Engineering program we begin by building skills in HTML, CSS, and design fundamentals.
          We continue by laying a solid foundation in core JavaScript, then progress into React and a small handful of
          libraries and frameworks. In the final quarter we build backend applications with Node and SQL. In total,
          front end engineering graduates have the skills to turn design comps into working applications.
        </p>
        <section className='project-container'>
          <aside className='project'>
            <p>{this.props.description}</p>
            <CardActions>
              <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href={this.props.github} target='blank' />
              <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href={this.props.heroku} target='blank' />
            </CardActions>
            <img className='project-image' src='./images/nytbookshelf.png' />
            <img className='project-image' src='./images/nytfavorites.png' />
          </aside>
        </section>
      </section>
    )
  }
}
