const React = require('react');

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null, 
      settings: {
        bitrate: 8, 
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleBitRateButtonClick = this.handleBitRateButtonClick.bind(this)
    this.handleResolutionButtonClick = this.handleResolutionButtonClick.bind(this)
  }

  handleBitRateButtonClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: this.state.settings.bitrate === 8 ? 12 : 8
      })
    })
  }

  handleResolutionButtonClick() {
    this.setState({
      settings: Object.assign({},this.state.settings, {
        video: Object.assign({},this.state.settings.video, {
          resolution: this.state.settings.video.resolution === '1080p' ? '720p' : '1080p'
        })
      })
    })
  }
  render() {
    return (
      <div>
        <p>
          Bitrate: {this.state.settings.bitrate} 
          <button className="bitrate" onClick={this.handleBitRateButtonClick}>Switch Bitrate</button>
        </p>
        <p>
          Resolution: {this.state.settings.video.resolution} 
          <button className="resolution" onClick={this.handleResolutionButtonClick}>Switch Resolution</button>
        </p>
      </div>
    );
  }
}

YouTubeDebugger.defaultProps = {
  
};

YouTubeDebugger.propTypes = {
  
};

module.exports = YouTubeDebugger;