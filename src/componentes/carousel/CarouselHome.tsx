import { ClassNames } from '@emotion/react'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselHome.css'


function CarouselHome(){

    var items = [
        { img: "https://i.imgur.com/SWJKIn8.png" },
        { img: "https://i.imgur.com/CrAxft0.png" },
        { img: "https://i.imgur.com/NbFmyGR.png" },
        { img: "https://i.imgur.com/ZoQq3BG.png" },
        { img: "https://i.imgur.com/vhyS8RQ.png" } 
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