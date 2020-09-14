import React, { useState } from 'react';
import AddCategories from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Black Pink']);

    return (
        <>
            <h2>Buscador de gifs para Abril </h2>

            <AddCategories
                setCategories={ setCategories }
            />

            <hr />

            <ol>
                {
                    categories.map(category => 
                    
                        <GifGrid
                            category={ category }
                            key={ category }
                        />
                    )
                }
            </ol>
        </>
    );
}