import React, {useState} from 'react';
import './Components/Card.css'
import './Components/Menu.css'

const OrganizedMenu = ({foods}) => {
    const newFoods=foods
    const [menuItem,setMenuItem] = useState(
        {
            id: '',
            title: '', 
            category: '', 
            price: 0, 
            image: '', 
            description: ''
        });
    const [menu,setMenu] = useState(newFoods);
    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 
        setMenuItem({...menuItem,[name]:value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            menuItem.title && 
            menuItem.category && 
            menuItem.price && 
            menuItem.image && 
            menuItem.description 
        ){
            const newMenuItem = {...menuItem,id: new Date().getTime().toString()}
            setMenu([...menu,newMenuItem]);
            setMenuItem({
                id: '',
                title: '', 
                category: '', 
                price: 0, 
                image: '', 
                description: ''
            });
        }
    };
    const removeMenuItem = (id) => {
        const newMenu = menu.filter((menuItem) => menuItem.id !== id);
        setMenu(newMenu);
    };

    return (
        <main>
            <div className="section-center">
                {menu.map((menuItem)=>{ 
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
                                    <h3>$ {price}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{description}</p>
                                </div>
                                <div className="btn">
                                    <button onClick={()=>{if (window.confirm('Are you sure you wish to delete this item?')) removeMenuItem(id)}}>
                                        <a>
                                            Remove Item
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>                            
            <article>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor="title">Title : </label>
                        <input 
                            type='text' 
                            id='title'
                            name='title'
                            value={menuItem.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Category : </label>
                        <input 
                            type='text'
                            id='category'
                            name='category'
                            value={menuItem.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Price : </label>
                        <input 
                            type='number' 
                            id='price'
                            name='price'
                            value={menuItem.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Image URL : </label>
                        <input 
                            type='url' 
                            id='image'
                            name='image'
                            value={menuItem.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Description : </label>
                        <input 
                            type='text' 
                            id='description'
                            name='description'
                            value={menuItem.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' onClick={handleSubmit}>add menu item</button>
                </form>
            </article>                       
        </main>
    );
};

export default OrganizedMenu;