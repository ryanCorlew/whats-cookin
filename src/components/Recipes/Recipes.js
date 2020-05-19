import React, { Component, Fragment } from "react";
// import uuid from 'react-uuid';
import store from "store";

import classes from "./Recipes.module.css";
import RecipeList from "./RecipeList";
import AddItemForm from "../forms/AddItemForm/AddItemForm";
import EditItemForm from "../forms/EditItemForm/EditItemform";

const testArr = [
  { itemName: "apple", ammount: 5, unit: "" },
  { itemName: "pie crust", ammount: 1, unit: "" },
];

class Recipes extends Component {
  state = {
    recipeList: [
      {
        recipe: "apple pie",
        ingredients: [
          { itemName: "apple", ammount: 5, unit: "" },
          { itemName: "pie crust", ammount: 1, unit: "" },
        ],
        readyToBeCooked: false,
        id: 0,
      },
      {
        recipe: "hamburger helper",
        ingredients: [
          { itemName: "ground beef", ammount: 1, unit: "pound" },
          { itemName: "hamburger helper box", ammount: 1, unit: "" },
        ],
        readyToBeCooked: false,
        id: 1,
      },
    ],
    newItem: "",
    newItemAmmount: 1,
    newItemUnit: "",
    showModal: false,
    isEditing: false,
  };

  componentDidMount() {
    const inventory = store.get("items");
    let recipeListCopy = [...this.state.recipeList];

    recipeListCopy.map((recipe) => {
      if (this.checkInventory(recipe.ingredients)) {
        console.log("we have what we need to make " + recipe.recipe + "!");
        return recipe;
      } else {
        console.log("not enough ingredients dummy");
        return recipe;
      }
    });
  }

  checkInventory([item1, item2]) {
    const inventory = store.get("items");
    console.log("function here" + item1, item2);

    if (
      inventory.some(
        (item) =>
          item.itemName === item1.itemName &&
          item.ammount >= item1.ammount &&
          item.itemName === item2.itemName &&
          item.ammount >= item2.ammount
      )
    ) {
      console.log("we have enough ");
      return true;
    } else if (
      inventory.some(
        (item) =>
          (item.itemName === item1.itemName && item.ammount < item1.ammount) ||
          (item.itemName === item2.itemName && item.ammount < item2.ammount)
      )
    ) {
      console.log("we have some, but not enough");
      return false;
    } else {
      console.log("we don't have any ");
      return false;
    }
  }

  render() {
    this.checkInventory(testArr);

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
        <section className={classes.Recipes}>
          <ul>
            <RecipeList
              list={this.state.recipeList}
              // delete={this.removeItemHandler}
              // edit={this.editClickedHandler}
            />
          </ul>
          <button onClick={this.showModalHandler}>New Recipe</button>
        </section>
        {form}
        {editForm}
      </Fragment>
    );
  }
}

export default Recipes;

// showModalHandler = () => {
//   this.setState({ showModal: true });
// };

// hideModalHandler = () => {
//   this.setState({ showModal: false });
//   this.setState({ isEditing: false });
// };

// newItemChange = (e) => {
//   this.setState({ newItem: e.target.value });
// };

// newItemAmmountChange = (e) => {
//   this.setState({ newItemAmmount: parseInt(e.target.value) });
// };

// newItemUnitChange = (e) => {
//   this.setState({ newItemUnit: e.target.value });
// };

// addItemHandler = (e) => {
//   if (!this.state.newItem) {
//     e.preventDefault();
//     alert('Please add an item');
//     return;
//   }

//   const updatedItems = [...this.state.recipeList];

//   updatedItems.push({
//     itemName: this.state.newItem,
//     ammount: this.state.newItemAmmount,
//     unit: this.state.newItemUnit ? this.state.newItemUnit : null,
//     id: uuid(),
//   });

//   this.setState({ recipeList: updatedItems });

//   this.hideModalHandler();
//   this.setState({ newItem: null, newItemAmmount: 1, newItemUnit: null });
// };

// removeItemHandler = (id) => {
//   const itemsListCopy = [...this.state.recipeList];

//   const updatedItems = itemsListCopy.filter((item) => {
//     return item.id !== id;
//   });

//   this.setState({ recipeList: updatedItems });
// };

// editClickedHandler = (item) => {
//   this.setState({
//     isEditing: true,
//     currentItem: item,
//     newItem: item.itemName,
//     newItemAmmount: item.ammount,
//     newItemUnit: item.unit,
//   });
// };

// editSubmitHandler = (e, item, id) => {
//   e.preventDefault();

//   const editedItems = [...this.state.recipeList];

//   let editedItem = {
//     itemName: this.state.newItem,
//     ammount: this.state.newItemAmmount,
//     unit: this.state.newItemUnit ? this.state.newItemUnit : null,
//     id: id,
//   };

//   editedItems.map((item) => {
//     if (item.id === id) {
//       item.itemName = editedItem.itemName;
//       item.ammount = editedItem.ammount;
//       item.unit = editedItem.unit;
//       return item;
//     } else {
//       return item;
//     }
//   });

//   this.setState({
//     recipeList: editedItems,
//     isEditing: false,
//     newItem: null,
//     newItemAmmount: 1,
//     newItemUnit: null,
//   });
// };
