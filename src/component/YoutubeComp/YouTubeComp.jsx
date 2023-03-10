import React from 'react'
import './YouTubeComp.css'

function YouTubeComp(props) {
  return (
    <div className='youtube-wrapper'>
        <div className='img-thumb'>
            <img src="400568.jpg" alt="" width={210} height={118}/>
            <p className='time'>{props.time}</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
    </div>
  )
}

YouTubeComp.defaultProps = {
    time: '00:00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YouTubeComp;