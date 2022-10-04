import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +enteredAmount;
    if (
      (enteredAmount.trim().length === 0) | (eneteredAmountNumber < 1) ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(eneteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "Quantity" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
