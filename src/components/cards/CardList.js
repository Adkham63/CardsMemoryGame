import React, { useContext } from 'react'
import { CardContext } from '../../App'
import Card from './Card'

export default function CardList() {
    const {images} = useContext(CardContext)

    return (
        <div className="flex flex-row flex-wrap justify-evenly" >
            
            {
                images.map(img => <Card key={img} id={img.id} url={img.url} />)
            }

        </div>
    )
}
