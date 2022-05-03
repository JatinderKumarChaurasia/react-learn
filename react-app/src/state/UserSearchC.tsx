import React from "react";

interface User {
    name: string;
    age:number;
}

interface UserSearchCProps {
    users: User[]
}

interface UserSearchState {
    name: string,
    user: User | undefined
}

export default class UserSearchC extends React.Component<UserSearchCProps>{
    state:UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        console.log('absolute value')
        const founduser = this.props.users.find(user => {
            return user.name === this.state.name
        })
        this.setState({user: founduser})
    }
    render() {
        const {name,user} = this.state
        console.log(user)
        return (
            <div>
                User Search
                <input className='rounded p-1 m-2 border-2 ring-2 border-amber-300' type={this.state.name} inputMode='text' onChange={(e) => this.setState({name: e.target.value})} placeholder='Enter the username to search'/>

                <button className='button bg-blue-300 p-1' onClick={this.onClick}>Search Users</button>
                {user !== undefined && user &&
                    <ul className='list-disc m-3'>
                        <li className='list-item bg-blend-color'>{user && user?.name !== '' && user.name}</li>
                        <li>{user && user?.name !=='' && user.name}</li>
                        <li>{user && user?.age !== 0 && user.age}</li>
                    </ul>
                }
            </div>
        );
    }
}
