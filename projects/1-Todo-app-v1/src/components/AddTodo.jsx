import AddDeleteButton from "./AddDeleteButton";

function AddTodo() {
    return <div className="container text-center">

        <div className="row c-row">
            <div className="col-6">
                <input type="text" placeholder="Enter todo here" />
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-2">
                <AddDeleteButton name="Add" class="success" />
            </div>
        </div>
    </div>
}
export default AddTodo;