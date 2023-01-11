
const Dropdown = (props) => {

    const onChangeHandler = (e) => {
        alert(`My favorite team is the ${e.target.value}`);
    }

    return (
        <select onChange={onChangeHandler} name="" id="">
            <option>Titans</option>
            <option>Rams</option>
            <option>Bears</option>
            <option>Steelers</option>
            <option>Raiders</option>
            <option>Seahawks</option>
            <option>Cowboys</option>
            <option>Giants</option>
        </select>
    )
}
export default Dropdown;