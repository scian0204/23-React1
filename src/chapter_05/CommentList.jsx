import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "남궁찬",
        comment: "안녕하세요."
    }, 
    {
        name: "남궁찬2",
        comment: "안녕하세요."
    }, 
    {
        name: "남궁찬3",
        comment: "안녕하세요."
    }, 
]

function CommentList(props) {
    return (
        <div>
            {comments.map((data) => {
                return (
                    <Comment name={data.name} comment={data.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;