import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Tabs, Tab } from 'material-ui/Tabs'
import Projects2 from './Projects2.js'
import Skills from './Skills.js'
import AboutMe from './AboutMe.js'

import '../../styles/styles.scss'

injectTapEventPlugin()

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <div className='title-container'>
          <aside>
            <h1 className='name'>devin beliveau: front end developer</h1>
          </aside>
          <aside>
            <a href='https://www.linkedin.com/in/devin-beliveau-2126448' target='blank'><img className='social' src='./images/linkedin.png' /></a>
            <a href='https://github.com/devinmarieb' target='blank'><img className='social' src='./images/github.png' /></a>
            <a href='mailto:devinmarieb@gmail.com'><img className='social' src='./images/email.png' /></a>
            <a href='https://medium.com/@devinmarieb' target='blank'><img className='social' src='./images/medium.png' /></a>
          </aside>
        </div>
        <MuiThemeProvider>
          <Tabs tabItemContainerStyle={{backgroundColor: '#0B132B'}}>
            <Tab label='projects' style={{color: '#FFFFFF'}} >
              <aside className='project-container'>
                <Projects2 title='Neumann'
                  subtitle='React / Node.js / Router3 / Auth0 / Material-UI / Mocha Chai'
                  github='https://github.com/ejwill04/neumann'
                  heroku='https://neumann.herokuapp.com/'
                  description="Neumann is an app designed to help students at Turing find companies that alumni work at. An alumni
                  can add a company to the app or add themselves to an existing company. They can also add reviews or
                  hiring process information about the companies they've been associated with. As Turing grows, it's
                  important for students to be able to connect with alumni. Alumni can choose to give out their slack
                  handle or email if they're willing to have students contact them."
                  imageOne='./images/neumann-home.png'
                  imageTwo='./images/neumann-companypage.png'/>
                  <Projects2 title='NYTBookShelf'
                    subtitle='React / Redux / LocalStorage / Router3 / Sass / Mocha Chai'
                    github='https://github.com/devinmarieb/NYTBookshelf'
                    heroku='https://nytbookshelfprjct.herokuapp.com/#/'
                    description='NYTBookshelf was a personal project I made about three quarters of the way through the front end
                    engineering program at turing. It uses the NYT Bestseller list API to display seven categories for
                    a user to browse. Books are displayed with the title, author, description and image if available.
                    A user can save their favorite books and view them in a separate favorites tab as well as find the
                    product to buy on Amazon.'
                    imageOne='./images/nytbookshelf.png'
                    imageTwo='./images/nytfavorites.png'/>
                    <Projects2 title='TripPlanner Database'
                      subtitle='Node.js / Knex / PostgreSQL / Mocha Chai'
                      github='https://github.com/devinmarieb/trip-planner'
                      heroku='https://tripplannerprjct.herokuapp.com/'
                      description="This was the first solo CRUD database I've made. The idea behind this project was to make a simple database
                                  with dummy data that can be utilized in a future project. There are eighteen endpoints that cover GET, POST,
                                  PATCH and DELETE requests. Most importantly, this project taught me how to extensively test a database for
                                  both happy and sad paths. I made a quick front end for this project just so it was more pleasing to look at
                                  as a deployed app."
                      imageOne='./images/byob.png'
                      imageTwo='./images/byobdata.png'/>
              </aside>
            </Tab>
            <Tab label='about' style={{color: '#FFFFFF'}}>
              <AboutMe />
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </section>
    )
  }

}
