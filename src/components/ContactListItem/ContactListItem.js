import { DeleteButton, StyledListItem } from './ContactListItem.styled';
import React from 'react';

export const ContactListItem = ({ name, number, onDelete }) => (
  <StyledListItem>
    {name}: {number}
    <DeleteButton onClick={onDelete}>Delete</DeleteButton>
  </StyledListItem>
);
