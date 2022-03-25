import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia

import './Carrossel.css'

function Carrossel() {

    return (
        <div>
            <Carousel isRTL={false}> 
                <div></div>
                <div></div>
                <div></div>
            </Carousel>
        </div>
    )
}

export default Carrossel