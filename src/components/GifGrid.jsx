import React, {useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs.js";

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    getGifs(category);

    useEffect(() => {

    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <h5>{ counter }</h5>
            <button></button>
        </>
    )
}