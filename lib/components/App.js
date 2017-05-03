import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Tabs, Tab } from 'material-ui/Tabs'
import Projects from './Projects.js'

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
            <a href='https://www.linkedin.com/in/devin-beliveau-2126448' target='blank'><img className='social' src='../../images/linkedin.png' /></a>
            <a href='https://github.com/devinmarieb' target='blank'><img className='social' src='../../images/github.png' /></a>
          </aside>
        </div>
        <MuiThemeProvider>
          <Tabs tabItemContainerStyle={{backgroundColor: '#23282D'}}>
            <Tab label='projects'>
              <Projects />
            </Tab>
            <Tab label='skills'>
              <div className='about-me'>Skills</div>
            </Tab>
            <Tab label='about'>
              <div className='about-me'>About Me</div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </section>
    )
  }

}
