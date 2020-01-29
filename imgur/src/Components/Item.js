import React from 'react';
import Items from './Items';

function Item () {
    const data = [
        {
            img: "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg",
            name: "Noodles",
            price: "$15",
            about: ["Low in calories", "They provide important micro-nutrients", "Indomie Noodles contain zinc", "It provides iron", "They are easily digestible", "Rich in crucial B vitamins", "It is rich in carbohydrates"],
            more: "http://dealersarena.com/7-nutritional-benefits-of-indomie-noodles-you-didnt-know/"
        }, 
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmU2kyq-ToRPxBwDXoLv-NhRUjuW-eAUrSFNrj33NvU5XtFMbx&s",
            name: "Mangoes",
            price: "$10",
            about: ["High in Antioxidants", "May boost immunity", "May support heart health", "May improve digestive health", "May support eye health", "May improve hair and skin health", "May help lower your risk of certain cancers"],
            more: "https://www.healthline.com/nutrition/mango#uses"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBbWT8Fsv9GzY7IhAclPNKa11wP0GEMrr3J0ls8NQqcdyZFxV&s",
            name: "Oranges",
            price: "$20",
            about: ["May lower ischemic stroke risk for women", "Lowering blood pressure", "Combat the formation of free radicals known to cause cancer", "Lower risk of death from ischemic heart disease", "May have improved blood sugar, lipids and insulin levels", "Formation of collagen, the support system of your skin"],
            more: "https://www.medicalnewstoday.com/articles/272782.php#risks"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIxQLC9tb-Gqe1KpjLHlLp1oYdECHT0ZGvyDBnWd1O2kU_1sl8g&s",
            name: "Passion Fruit",
            price: "$14",
            about: ["Provides key nutrients", "Rich in antioxidants", "Good source of fiber", "Low glycemic index", " Improve insulin sensitivity", "Boosts the immune system", "Supports heart health", "Reduce anxiety"],
            more: "https://www.medicalnewstoday.com/articles/324383.php#how-to-prepare"
        }
    ]

    return (
        <div className="item">
            {
                data.map((foodies, index) => {
                    return <Items foodData={foodies} key={index} />
                })
            }
        </div>
    )
}

export default Item;