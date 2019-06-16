import React, { Component } from 'react'
import { Col } from 'reactstrap';

export class Image extends Component {
  render() {
    const {src} = this.props;

    const divStyle = {
      background: `url('${src}')`
    }

    return (
        <div className="shoes" style={divStyle}>
          MONTH <br />
          22
        </div>
    )
  }
}

export default Image
