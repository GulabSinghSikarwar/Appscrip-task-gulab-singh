'use client'
import React, { useState } from 'react';
import FilterTile from './filterTile';
import { filters } from '@/helpers/constants';
const SidebarFilters = () => {
  return (
    <div className="divide-y divide-gray-200">
      <div className="bg-white p-4 shadow rounded">
        <div className="flex items-center mb-4">
          <input type="checkbox" id="customizable" className="form-checkbox h-5 w-5 text-gray-600" />
          <label htmlFor="customizable" className="ml-2 text-sm font-medium text-gray-900">
            CUSTOMIZABLE
          </label>
        </div>
      </div>
      {filters.map((filter, index) => (
        <FilterTile
          key={index}
          filterData={filter}
        />
      ))}
    </div>
  );
};

export default SidebarFilters;


