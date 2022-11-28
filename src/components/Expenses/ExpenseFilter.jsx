import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    console.log("ExpenseFilter.jsx", event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter By Year</label>
        <select
          value={props.selected}
          name=""
          id=""
          onChange={dropDownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
