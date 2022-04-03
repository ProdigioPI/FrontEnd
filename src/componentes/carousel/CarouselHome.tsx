import { ClassNames } from '@emotion/react'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselHome.css'


function CarouselHome(){

    var items = [
        { img: "http://localhost:3000/1.png" },
        { img: "http://localhost:3000/2.png" },
        { img: "http://localhost:3000/3.png" },
        { img: "http://localhost:3000/4.png" },
        { img: "http://localhost:3000/5.png" } 
    ]


    return (
        <Carousel isRTL={false} className="carrosel-style">
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                    </>
                ))
            }
        </Carousel>
    )
}

export default CarouselHome