import React from 'react'
import GoingContainer from '../containers/GoingContainer'
import Like from './Like'

var responseLineStyle = {
    "padding-top": "20px",
    "padding-bottom": "20px",
}

class PreviewResponses extends React.Component {
    render(){
        return(
            <div style={responseLineStyle}>
                <GoingContainer index={this.props.index} />
                <Like likeText="I like it" />
            </div>
        )
    }
}

export default PreviewResponses
