function AddDeleteButton(data) {

    return <button className={"btn btn-" + data.class + " c-button"}>{data.name}</button>
}
export default AddDeleteButton;