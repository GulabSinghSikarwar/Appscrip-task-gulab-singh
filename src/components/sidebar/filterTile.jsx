'use client'
import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import './filterTile.css'
const FilterTile = ({ filterData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full"> {/* This ensures the tile takes the full width of its parent */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="font-medium text-lg font-quicksand">{filterData.title}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
        </button>
      </div>
      <div className={`p-5 border-b border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Toggle between 'block' and 'hidden' instead of using conditional rendering to maintain the space */}
       {!filterData.custom &&  <p className='font-quicksand'>{filterData.content}</p>
}
        {/* Custom items  */}
        {filterData.custom && <button
          onClick={() => toggleFilters()}
          className="flex font-quicksand items-center text-lg card-fade-text-color underline hover:text-gray-600 py-5 focus:outline-none"
        >
          Unselect all
        </button>}

        {
          filterData.custom && filterData.categories?.map((category ,index) => {
            return <div key={index}  className="flex items-center mb-1 py-2 ">
              <input type="checkbox" id="baby-kids" className="form-checkbox h-5 w-5 text-gray-600" />
              <label htmlFor="baby-kids" className="ml-2 text-sm font-medium text-gray-900">
                {
                  category
                }
              </label>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default FilterTile;
