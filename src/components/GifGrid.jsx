import React from "react";
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

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
                            { ...image } // Esparcir el objeto imagen
                        />
                    )
                )}
            </div>
        </>
    )
}