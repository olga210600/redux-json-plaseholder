import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Json from "./utils/json";
import {
    getPost,
    getNewPostUserList,
    getNewUserPost,
    postSelector,
    getNewPostBody,
    getNewPostTitle
} from "./redux/slices/blockSlices";
import Inputs from "./utils/Inputs";

const App = () => {
        const getUserPosts = useSelector(postSelector.getNewPostUserList)
        const posts = useSelector(postSelector.getPostList)
        const dispatch = useDispatch()



        const [userPost, setUserPost] = useState({
            title:'',
            body: ''
        })



        const handleChangeTitle = (e) => {
            setUserPost({...userPost , title: e.target.value})


        }
        const handleChangeBody = (e) => {
            setUserPost({...userPost, body: e.target.value})

        }

        const handleAddPost = () => {

            dispatch(getNewUserPost(userPost))

            setUserPost({
                title:'',
                body: ''
            })
        }

    console.log(userPost)


        useEffect(() => {
            dataEffect()
            // createPostRequest()

        }, [])

        const dataEffect = async () => {
            await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => dispatch(getPost(data)))
                .catch((err) => {
                    console.log(err)
                })
        }



        // const createPostRequest = async () => {
        //     await fetch('https://jsonplaceholder.typicode.com/posts', {
        //             method: 'POST',
        //             body: JSON.stringify(newPost)
        //
        //         }
        //     )
        //         .then((res) => res.json())
        //         // .then((userPosts) => dispatch(posts.push(userPosts)))
        //         .then((userPosts) => dispatch(getNewUserPost(getUserPosts.concat(userPosts))))
        //     console.log(posts, 'postsm,')
        // }
        //

        return (
            <div>
                <Inputs
                    title={userPost.title}
                    body={userPost.body}
                    handleAddPost={handleAddPost}
                    handleChangeTitle={handleChangeTitle}
                        handleChangeBody={handleChangeBody} getNewPostBody={getNewPostBody}
                        getNewPostTitle={getNewPostTitle}/>
                {
                    posts.map((post) => {
                        return (
                            <Json title={post.title} text={post.body}/>
                        )
                    })
                }
            </div>
        );

    }
;


export default App;


// import React, {useEffect, useState} from 'react';
// import Json from "./utils/json";
//
// const App = () => {
//     const [posts, setPosts] = useState([])
//
//     useEffect(() => {
//         dataEffect()
//     }, [])
//
//     const dataEffect = async () => {
//         await fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => setPosts(data))
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//
//     console.log(posts)
//     return (
//         <div>
//             {
//                 posts.map((post) => {
//                     return (
//                         <Json key={post.id} text={post.body}/>
//                     )
//                 })
//             }
//         </div>
//
//     );
//
//
// };
//
// export default App;

