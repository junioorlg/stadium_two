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
    }

    componentDidMount() {
        const that = this;
        const apiKey = "AIzaSyDV7i60KkEPEi3jH1TPIhNwxa5rnUuEhpw";
        const idVideo = this.props.id;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${idVideo}&key=${apiKey}&origin=http://localhost:3000`;
  
        fetch(url)
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
                console.error(error)
            });
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