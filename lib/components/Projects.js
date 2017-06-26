import React, { Component } from 'react'
import { CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


export default class Projects extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <section>
          <aside className='project'>
            <h2>{this.props.title}</h2>
            <h4>{this.props.subtitle}</h4>
            <p>{this.props.description}</p>
            <CardActions>
              <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href={this.props.github} target='blank' />
              <FlatButton label={this.props.hosted} style={{backgroundColor: '#939393', color: '#EBEBEB'}} href={this.props.heroku} target='blank' />
            </CardActions>
            <img className='project-image' src={this.props.imageOne} />
            <img className='project-image' src={this.props.imageTwo} />
          </aside>
        </section>
      </section>
    )
  }
}
