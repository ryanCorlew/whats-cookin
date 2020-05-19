import React from 'react';

import Modal from '../../../UI/Modal/Modal';

const AddItemForm = (props) => {
  return (
    <Modal show={props.show}>
      <h1>What would you like to add?</h1>
      <form onSubmit={(e) => props.submit(e)}>
        <input
          name="itemName"
          type="text"
          placeholder="enter item"
          onChange={props.change}
        />
        <label>Unit</label>
        <select onChange={props.unitChange}>
          <option value="">none</option>
          <option value="tsp">teaspoon</option>
          <option value="tbsp">tablespoon</option>
          <option value="fl oz">fluid ounce</option>
          <option value="cup">cup</option>
          <option value="lbs">pound</option>
          <option value="oz">ounce</option>
        </select>
        <label>How many?</label>
        <input
          type="number"
          defaultValue="0"
          style={{ width: '2.5rem' }}
          onChange={props.ammountChange}
        />
        <button>Add!</button>
      </form>
    </Modal>
  );
};

export default AddItemForm;
