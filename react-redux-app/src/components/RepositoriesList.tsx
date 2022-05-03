import React, {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepositoriesList:React.FunctionComponent = () => {
    const [term,setTerm] =useState('')
    const {search_repositories} = useActions()
    const {data,error,loading} = useTypedSelector((state) => state.repositories)
    // const state = useSelector((state:any) => state.repositories)
    console.log(data)
    const submitEvent = (e:React.FormEvent<HTMLFormElement>) => {
        console.log('searching for term: '+term)
        e.preventDefault()
        // dispatch(actionCreators.search_repositories(term)).then(r => console.log('testing'))
        search_repositories(term)
    }
    return <div className='items-center'>
        <h3>Hello Repositories List</h3>
        <form onSubmit={submitEvent}>
            <input className='rounded p-1 m-2 border-2 ring-2 border-amber-300' value={term} onChange={(e) => setTerm(e.target.value)} type='text' placeholder='Search item'/>
            <button className='button bg-blue-300 p-1'>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h4>{loading}</h4>}
        {!error && !loading && data}
        <ul className='list-item'>
            {data.map((value,index) => {
                return <li key={index} className='list-item m-2'>{value}</li>
            })}
        </ul>
    </div>
}
export default RepositoriesList
