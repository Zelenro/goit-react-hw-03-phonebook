import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { StyledList } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <StyledList>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => onDelete(contact.id)}
      />
    ))}
  </StyledList>
);
