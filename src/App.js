import './styles/App.css';

import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChartNav from './ChartNav.js'
import CurrentStatistics from './CurrentStatistics.js'
import PopularStats from './PopularStats.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeSection: 'currency-statistics',
    }
    this.selectSection = this.selectSection.bind(this)
  }

  selectSection(section) {
    if (this.state.activeSection !== section) {
      this.setState({ activeSection: section })
    }
  }
  render() {

    return (
      <div className="app">
        <Grid>
          <div className='app-title'>
            <h1>Blockchain Charts</h1>
            <p>The most trusted source for data on the bitcoin blockchain.</p>
          </div>
          <PopularStats />
        </Grid>
        <Row className='app-charts'>
          <Grid>
            <Col sm={3} xs={12} className='app-nav'>
              <ChartNav
                  section={this.state.activeSection}
                  onClickSelect={(section) => this.selectSection(section)} />
            </Col>
            <Col sm={9} xs={12} className='app-display'>
              <CurrentStatistics section={this.state.activeSection}/>
            </Col>
          </Grid>
        </Row>
      </div>
    );
  }
}

export default App;
