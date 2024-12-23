import { useEffect, useState } from 'react';
import './Gallery.css'
import { Person } from '../../types';
import PersonCard from '../PersonCard/PersonCard';


const Gallery = () => {
    const [peopleArr, setPeopleArr] = useState<Person[]>();

    useEffect(() => {
        const randomPeopleUrl = "https://randomuser.me/api/?results=50";
        fetch(randomPeopleUrl)
            .then((response) => response.json())
            .then((dataAsObj) => {
                console.log(dataAsObj);
                setPeopleArr(dataAsObj.results);
            })
            .catch((error) => {
                console.log("error feching and setting people arr", error)
            })

    }, []);


    return (
        <div className='gallery'>

            {/* {peopleArr?.map(() => {
                return <div>hello</div>
            })} */}

            {peopleArr?.map((curr) => {
                return <PersonCard key={curr.login.uuid} fname={curr.name.first} lname={curr.name.last} />
                // <div key={curr.login.uuid}>{curr.name.first}</div>
            })}

        </div>
    )
}

export default Gallery
