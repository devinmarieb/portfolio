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
              <Projects2 description="Hello"
                         github="https://github.com/devinmarieb/NYTBookshelf"
                         heroku='https://nytbookshelfprjct.herokuapp.com/#/'
                         description='NYT Bookshelf was a personal project I made about three quarters of the way through the front end
                                     engineering program at turing. It uses the NYT Bestseller list API to display seven categories for
                                     a user to browse. Books are displayed with the title, author, description and image if available.
                                     A user can save their favorite books and view them in a separate favorites tab as well as find the
                                     product to buy on Amazon.'/>
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
