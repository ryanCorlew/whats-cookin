import React from 'react';

import Modal from '../../../UI/Modal/Modal';

const EditItemForm = (props) => {
  return (
    <Modal show={props.show}>
      <h1>Edit Item Form</h1>
      <form onSubmit={(e) => props.submit(e, props.item, props.item.id)}>
        <input
          name="itemName"
          type="text"
          defaultValue={props.item.itemName}
          onChange={props.change}
        />
        <label>Unit</label>
        <select onChange={props.unitChange} defaultValue={props.item.unit}>
          <option value="">none</option>
          <option value="tsp">teaspoon</option>
          <option value="tbsp">tablespoon</option>
          <option value="fl oz">fluid ounce</option>
          <option value="cup">cup</option>
          <option value="lbs">pound</option>
          <option value="oz">ounce</option>
        </select>
        <label htmlFor="number">How many?</label>
        <input
          type="number"
          defaultValue={props.item.ammount}
          style={{ width: '2.5rem' }}
          onChange={props.ammountChange}
        />
        <button>Submit Change</button>
      </form>
    </Modal>
  );
};

export default EditItemForm;
