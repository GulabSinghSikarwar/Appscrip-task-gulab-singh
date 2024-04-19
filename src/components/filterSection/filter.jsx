'use client';
import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import FilterDropDown from './filterDropDown';

const FilterSection = ({updateShowSidebar, showSidebar}) => {
  const [selected, setSelected] = useState('Recommended');
  const [showFilters, setShowFilters] =useState(showSidebar)

  const selectOption = (option) => {
    setSelected(option);
    setIsFilterVisible(false);
  };
  const toggleFilters=()=>{
    setShowFilters(!showFilters);
    updateShowSidebar();
  }

  return (
    <div className='mb-6'>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
      <div className="flex justify-between items-center py-4 px-8">
        {/* Only visible on lg screens */}
        <div className="hidden lg:flex space-x-4 items-center flex-1">
          <span className="text-lg font-semibold font-quicksand"> ITEMS</span>
          <button 
            onClick={() => toggleFilters()}
            className="flex font-quicksand items-center text-lg card-fade-text-color underline hover:text-gray-600 focus:outline-none"
          >
            <MdOutlineArrowBackIos className='mr-3'/> { (!showFilters) ?'SHOW FILTER':'HIDE FILTER'}
          </button>
        </div>

        {/* Flex container for small screens */}
        <div className="flex lg:hidden items-center w-full">
          {/* Left-aligned FILTER button */}
          <div className="flex-1">
            <button 
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              className="text-lg card-fade-text-color underline hover:text-gray-600 focus:outline-none"
            >
              FILTER
            </button>
          </div>

          {/* Centered vertical separator */}
          <div className="flex-1 flex justify-center">
            <div className="border-l border-gray-300 h-6 self-center"></div>
          </div>

          {/* Right-aligned FilterDropDown */}
          <div className="flex-1 flex justify-end">
            <FilterDropDown selected={selected} onSelect={selectOption} />
          </div>
        </div>

        {/* Only visible on lg screens */}
        <div className="hidden lg:block lg:flex-1 lg:text-right">
          <FilterDropDown selected={selected} onSelect={selectOption} />
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
    </div>
  );
};

export default FilterSection;
