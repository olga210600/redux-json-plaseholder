import {createSlice} from "@reduxjs/toolkit";
import React from "react";

 const initialState = {
    posts: [],
    newPost: {
        title: '',
        body: ''
    }
}

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        getPost: (state, {payload}) => {
            state.posts = payload
        },
        getNewUserPost: (state,{ payload }) => {
            console.log('payload' ,payload)
            state.posts = state.posts.concat(payload)
        }
    }})

export const postSelector = {
    getPostList: (state) => state.posts,
    getNewPostUserList: (state) => state.newPost
}

export const {getPost,  getNewUserPost,getNewPostBody, getNewPostTitle} = postSlice.actions
export default postSlice