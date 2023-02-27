import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 

const Post = (props) => {
    const navigate = useNavigate();
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="" width={200} height={150}/>
            </div>
            <div className="content">
                {/* <Link to={"/detail-post/" + props.data.id} className='title'>{props.data.title}</Link> */}
                {/* <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p> */}
                <p className="title" onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className='update' onClick={() => props.update(props.data)}>Update</button>
                <button className='remove' onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;