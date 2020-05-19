import React from "react";

const RecipeList = (props) => {
  return props.list.map((item) => {
    return (
      <li key={item.id}>
        {item.recipe}
        <button style={{ marginLeft: "10px" }}>Edit</button>
        <button>X</button>
      </li>
    );
  });
};

export default RecipeList;
