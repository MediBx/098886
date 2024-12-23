import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Athlete, Character, Dragon, Employee, Employee2, NinjaWarrior, Person, Student, SwordsWarrior, Warrior } from './Person';
import { model } from 'mongoose';

function App() {
  // let studentsArr: Student[];
  // let peopleArr: Person[];


  //let st1 = new Student();
  //let p1 = new Person();
  let e1 = new Employee();
  let e2 = new Employee({ first: "john", last: "doe" });
  let e3 = new Employee({ first: "john", last: "doe" },
    "jd@gmail.com");


  let emp1 = new Employee2();
  let emp2 = new Employee2("john");
  let emp3 = new Employee2("john", "jd@gmail.com");
  let emp4 = new Employee2("john", "jd@gmail.com", "http://www.mypics.com");

  // let x: Employee | Dragon | NinjaWarrior | SwordsWarrior = new Employee();
  // x = new Dragon();
  // x = new NinjaWarrior();
  // x = new SwordsWarrior();


  // let x = new Employee();
  // x = new Dragon();
  // x = new NinjaWarrior();
  // x = new SwordsWarrior();

  // let x: Employee | Character = new Employee();
  // x = new Dragon();
  // x = new NinjaWarrior();
  // x = new SwordsWarrior();
  // x.animate();


  //let charactersArr = [new Dragon(), new NinjaWarrior(), new SwordsWarrior(), new Employee()];
  // for (const curr of charactersArr) {
  //   curr.animate()
  // }

  let charactersArr: Character[] =
    [new Dragon(), new NinjaWarrior(), new SwordsWarrior()]
  for (const curr of charactersArr) {
    curr.animate();
    // if (curr instanceof Warrior) {
    //   curr.goToTrain();
    // }'
    if ("goToTrain" in curr) {
      console.log("YES");
      (curr as Warrior).goToTrain();
    }
  }


  let carInfo = {
    model: "Cleo",
    manufacturer: "Renault",
    year: 2022
  };


  function takeCar(c: {
    model: string,
    manufacturer: string,
    year: number
  }) {
    console.log("inside takeCar");
    let myCar = { ...c };
    myCar.year = 2023;
    console.log("did year channge? ", myCar, c);

  };
  takeCar(carInfo);


  let { model: newModel, year: newYear } = carInfo;
  console.log("destructuring: ", newModel, newYear);

  //--------------------------------------

  let johnny = {
    name: {
      saluatation: {
        lang: "Hebrew",
        title: "Mr"
      },
      first: "johnny",
      last: "depp"
    },
    email: "jd@gmail.com",
    picture: {
      large: "http://www.mypics.com"
    }
  }

  // Destructuring "name"
  let { name: { first } } = johnny;

  // Another way to do "half distruct" and get the name
  // let { first } = johnny.name;
  let { name: { saluatation: { title } } } = johnny;
  console.log("title is", title);



  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((dataFromApi) => {
        return dataFromApi.json();
      })
      .then((dataAsObj) => {
        console.log(dataAsObj);
        let studentsArr: Student[];
        studentsArr = dataAsObj.results;
        for (let i = 0; i < studentsArr.length; i++) {
          console.log(studentsArr[i].email);

          console.log(Employee.nameOfCompany, Employee.showInfo());

        }
      })
      .catch((err) => {
        console.log('error while trying to fetch people from api');
      });
  }, []);




  return (
    <div className="App">
      <p>This is my story</p>
      <ul>
        <li>Tel Aviv</li>
        <li>NYC</li>
        <li>Paris</li>
      </ul>
    </div>
  );
}

export default App;
