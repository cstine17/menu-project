import React from 'react';
import './Components/Card.css'
import './Components/Menu.css'

const OrganizedMenu = ({foods}) => {
    return (
        <div className="section-center">
            {foods.map((menuItem)=>{ 
                const {id,title,image,description,price} = menuItem;
                return (
                <div className="card-container">
                    <div className="image-container">
                        <img src={image} alt={title} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h3>{title}</h3>                    
                        </div>
                        <div>
                            <h3>${price}</h3>
                        </div>
                        <div className="card-body">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    );
};

export default OrganizedMenu;