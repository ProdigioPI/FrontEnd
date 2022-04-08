import { ClassNames } from '@emotion/react'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselHome.css'


function CarouselHome(){

    var items = [
        { img: "https://cdn.discordapp.com/attachments/946051833481285672/962024602962370650/telasProdigio-03.png" },
        { img: "https://cdn.discordapp.com/attachments/946051833481285672/962024603448918096/telasProdigio-04.png" }
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