import { useState } from 'react';
import data from './../data.json'

export default function MyProjects() {

    const [index, setIndex] = useState(2);

    let plants = data;
    let plant = plants[index];

    function handleClick() {
        if (index < data.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <p>Plant Name: {plant.plantName}</p>
            <p>Plant Type: {plant.plantType}</p>
            <p>Plant Category: {plant.plantCategory}</p>
            <p>Water Duration: {plant.waterDuration}</p>
        </div>
    );
}