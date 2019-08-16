import * as React from 'react';

interface Props {
    username: string;
    code: string;
    id: number;
}

const Post: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Post # {props.id}</h2>
            <p>{props.code}</p>
            <p>{Date.now()} - {props.username}</p>
        </div>
    )
}

export default Post;