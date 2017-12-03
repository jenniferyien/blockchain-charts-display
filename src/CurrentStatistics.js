import './styles/CurrentStatistics.css'
import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { currentStats } from './lib/chartsData.js'

class CurrentStatistics extends Component {
  render() {
    const { section } = this.props
    return (
      <div className="current-stats">
        {
          currentStats[section].map((stat) => (
            <div className='chart-section' key={stat.id}>
              <Col sm={6} xs={12}>
                <a href={`https://blockchain.info/charts/${stat.id}`}>
                  <h5>{stat.name}</h5>
                </a>
                <p>{stat.description}</p>
              </Col>
              <Col sm={6} xs={12} className='stat-chart' style={{backgroundImage: `url(https://api.blockchain.info/charts/thumbnail/${stat.id}.png)`}}/>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CurrentStatistics
