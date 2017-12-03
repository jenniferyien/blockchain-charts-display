import './styles/PopularStats.css'
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import numeral from 'numeral'
import $ from 'jquery'

class PopularStats extends Component {

  constructor(props) {
    super(props)
    this.state = { stats: {} }
  }

  componentDidMount() {
    $.ajax({
        url: `https://api.blockchain.info/stats`,
        method: 'GET',
        data: { cors: true },
        dataType: 'json',
        type: 'application/json',
        success: function(response){
          this.setState({ stats: response })
       }.bind(this)
     })
  }

  render() {
    const { stats } = this.state
    return (
      <Row className="popular-stats">
        <Col sm={4} xs={12} className='stat'>
          <a href='https://blockchain.info/charts/market-price' target='_blank'>
            <div className='stat-section'>
              <h5>Market Price (USD)</h5>
                {numeral(stats.market_price_usd).format('$0,0.00')}
                <span>USD</span>
            </div>
          </a>
        </Col>
        <Col sm={4} xs={12} className='stat'>
          <a href='https://blockchain.info/charts/avg-block-size' target='_blank'>
            <div className='stat-section'>
              <h5>Average Block Size</h5>
                {parseFloat(((stats.blocks_size/stats.n_blocks_mined)/1000000).toFixed(2))}
                <span>Megabytes</span>
            </div>
          </a>
        </Col>
        <Col sm={4} xs={12} className='stat'>
          <a href='https://blockchain.info/charts/n-transactions' target='_blank'>
            <div className='stat-section'>
              <h5>Transactions per Day</h5>
                {numeral(stats.n_tx).format('0,0')}
                <span>Transactions</span>
            </div>
          </a>
        </Col>
      </Row>
    )
  }
}

export default PopularStats;
