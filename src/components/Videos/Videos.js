import React, { Component } from 'react';
import Video from './Video/Video';
import './Videos.scss';
import Axios from 'axios';

class Videos extends Component {
    state = {
        videos: null
        /* [
            {
                title: 'What is the JAMStack?',
                img: 'https://i.ytimg.com/vi/Y8PXMbr0Kqo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCooq1RDTGYip7J-Afo2yDFpC1NNw'
            },
            {
                title: 'Top 8 Web Development Trends 2019',
                img: 'https://i.ytimg.com/vi/VLm3Y7Odb74/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDew7aHoYcLSZnAOfXRLRjDifJgsg'
            },
            {
                title: 'Building an Advent Calendar with JavaScript, HTML & CSS',
                img: 'https://i.ytimg.com/vi/KXPD11CQLGE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC05CBEyNocMdO6hZOX_kx4tOACig'
            },
            {
                title: 'Python - Matplotlib Tutorial for Beginners',
                img: 'https://i.ytimg.com/vi/qErBw-R2Ybk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCx-Fa2FJFfHCc9JJ8bMvqAfFW1FA'
            },
            {
                title: 'Node.js Tutorial for Beginners - Getting Started with NodeJS Basics',
                img: 'https://i.ytimg.com/vi/C7TFgfY7JdE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCn4Zur4xfzIUg8WlOmi1Nwks6UeQ'
            },
            {
                title: 'JavaScript Testing - Mocking Async Code',
                img: 'https://i.ytimg.com/vi/4Fl5GH4eYZ8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4cvS2bit1bwm54NOLqWFQFA1n1g'
            },
            {
                title: 'How to Become a Better Web Developer - My Thoughts',
                img: 'https://i.ytimg.com/vi/H7X25hZ1Pq8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDfcbsxQnsyiptJE16ozSrPQ3Wz9g'
            },
            {
                title: 'SQL vs NoSQL or MySQL vs MongoDB',
                img: 'https://i.ytimg.com/vi/ZS_kXvOeQ5Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFDQ34XM7Mvh3CtsYbBHsBoZNlsw'
            },
            {
                title: 'What is the JAMStack?',
                img: 'https://i.ytimg.com/vi/Y8PXMbr0Kqo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCooq1RDTGYip7J-Afo2yDFpC1NNw'
            },
            {
                title: 'Top 8 Web Development Trends 2019',
                img: 'https://i.ytimg.com/vi/VLm3Y7Odb74/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDew7aHoYcLSZnAOfXRLRjDifJgsg'
            },
            {
                title: 'Building an Advent Calendar with JavaScript, HTML & CSS',
                img: 'https://i.ytimg.com/vi/KXPD11CQLGE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC05CBEyNocMdO6hZOX_kx4tOACig'
            },
            {
                title: 'Python - Matplotlib Tutorial for Beginners',
                img: 'https://i.ytimg.com/vi/qErBw-R2Ybk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCx-Fa2FJFfHCc9JJ8bMvqAfFW1FA'
            },
            {
                title: 'Node.js Tutorial for Beginners - Getting Started with NodeJS Basics',
                img: 'https://i.ytimg.com/vi/C7TFgfY7JdE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCn4Zur4xfzIUg8WlOmi1Nwks6UeQ'
            },
            {
                title: 'JavaScript Testing - Mocking Async Code',
                img: 'https://i.ytimg.com/vi/4Fl5GH4eYZ8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4cvS2bit1bwm54NOLqWFQFA1n1g'
            },
            {
                title: 'How to Become a Better Web Developer - My Thoughts',
                img: 'https://i.ytimg.com/vi/H7X25hZ1Pq8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDfcbsxQnsyiptJE16ozSrPQ3Wz9g'
            },
            {
                title: 'SQL vs NoSQL or MySQL vs MongoDB',
                img: 'https://i.ytimg.com/vi/ZS_kXvOeQ5Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFDQ34XM7Mvh3CtsYbBHsBoZNlsw'
            },
            {
                title: 'What is the JAMStack?',
                img: 'https://i.ytimg.com/vi/Y8PXMbr0Kqo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCooq1RDTGYip7J-Afo2yDFpC1NNw'
            },
            {
                title: 'Top 8 Web Development Trends 2019',
                img: 'https://i.ytimg.com/vi/VLm3Y7Odb74/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDew7aHoYcLSZnAOfXRLRjDifJgsg'
            },
            {
                title: 'Building an Advent Calendar with JavaScript, HTML & CSS',
                img: 'https://i.ytimg.com/vi/KXPD11CQLGE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC05CBEyNocMdO6hZOX_kx4tOACig'
            },
            {
                title: 'Python - Matplotlib Tutorial for Beginners',
                img: 'https://i.ytimg.com/vi/qErBw-R2Ybk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCx-Fa2FJFfHCc9JJ8bMvqAfFW1FA'
            },
            {
                title: 'Node.js Tutorial for Beginners - Getting Started with NodeJS Basics',
                img: 'https://i.ytimg.com/vi/C7TFgfY7JdE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCn4Zur4xfzIUg8WlOmi1Nwks6UeQ'
            },
            {
                title: 'JavaScript Testing - Mocking Async Code',
                img: 'https://i.ytimg.com/vi/4Fl5GH4eYZ8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4cvS2bit1bwm54NOLqWFQFA1n1g'
            },
            {
                title: 'How to Become a Better Web Developer - My Thoughts',
                img: 'https://i.ytimg.com/vi/H7X25hZ1Pq8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDfcbsxQnsyiptJE16ozSrPQ3Wz9g'
            },
            {
                title: 'SQL vs NoSQL or MySQL vs MongoDB',
                img: 'https://i.ytimg.com/vi/ZS_kXvOeQ5Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFDQ34XM7Mvh3CtsYbBHsBoZNlsw'
            }
        ]*/
    }

    componentDidMount(){
        Axios.get('https://videostube.firebaseio.com/videostube.json').then(
            response => {
                console.log(response)
               // this.setState({videos: response.data})
            }
        )
    }

    render(){
        let videos = null;
        if( this.state.videos ){
            videos = (
                <div className="Videos">
                    {this.state.videos.map(video => {
                        return <Video title={video.title} img={video.img}></Video>
                    })}
                </div>
            );
        }
        return (
            <div className="VideosContent">
                <h2>Recomendados</h2>
                {videos}
            </div>
        );
    }
}

export default Videos;