function Time() {
    const currentDate = new Date();

    return <p className="lead">{`This is today's date and time : ${currentDate.toLocaleTimeString() + " - " + currentDate.toLocaleDateString()}`}</p>;
}
export default Time;