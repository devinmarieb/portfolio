import React, { Component } from 'react'
import Projects from './Projects'


export default class ProjectsCards extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <p className='skills-intro'>
          Turing students invest over 1500 hours across seven months in becoming job-ready software developers.
          In the Front-End Engineering program we begin by building skills in HTML, CSS, and design fundamentals.
          We continue by laying a solid foundation in core JavaScript, then progress into React and a small handful of
          libraries and frameworks. In the final quarter we build backend applications with Node and SQL. In total,
          front-end engineering graduates have the skills to turn design comps into working applications.
        </p>
        <section className='project-container'>
          <Projects
            title='Neumann'
            subtitle='React / Node.js / Router3 / Auth0 / Material-UI / Mocha Chai'
            hosted='Deployed on Heroku'
            github='https://github.com/ejwill04/neumann'
            heroku='https://neumann.herokuapp.com/'
            description="Neumann is an app designed to help students at Turing find companies that alumni work at. An alumni
            can add a company to the app or add themselves to an existing company. They can also add reviews or
            hiring process information about the companies they've been associated with. As Turing grows, it's
            important for students to be able to connect with alumni. Alumni can choose to give out their slack
            handle or email if they're willing to have students contact them."
            imageOne='./images/neumann-home.png'
            imageTwo='./images/neumann-companypage.png'/>
          <Projects title='NYTBookshelf'
            subtitle='React / Redux / LocalStorage / Router3 / Sass / Mocha Chai'
            hosted='Deployed on Heroku'
            github='https://github.com/devinmarieb/NYTBookshelf'
            heroku='https://nytbookshelfprjct.herokuapp.com/#/'
            description='NYTBookshelf was a personal project I made about three quarters of the way through the front-end
            engineering program at turing. It uses the NYT Bestseller list API to display seven categories for
            a user to browse. Books are displayed with the title, author, description and image if available.
            A user can save their favorite books and view them in a separate favorites tab as well as find the
            product to buy on Amazon.'
            imageOne='./images/nytbookshelf.png'
            imageTwo='./images/nytfavorites.png'/>
          <Projects title='TripPlanner Database'
            subtitle='Node.js / Knex / PostgreSQL / Mocha Chai'
            hosted='Deployed on Heroku'
            github='https://github.com/devinmarieb/trip-planner'
            heroku='https://tripplannerprjct.herokuapp.com/'
            description="This was the first solo CRUD database I've made. The idea behind this project was to make a simple database
            with dummy data that can be utilized in a future project. There are eighteen endpoints that cover GET, POST,
            PATCH and DELETE requests. Most importantly, this project taught me how to extensively test a database for
            both happy and sad paths. I made a quick front-end for this project just so it was more pleasing to look at
            as a deployed app."
            imageOne='./images/byob.png'
            imageTwo='./images/byobdata.png'/>
          <Projects title='Codewars'
            subtitle='JavaScript'
            hosted='Codewars Profile'
            github='https://github.com/devinmarieb/codewars'
            heroku='https://www.codewars.com/users/devinmarieb'
            description='I set up a fun repo with solutions to my Codewars problems. I use the site to continuously improve on JavaScript
            fundamentals.'
            imageOne='./images/codewars.png'/>
        </section>
      </section>
    )
  }
}
