import React from 'react';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <StyledFilter
    type="text"
    placeholder="Search contacts by name"
    value={value}
    onChange={onChange}
  />
);
