import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


export default class Projects extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section className='project-container'>
        <Card className='project-card' style={{ height: '700px' }}>
          <CardHeader title='Neumann' subtitle='React / NodeJS / Router3 / Auth0 / Material-UI / Mocha Chai' />
          <CardText>
            Neumann is an app designed to help students at Turing find companies that alumni work at. An alumni
            can add a company to the app or add themselves to an existing company. They can also add reviews or
            hiring process information about the companies they've been associated with. As Turing grows, it's
            important for students to be able to connect with alumni. Alumni can choose to give out their slack
            handle or email if they're willing to have students contact them.
          </CardText>
          <CardActions>
            <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} />
            <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} />
          </CardActions>
          <CardMedia>
            <img className='project-image' src='../../images/neumann-home.png' />
            <img className='project-image' src='../../images/neumann-companypage.png' />
          </CardMedia>
        </Card>
        <Card className='project-card' style={{ height: '700px' }}>
          <CardHeader title='NYT Bookshelf' subtitle='React / Redux / Loca / Router3 / Sass / Mocha Chai' />
          <CardText>
            NYT Bookshelf was a personal project I made about three quarters of the way through the front end
            engineering program at turing. It uses the NYT Bestseller list API to display seven categories for
            a user to browse. Books are displayed with the title, author, description and image if available.
            A user can save their favorite books and view them in a separate favorites tab as well as find the
            product to buy on Amazon.
          </CardText>
          <CardActions>
            <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} />
            <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} />
          </CardActions>
          <CardMedia>
            <img className='project-image' src='../../images/nytbookshelf.png' />
            <img className='project-image' src='../../images/nytfavorites.png' />
          </CardMedia>
        </Card>
      </section>
    )
  }
}
