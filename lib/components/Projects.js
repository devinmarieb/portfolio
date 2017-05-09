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

        <Card className='project-card' style={{ height: '900px' }}>
          <CardHeader title='Neumann' subtitle='React / Node.js / Router3 / Auth0 / Material-UI / Mocha Chai' />
          <CardText>
            Neumann is an app designed to help students at Turing find companies that alumni work at. An alumni
            can add a company to the app or add themselves to an existing company. They can also add reviews or
            hiring process information about the companies they've been associated with. As Turing grows, it's
            important for students to be able to connect with alumni. Alumni can choose to give out their slack
            handle or email if they're willing to have students contact them.
          </CardText>
          <CardActions>
            <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://github.com/ejwill04/neumann' target='blank'/>
            <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://neumann.herokuapp.com/' target='blank' />
          </CardActions>
          <CardMedia>
            <img className='project-image' src='./images/neumann-home.png' />
            <img className='project-image' src='./images/neumann-companypage.png' />
          </CardMedia>
        </Card>

        <Card className='project-card' style={{ height: '900px' }}>
          <CardHeader title='NYT Bookshelf' subtitle='React / Redux / LocalStorage / Router3 / Sass / Mocha Chai' />
          <CardText>
            NYT Bookshelf was a personal project I made about three quarters of the way through the front end
            engineering program at turing. It uses the NYT Bestseller list API to display seven categories for
            a user to browse. Books are displayed with the title, author, description and image if available.
            A user can save their favorite books and view them in a separate favorites tab as well as find the
            product to buy on Amazon.
          </CardText>
          <CardActions>
            <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://github.com/devinmarieb/NYTBookshelf' target='blank' />
            <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://nytbookshelfprjct.herokuapp.com/#/' target='blank' />
          </CardActions>
          <CardMedia>
            <img className='project-image' src='./images/nytbookshelf.png' />
            <img className='project-image' src='./images/nytfavorites.png' />
          </CardMedia>
        </Card>

        <Card className='project-card' style={{ height: '900px' }}>
          <CardHeader title='TripPlanner Database' subtitle='Node.js / Knex / PostgreSQL / Mocha Chai' />
          <CardText>
            This was the first solo CRUD database I've made. The idea behind this project was to make a simple database
            with dummy data that can be utilized in a future project. There are eighteen endpoints that cover GET, POST,
            PATCH and DELETE requests. Most importantly, this project taught me how to extensively test a database for
            both happy and sad paths. I made a quick front end for this project just so it was more pleasing to look at
            as a deployed app.
          </CardText>
          <CardActions>
            <FlatButton label='GitHub Repo' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://github.com/devinmarieb/trip-planner' target='blank' />
            <FlatButton label='Deployed on Heroku' style={{backgroundColor: '#939393', color: '#EBEBEB'}} href='https://tripplannerprjct.herokuapp.com/' target='blank' />
          </CardActions>
          <CardMedia>
            <img className='project-image' src='./images/byob.png' />
            <img className='project-image' src='./images/byobdata.png' />
          </CardMedia>
        </Card>

      </section>
    )
  }
}
