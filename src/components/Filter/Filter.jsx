import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../actions/filterActions';

import s from './Filter.module.css';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContacts(event.target.value));
    setFilter(event.target.value);
  };

  return (
    <>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

export default Filter;
