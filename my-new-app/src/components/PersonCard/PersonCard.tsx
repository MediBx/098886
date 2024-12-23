import './PersonCard.css'
function PersonCard(props: { fname: string, lname: string }) {
    return (
        <div className='person-card'>
            <h1>{props.fname}</h1>
            <h2>{props.lname}</h2>
        </div>
    )
}

export default PersonCard
