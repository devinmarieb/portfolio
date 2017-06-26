import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Tabs, Tab } from 'material-ui/Tabs'
import ProjectCards from './ProjectCards'
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
              <ProjectCards />
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
