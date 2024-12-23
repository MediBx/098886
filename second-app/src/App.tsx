import React, { useEffect, useState } from 'react';
import './App.css';
import { Person } from './types';
import PersonCard from './components/PersonCard/PersonCard';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';

function App() {

  const [peopleArr, setPeopleArr] = useState<Person[]>();

  // const [peopleArr, setPeopleArr] = useState([
  //   {
  //     name: {
  //       first: "john",
  //       last: "doe"
  //     },
  //     email: "jd@gmail",
  //     picture: {
  //       large: "https://www.hfhfh.com"
  //     }
  //   }
  // ]);

  // let peopleArr: Person[] = [
  //   {
  //     name: {
  //       first: "john",
  //       last: "doe"
  //     },
  //     email: "jd@gmail",
  //     picture: {
  //       large: "https://www.hfhfh.com"
  //     }
  //   }
  // ];

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(
        (data) => {
          //  peopleArr = data.results;
          setPeopleArr(data.results);
          console.log(peopleArr)
        })
  }, []);

  return (
    <div className="App">
      {/* <div> {peopleArr && peopleArr[0] && peopleArr[0].name && peopleArr[0].name.first}</div> */}

      {/* <PersonCard fname={'John'} lname={'Doe'} /> */}

      <ProductsGallery />

    </div>
  );
}

export default App;
