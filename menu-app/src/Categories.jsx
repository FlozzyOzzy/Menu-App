import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
        {categories.map ((category) => {
            return (
            <button 
            type='button' 
            className="category-btn" 
            key= {category} 
            onClick = {() => filterItems(category)} 
            >
                {category}
            </button>
            );
        })}
      
    </div>
  )
}

export default Categories;
