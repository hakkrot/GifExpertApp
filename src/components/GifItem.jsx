import React from "react";
import {GifItemDelete} from "./GifItemDelete.jsx";

export const GifItem = ({ title, url, id, onDeleteGifItem}) => {

    return (
        <div className="card">
            <img src={url} alt={ title } />
            <p>{ title }</p>
            <GifItemDelete id={id} onDeleteGifItem={ onDeleteGifItem }/>
        </div>
    )
}