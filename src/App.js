import React, {useState} from 'react';
import OrganizedMenu from './OrganizedMenu';
import foods from './data';

function App() {
  const [menuFoods, setMenuFoods] = useState(foods);
  return (
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>Shuga's Menu</h2>
        </div>
        <OrganizedMenu foods={menuFoods}/>
      </section>
    </main>
  )
}

export default App;
