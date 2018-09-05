import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import PostAvatar from './PostAvatar';
import PostImg from './PostImg';

function Post(props) {
    return(
        <div>
            <PostAvatar
                posterName = {props.post.username}
                posterAvatar = {props.post.thumbnailUrl}
            />

            <PostImg
                postImg = {props.post.imageUrl}
            />

            <CommentContainer 
                comments = {props.post.comments}
                timestamp = {props.post.timestamp}
            />
        </div>
    )
}

export default Post;