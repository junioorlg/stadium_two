import React, {Component} from 'react';
import YouTube from 'react-youtube';

// SCSS
import './iframeYoutube.scss'

class IframeYoutube extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoID: [],
            loading: true
        }

        this.abortController = new AbortController();
    }

    componentDidMount() {
        const that = this;
        const apiKey = "AIzaSyBOg5gD9xpd-lXfA9lW95Ltl0TWJbpbN58";
        const idVideo = this.props.id;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${idVideo}&key=${apiKey}`;
  
        fetch( url, {signal: this.abortController.signal} )
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }

                return response.json()
            })
            .then(function(data) {
                that.setState({ 
                    videoID: data.items[0].id, 
                    loading: false 
                });
            })
            .catch(error => {
                //console.error(error)
            });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        const { videoID, loading } = this.state;
  
        if (loading) {
            return null;
        }
  
        return (
            <div className="video-wrapper">
                <YouTube
                    videoId={videoID}
                    onReady={this._onReady}/>
            </div>
        );
    }
}

export default IframeYoutube