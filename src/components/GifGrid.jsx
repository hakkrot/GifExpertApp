import React, {useCallback, useEffect, useState} from "react";
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

    const { images: fetchedImages, isLoading } = useFetchGifs(category) //renombrando la propiedad images a fetchedImages
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(fetchedImages);
    }, [fetchedImages]);

    const onDeleteGifItem = useCallback((key) => {
        setImages(prevImages => prevImages.filter(item => item.id !== key));
    },[])

    return (
        <>
            <h3>{ category }</h3>
            {/*{*/}
            {/*    isLoading*/}
            {/*    ? ( <h2>Cargando...</h2> )*/}
            {/*    : null // 'null' no se renderiza en React*/}
            {/*}*/}

            {
                isLoading && ( <h2>Cargando...</h2> ) // es un 'and' logico
            }

            <div className="card-grid">
                { images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            onDeleteGifItem={onDeleteGifItem}
                            { ...image } // Esparcir el objeto imagen
                        />
                    )
                )}
            </div>
        </>
    )
}