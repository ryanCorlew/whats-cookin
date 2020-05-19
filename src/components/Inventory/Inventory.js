import React, { Component, Fragment } from 'react';
import uuid from 'react-uuid';
import store from 'store';

import classes from './Inventory.module.css';
import InventoryList from './InventoryList';
import AddItemForm from '../forms/AddItemForm/AddItemForm';
import EditItemForm from '../forms/EditItemForm/EditItemform';

class inventory extends Component {
  state = {
    itemList: [],
    newItem: '',
    newItemAmmount: 1,
    newItemUnit: '',
    showModal: false,
    isEditing: false,
  };

  componentDidMount() {
    const items = store.get('items');
    this.setState({ itemList: items || [] });
  }

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
    this.setState({ isEditing: false });
  };

  newItemChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  newItemAmmountChange = (e) => {
    this.setState({ newItemAmmount: parseInt(e.target.value) });
  };

  newItemUnitChange = (e) => {
    this.setState({ newItemUnit: e.target.value });
  };

  addItemHandler = (e) => {
    if (!this.state.newItem) {
      e.preventDefault();
      alert('Please add an item');
      return;
    }

    const updatedItems = [...this.state.itemList];

    updatedItems.push({
      itemName: this.state.newItem,
      ammount: this.state.newItemAmmount,
      unit: this.state.newItemUnit ? this.state.newItemUnit : null,
      id: uuid(),
    });

    this.setState({
      itemList: updatedItems,
      newItem: null,
      newItemAmmount: 1,
      newItemUnit: null,
    });

    store.set('items', updatedItems);

    this.hideModalHandler();
  };

  removeItemHandler = (id) => {
    const itemsListCopy = [...this.state.itemList];

    const updatedItems = itemsListCopy.filter((item) => {
      return item.id !== id;
    });

    this.setState({ itemList: updatedItems });
    store.set('items', updatedItems);
  };

  editClickedHandler = (item) => {
    this.setState({
      isEditing: true,
      currentItem: item,
      newItem: item.itemName,
      newItemAmmount: item.ammount,
      newItemUnit: item.unit,
    });
  };

  editSubmitHandler = (e, item, id) => {
    e.preventDefault();

    const editedItems = [...this.state.itemList];

    let editedItem = {
      itemName: this.state.newItem,
      ammount: this.state.newItemAmmount,
      unit: this.state.newItemUnit ? this.state.newItemUnit : null,
      id: id,
    };

    editedItems.map((item) => {
      if (item.id === id) {
        item.itemName = editedItem.itemName;
        item.ammount = editedItem.ammount;
        item.unit = editedItem.unit;
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      itemList: editedItems,
      isEditing: false,
      newItem: null,
      newItemAmmount: 1,
      newItemUnit: null,
    });

    store.set('items', editedItems);
  };

  render() {
    let form = null;
    let editForm = null;

    this.state.showModal
      ? (form = (
          <AddItemForm
            show={this.hideModalHandler}
            submit={this.addItemHandler}
            change={this.newItemChange}
            unitChange={this.newItemUnitChange}
            ammountChange={this.newItemAmmountChange}
          />
        ))
      : (form = null);

    this.state.isEditing
      ? (editForm = (
          <EditItemForm
            item={this.state.currentItem}
            show={this.hideModalHandler}
            submit={this.editSubmitHandler}
            change={this.newItemChange}
            unitChange={this.newItemUnitChange}
            ammountChange={this.newItemAmmountChange}
          />
        ))
      : (editForm = null);

    return (
      <Fragment>
        <section className={classes.Inventory}>
          <ul>
            <InventoryList
              list={this.state.itemList}
              delete={this.removeItemHandler}
              edit={this.editClickedHandler}
            />
          </ul>
          <button onClick={this.showModalHandler}>Add Items</button>
        </section>
        {form}
        {editForm}
      </Fragment>
    );
  }
}

export default inventory;
