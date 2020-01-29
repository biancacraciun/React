import React from 'react';
import Apartament from'./Apartament';
import '../Styles.scss';

function Accomodation () {
    const data = [ 
        { 
            title: "Transylvania Tree House - Self Check-in", 
            type: "Entire Chalet", 
            location: "Pesteana", 
            image: "https://a0.muscache.com/im/pictures/ae932816-7e60-4b13-863a-6b5713bc48d4.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 123, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Transylvania Long Cabin - Self Check-in", 
            type: "Entire Chalet", 
            location: "Pesteana", 
            image: "https://a0.muscache.com/im/pictures/55be5bd6-c5a4-4b8f-b7e4-3b751234c399.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 226, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Transylvania's Heaven Log Cabin - Self Check-in", 
            type: "Entire Chalet", 
            location: "Pesteana", 
            image: "https://a0.muscache.com/im/pictures/75a760ce-e188-412c-a7bf-4a49ae29a94a.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 106, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Experience Tiny wood house in the heart of nature", 
            type: "Entire House", 
            location: "Rametea", 
            image: "https://a0.muscache.com/im/pictures/3f5f5fcb-f8be-4846-8f01-1ac6c702b18f.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 247, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Drumul Poienii - Seasons Studio (magnificent views)", 
            type: "Entire apartament", 
            location: "Brasov", 
            image: "https://a0.muscache.com/im/pictures/bbbab63d-3ecb-4743-8958-72b9d0a738df.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 100, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Cozy Mountain retreat", 
            type: "Entire Chalet", 
            location: "Sinca Noua, Fagaras", 
            image: "https://a0.muscache.com/im/pictures/1445fe57-c5ab-43ba-85bc-84ad70e18a8b.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 225, 
            comfort: "Superhost" 
        }, 
        { 
            title: "GREEN COTTAGE", 
            type: "Entire Chalet", 
            location: "Rasnov", 
            image: "https://a0.muscache.com/im/pictures/745f25ab-37a3-45b1-bf88-1eb0cb6acc33.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 141, 
            comfort: "Superhost" 
        }, 
        { 
            title: "Carpathian Long Home 2, spectacular villa in Bran", 
            type: "Entire chalet", 
            location: "Predelut", 
            image: "https://a0.muscache.com/im/pictures/4170f9e6-a0ff-43c7-a359-aebb3f7f5012.jpg?aki_policy=xx_large", 
            stars: 5, 
            number: 83, 
            comfort: "Superhost" 
        } 
    ];
    return(
        <div className="homes">
            <h2> Transilvania Homes </h2>
            
            <div className="view">
                {data.map((object, index) => {
                    return <Apartament details={object} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Accomodation;