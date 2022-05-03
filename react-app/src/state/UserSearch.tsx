import React, {useState} from "react";

interface User {
  id: number;
  name:string;
  age: number;
}
const users:User[] = [
  {id: 1, name: 'sarah', age: 40},
  {id: 2, name: 'shivani', age: 29},
  {id: 3, name: 'sharma', age: 30},
];

export const UserSearch: React.FunctionComponent = () => {
  const [name,setName] = useState('')
  const [user,setUser] =  useState<User | undefined>({name:'',age:0,id:0})
  const searchUser = () =>{
    const foundUser = users.find(user =>  user.name === name)
    setUser(foundUser)
    console.log(foundUser)
    // users.forEach((user) => {
    //   if (user.name === name) {
    //     console.log(user)
    //   }
    //   else {
    //     console.log('did not find the user')
    //   }
    // })
  }
  return <div>
    <input className='rounded p-1 m-2 border-2 ring-2 border-amber-300' type={name} inputMode='text' onChange={(e) => setName(e.target.value)} placeholder='Enter the username to search'/>

    <button className='button bg-blue-300 p-1' onClick={searchUser}>Search Users</button>
    {user !== undefined && user &&
    <ul className='list-disc m-3'>
      <li className='list-item bg-blend-color'>{user && user?.id !== 0 && user.id}</li>
      <li>{user && user?.name !=='' && user.name}</li>
      <li>{user && user?.age !== 0 && user.age}</li>
    </ul>
    }
  </div>
}
