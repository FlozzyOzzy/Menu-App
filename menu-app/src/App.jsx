import React, { useState } from 'react'
import Title from './Title.jsx';
import Menu from './Menu.jsx';
import menu from './Data.jsx';
import Categories from './Categories.jsx';

const allCategories = ['all' ,...new Set (menu.map((item) => item.category))]

const App = () => {

  const [menuItems, setMenuItems]= useState (menu);
  const [categories, setCategories] = useState (allCategories);
  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems (menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems (newItems);
  }
  
  return (
    <div>
      <section className= "menu">
        <Title text= "Our Menu" />
        <Categories categories={categories} 
        filterItems = {filterItems} />
        <Menu items= {menuItems} />
      </section>
    </div>
  )
}

export default App
