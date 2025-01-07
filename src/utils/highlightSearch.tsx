import React from 'react';

export const HighlightedSearch = ({ searchValue, itemName }: { searchValue: string, itemName: string }) => {
  if (!searchValue) return <div>{itemName}</div>;

 
  const regex = new RegExp(`(${searchValue})`, 'gi');

  const parts = itemName.split(regex);

  return (
    <div>
      {parts.map((part, index) => 
        part.toLowerCase() === searchValue.toLowerCase() ? (
          <span key={index} style={{ fontWeight: 'bold' }}>{part}</span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  );
};


