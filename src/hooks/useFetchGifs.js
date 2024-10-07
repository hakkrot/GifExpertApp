import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false); // a partir react 18 no dispara 2 renderizaciones (solo 1)
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        // images: images,
        images,
        isLoading
    }
}