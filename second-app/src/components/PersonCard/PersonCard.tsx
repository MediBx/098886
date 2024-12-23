
function PersonCard(props: { fname: string, lname: string }) {
    return (
        <div>
            <h1>{props.fname}</h1>
            <h2>{props.lname}</h2>
        </div>
    )
}

export default PersonCard
