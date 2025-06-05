import React, { useState } from 'react'
import CarCArd from './CarCArd'
import './CarsList.scss'
import carImg from "../../assets/car.png";


const CarLIst = () => {
    const carData = [
        {
            name: 'Toyoto Carollo',
            fuel: 'Benzin',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Sedan ',
        },
        {
            name: ' Carollo',
            fuel: 'Dizel',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Bizness',
        },
        {
            name: 'Nissan',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Sedan',
        },
        {
            name: 'BMW',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Ecanom'
        },
        {
            name: 'Hundai',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Suv',
        },
        {
            name: 'Nissan',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Suv',
        },
        {
            name: 'Nissan',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Bizness',
        },
        {
            name: 'Nissan',
            fuel: 'Eco',
            image: carImg,
            price1: 45.00,
            price2: 35.00,
            price3: 25.00,
            category: 'Premium',
        }
    ];

    const categories = ['Hamısı', 'Ecanom', 'Sedan', 'Suv', 'Bizness', 'Premium'];

    const [activeCategory, setActiveCategory] = useState('Hamısı');

        
    const filtredCars = activeCategory === 'Hamısı' ? carData : carData.filter((car) => car.category === activeCategory)

    return (
        <div className="car-page">

            <div className="tabs">
                {categories.map((cat) => (
                    <button key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => setActiveCategory(cat)}>
                        {cat === 'Bizness' 
                        ? 'Bizness Class' 
                        : cat === 'Premium' 
                        ? 'Premium Class' 
                        : cat === 'Suv' 
                        ? 'Suv Model' 
                        : cat === 'Sedan' 
                        ? 'Sedan' 
                        : cat === 'Ecanom' 
                        ? 'Ecanom Class'
                        : 'Hamısı'
                    }
                    </button>
                ))}
            </div>



            <div className='car-list'>
                {
                    filtredCars.map((car, index) => (
                        <CarCArd key={index} car={car} />
                    ))
                }
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12"></div>
            </div>
        </div>
    )
}

export default CarLIst