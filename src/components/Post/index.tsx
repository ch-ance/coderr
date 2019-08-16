import * as React from 'react';

interface Props {
    id: number
}

const Post: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Post # {props.id}</h2>
        </div>
    )
}

export default Post;