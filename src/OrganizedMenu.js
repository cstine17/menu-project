import React from 'react';

const OrganizedMenu = ({foods}) => {
    return (
        <div>
            {foods.map((menuItem)=>{
                const {id,title,image,description,price} = menuItem;
                return (
                    <article key={id}>
                        <img src={image} alt={title} />
                        <div>
                            <header>
                                <h4>{title}</h4>
                                <h4>{price}</h4>
                            </header>
                            <p>{description}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default OrganizedMenu;