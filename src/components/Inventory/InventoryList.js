import React from 'react';
// import store from 'store';

const InventoryList = (props) => {
  return props.list.map((item) => {
    return (
      <li key={item.id}>
        {item.ammount +
          ' ' +
          (item.unit ? item.unit + ' ' : '') +
          item.itemName}
        <button onClick={() => props.edit(item)} style={{ marginLeft: '10px' }}>
          Edit
        </button>
        <button onClick={() => props.delete(item.id)}>X</button>
      </li>
    );
  });
};

export default InventoryList;
