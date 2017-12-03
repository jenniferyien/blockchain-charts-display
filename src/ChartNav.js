import './styles/ChartNav.css'
import React, { Component } from 'react'
import { chartSections } from './lib/chartsData.js'

class ChartNav extends Component {
  render() {
    const { section, onClickSelect } = this.props
    return (
      <div className='chart-section-nav'>
        <ul>
          {
            chartSections.map((sectionName) => (
              <li className={`${section === sectionName.id ? 'active': ''}`}>
                <a onClick={() => onClickSelect(sectionName.id)}> {sectionName.name} </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ChartNav;
