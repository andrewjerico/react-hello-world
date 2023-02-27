import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc',false); 
const getComment = () => Get('comments', true);

//Post
const postNewsBlog = (data) => Post('posts', false, data);

//Put
const updateNewsBlog = (data,id) => Put(`posts/${id}`, false, data);

//Delte
const deleteNewsBlog = (id) => Delete(`posts/${id}`,false);
const API = {
    getNewsBlog,
    getComment,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;