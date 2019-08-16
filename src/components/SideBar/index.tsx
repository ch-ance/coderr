import * as React from 'react';

interface IUser {
    username: string
}

interface Props {
    user: IUser
}

const SideBar: React.FC<Props> = (props) => {
    return (
        <div className="side-bar">
            <h2>{props.user.username}</h2>
        </div>
    )
}

export default SideBar;