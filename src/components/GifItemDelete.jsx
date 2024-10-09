import React from "react";

export const GifItemDelete = ({ id, onDeleteGifItem}) => {

    const onDelete = () => {
        onDeleteGifItem(id)
    }

    return (
        <div>
            <button onClick={ onDelete }>Delete</button>
        </div>
    )
}

