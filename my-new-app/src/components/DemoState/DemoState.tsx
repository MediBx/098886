import React, { useState } from 'react';

function DemoState() {
    // let x = true;  // משתנה רגיל
    const [x, setX] = useState(true);  // <==========


    const noParamsHandler = () => {
        // x = !x;
        setX(!x)
        console.log(x);
    }


    const myClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // x = !x;
        setX(!x)
        console.log(x);
        console.log(event.target);
    }


    const doSomething = (e) => { myClickHandler(e) };

    return (
        <div>
            {x && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>}
            <button onClick={noParamsHandler}>Toggle Paragraph</button>
            <button onClick={doSomething}>Toggle Paragraph</button>
        </div>
    );
}

export default DemoState;