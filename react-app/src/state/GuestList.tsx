import React, {FormEvent, useState} from "react";

enum RoomType {
    DoubleBed = 'Double Bed',
    SingleBed = 'Single Bed',
    FamilyPack = 'FamilyPack',
    NO_SELECTION = 'NO_SELECTION'
}

interface Guest {
    id: number;
    name: string;
    age: number;
    timeOfBooking: string;
    hotelName: string;
    roomNo: number;
    roomType: string | undefined
}

export const Guests: React.FunctionComponent = () => {
    const [guest, setGuest] = useState<Guest>({
        age: 0,
        hotelName: "",
        id: 0,
        name: "",
        roomNo: 0,
        roomType: RoomType.NO_SELECTION,
        timeOfBooking: new Date().getUTCDate().toString()
    })

    type K = keyof Guest
    const setUpGuest = <k extends keyof Guest>(prevState: Guest, key: k, value: any) => {
        const guestObj: Guest = ({...prevState, [key]: value, timeOfBooking: new Date().getUTCDate().toString()})
        return guestObj
    }

    const setGuestState = (key: K, value: any) => {
        const guestObj = setUpGuest(guest, key, value)
        console.log(guestObj)
        setGuest(guestObj)
    }

    const [guests, setGuests] = useState<Guest[]>([])

    const onAddClick = (event: FormEvent) => {
        console.log('adding guest')
        event.preventDefault()
        guest.id = guests.length + 1
        setGuests(prevState => [...prevState, guest])
        console.log(guests)
        console.log(guest)
    }

    return <div className='container items-center block shadow-lg mx-auto bg-gray-50 lg:w-3/6 p-2 space-x-4'>
        <p className='text-3xl text-center'>Add Guest to state</p>
        <form className='container mx-auto center rounded-lg border-2 m-1 border-zinc-200 p-3 grid gap-3 form'
              onSubmit={onAddClick}>
            <div className='inline-flex items-center bg-white rounded-full ring-violet-200'>
                <label>
                <span className=' rounded-full z-40 ml-2 pl-2 pr-4 p-2 bg-violet-200 text-white-200'>
                     Name
                </span>
                </label>
                {/*<hr/>*/}
                <input value={guest.name} onError={() => console.log('input is empty')} onChange={(e) => {
                    setGuestState('name', e.target.value)
                }} type='text'
                       className=' p-1 m-1 z-30 ml-2 w-4/6 border-hidden focus:ring-0 border-transparent focus:border-transparent outline-none hover:none borderless placeholder-slate-400'
                       placeholder='John Doe'/>
                {/*</label>*/}
            </div>
            <div className='inline-flex items-center bg-white rounded-full ring-violet-200'>
                <label>
                    <span className=' rounded-full ml-2 pl-2 pr-4 p-2 bg-violet-200 text-white-200'>
                        Age
                    </span>
                </label>
                <input value={guest.age} onChange={(e) => setGuestState('age',parseInt(e.target.value))} type='number' min='0' max='100'
                       className=' p-1 m-1 ml-2 w-3/6 focus:ring-0 border-transparent focus:border-transparent outline-none appearance:none hover:none borderless placeholder-slate-400'
                       placeholder='Enter your Age'
                       onError={() => console.log('empty')}/>
            </div>
            <div className='inline-flex z-0.24 items-center bg-white rounded-full ring-violet-200'>
                <label>
                    <span className=' rounded-full ml-2 p-auto pr-4 text-center p-2 bg-violet-200 text-white-200'>
                        Hotel Name
                    </span>
                </label>
                <input value={guest.hotelName} onChange={(e) => setGuestState('hotelName',e.target.value)} type='text'
                       className=' static p-1 m-1 ml-2 border-transparent  focus:ring-0 appearance-none focus:border-transparent hover:outline-none focus:outline-none borderless w-3/6 ring-black-500 placeholder-slate-400'
                       placeholder='Enter your HotelName'/>
            </div>
            <div className='inline-flex z-0.24 items-center bg-white rounded-full ring-violet-200'>
                <label>
                    <span className=' rounded-full ml-2 p-auto pr-4 text-center p-2 bg-violet-200 text-white-200'>
                        Room No
                    </span>
                </label>
                <input value={guest.roomNo} onChange={(e) => setGuestState('roomNo', parseInt(e.target.value))}
                       type='number' min='1' max='1000'
                       className='  static p-1 m-1 ml-2 border-transparent  focus:ring-0 appearance-none focus:border-transparent hover:outline-none focus:outline-none borderless w-3/6 ring-black-500 placeholder-slate-400'
                       placeholder='Enter your Room No'/>
            </div>
            <div className='inline-flex z-0.24 p-1 items-center bg-white rounded-full ring-violet-200'>
                <label>
                    <span className=' rounded-full ml-2 p-auto pr-4 text-center p-2 bg-violet-200 text-white-200'>
                        Room Type
                    </span>
                </label>
                <input className='my-2 ml-2' type='radio' name='roomType' value='1'
                       onChange={() => setGuestState('roomType', RoomType.SingleBed)} radioGroup='roomType'/> Single Bed
                <input className='p-1 ml-3 m-1' type='radio' name='roomType' value='0'
                       onChange={() => setGuestState('roomType', RoomType.DoubleBed)} radioGroup={'roomType'}/> Double
                Bed
                <input className='ml-2' type='radio' name='roomType' value='2'
                       onChange={() => setGuestState('roomType', RoomType.FamilyPack)} radioGroup={'roomType'}/> Family
                Pack
            </div>
            <button type='submit' className='bg-red-200 rounded ring-2 bg-violet-200 ring-violet-400'
                    value='Submit'>Submit
            </button>
        </form>
        <table className='table w-full p-6 divide-y divide-slate-200 bordered'>
            <thead className='table-header-group p-3'>
            <tr className='table-row'>
                <th className='table-cell mr-3 text-left'>Id</th>
                <th className='table-cell mr-3 text-left'>Name</th>
                <th className='table-cell mr-3 text-left'>Age</th>
                <th className='table-cell mr-3 text-left'>RoomType</th>
                <th className='table-cell mr-3 text-left'>Room No</th>
                <th className='table-cell mr-3 text-left'>Time of Booking</th>
            </tr>
            </thead>
            <tbody className='table-row-group p-3'>
            {guests.map((guest, index) => {
                return <tr className='odd:bg-white even:bg-slate-100 table-row' key={index}>
                    <td className='table-cell'>{guest.id}</td>
                    <td className='table-cell'>{guest.name}</td>
                    <td className='table-cell'>{guest.age}</td>
                    <td className='table-cell'>{guest.roomType}</td>
                    <td className='table-cell'>{guest.roomNo}</td>
                    <td className='table-cell'>{guest.timeOfBooking}</td>
                </tr>
            })}
            </tbody>
        </table>

    </div>
}

export const GuestList: React.FunctionComponent = () => {
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])
    const [guest, findGuest] = useState<string>('')
    const onClick = () => {
        setName('')
        setGuests([...guests, name])
    }
    const onSearchClick = () => {
        const guestName = guests?.find((g) => g === guest)
        if (guestName !== undefined) {
            console.log('guest found' + guest)
        } else {
            console.log('guest not found')
        }
    }
    return <div className='container mx-auto bg-gray-100 p-4 space-x-4'>
        <h3 className='text-2xl text-black-100 p-3'>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <p className='font-bold space-x-4 space-y-4'>Word to Add:<input value={name} onChange={(event) => {
            setName(event.target.value)
        }} className='p-2 m-2 ring-2 ring-black-500' title='Input a word to add' placeholder='Enter a word to add'/>
            <button onClick={onClick}
                    className='bg-green-500 p-2 ring-2 ring-blue-500/[.55] button mx-6 hover:bg-white-700 rounded'>Add
                item
            </button>
        </p>
        <p>Search Guest</p>
        <input className='p-2 m-2 ring-2 ring-black-500' type={guest} onChange={(e) => findGuest(e.target.value)}
               placeholder='Enter a name to find'/>
        <button onClick={onSearchClick}>Search guest</button>
    </div>
};
