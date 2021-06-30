// DO NOT DELETE
import * as React from "react";
import {useEffect, useState} from "react";
import {BreedsSelect} from "./BreedsSelect";
import {DogImage} from "./DogImage";

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);

     useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => Object.keys(data.message))
            .then(list => setBreeds(list));
        }, [])

    const [selectedBreed, setSelectedBreed] = useState("");

    const [dogImageList, setDogImageList] = useState([]);

    function getDogImage() {
        if(selectedBreed === "") {
            return;
        }
        const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`;
        fetch(url)
            .then(res => res.json())
            .then(data => data.message)
            .then(list => list.map(img => <DogImage key={img} url={img}/>))
            .then(list => setDogImageList(list))
            .catch(e => console.error(e));
    }


    return (
        <div className="dogListContainer">
            <BreedsSelect breeds={breeds} selectedBread={selectedBreed} setBreed={setSelectedBreed} getDogImage={getDogImage}/>
            <div className="dogImageList">
                {dogImageList}
            </div>
        </div>
    )
}