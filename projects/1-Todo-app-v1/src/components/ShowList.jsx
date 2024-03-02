import AddDeleteButton from "./AddDeleteButton";

function ShowList() {

    let todoData = 'Book movie ticket';
    let todoDate = '4/3/2014';

    return <div className="container">

        <div className="row c-row">
            <div className="col-6">
                {todoData}
            </div>
            <div className="col-4">
                {todoDate}
            </div>
            <div className="col-2">
                <AddDeleteButton />
            </div>
        </div>
    </div>
}
export default ShowList;