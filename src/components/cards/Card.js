import { shuffle } from 'lodash';
import React, { useContext } from 'react';
import { CardContext } from '../../App';

export default function Card({url , id}) {
    const {shuffleImages } = useContext(CardContext)
    return (
        <div onClick={()=> shuffleImages(id)} > 
            <img 
                className="flex justify-center w-[250px] h-[250px] p-2 rounded-lg border-[10px] m-6 hover:opacity-80"
                alt="illustration image"
                src={url}
            />
            
        </div>
    )
}
