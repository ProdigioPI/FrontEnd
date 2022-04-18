import { ClassNames } from '@emotion/react'
import React from 'react'

import { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import './CarouselHome.css'


function CarouselHome(){

    var items = [
        { img: "https://cdn.discordapp.com/attachments/946058214108180481/962061499671670864/1547-03.jpg" },
        { img: "https://cdn.discordapp.com/attachments/946058214108180481/962061500086878249/1547-04.jpg" }
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