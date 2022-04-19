import { ClassNames } from '@emotion/react'
import React from 'react'

import { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import './CarouselHome.css'


function CarouselHome(){

    var items = [
        { img: "https://cdn.discordapp.com/attachments/945709660856520787/965796062461829160/telasProdigio-03.jpg" },
        { img: "https://cdn.discordapp.com/attachments/945709660856520787/965796985225482250/telasProdigio-07.jpg" },
        { img: "https://cdn.discordapp.com/attachments/945709660856520787/965796984889950268/telasProdigio-04.jpg" }
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