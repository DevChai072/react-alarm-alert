import React from 'react';

const  AddFoodItemForm = (props) => {
    return (
        <form onSubmit={ props.addFoodItem } className="col-sm-4">
            <div>
                <div>
                    <label className="text-white">Food name</label>
                    <input type="text" name="food" value={props.food} onChange={ props.handleInputChange}/>
                </div>
                <div>
                    <label className="text-white">Food cost</label>
                    <input type="number" name="cost" value={props.cost} onChange={ props.handleInputChange} />
                </div>
                <button> Add food item </button>
            </div>
        </form>
    )
}

export default AddFoodItemForm;