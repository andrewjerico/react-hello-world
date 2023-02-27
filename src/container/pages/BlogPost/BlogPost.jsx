import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import './BlogPost.css';
import { useNavigate } from "react-router";
import API from "../../../services";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false,
        comments: []
    }
    
    getPostAPI = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        //     .then((result) => {
        //         this.setState({
        //             post: result.data
        //         })
        //     })
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        });

        API.getComment().then(result => {
            this.setState({
                comments: result
            })
        })
    }


    handleRemove = (data) => {
        // axios.delete('http://localhost:3004/posts/' + data).then((res) => {
        //     this.getPostAPI();
        // })
        
        API.deleteNewsBlog(data).then((res) => {
            this.getPostAPI();
        })

    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    componentDidMount(){
        this.getPostAPI();
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        formBlogPostNew[event.target.name] = event.target.value;       
        if(!this.state.isUpdate){
            let timestamp = new Date().getTime();
            formBlogPostNew['id'] = timestamp;
        }
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        // axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
        //     console.log(res);
        //     this.getPostAPI();
        //     this.setState({
        //         formBlogPost: {
        //             userId: 1,
        //             id: 1,
        //             title: '',
        //             body: ''
        //         }
        //     })
        // },(err) => {
        //     console.log('error: ',err);
        // })
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        });
    }
    
    putDataToAPI = () => {
        // axios.put('http://localhost:3004/posts/' + this.state.formBlogPost.id, this.state.formBlogPost).then((res) => {
        //     this.getPostAPI();
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost: {
        //             userId: 1,
        //             id: 1,
        //             title: '',
        //             body: ''
        //         }
        //     })
        // })

        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }
    

    render() {
        return (
            <Fragment>
                
             <p className="section-title">Blog Post</p>
             <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogPost.title}/>
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
             </div>
             {/* {
                this.state.comments.map(comment => {
                    return <p>{comment.name} - {comment.email}</p>
                })
             } */}
             {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    //return <Post key={post.id} data={post} remove={(data) => this.handleRemove(data)}/>
                })
             }
             
            </Fragment>
        );
    }
}

export default BlogPost;