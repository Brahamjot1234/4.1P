import './card.css'

function Card(props)
{
    return(
        <div className="column1">
            <img className ="imagesp" src={props.avatar} alt ='' width={400} height={300}/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="column2">
                <p>{props. star}</p>
                <p> {props. Author}</p>
            </div>

        </div>
    )
}
export default Card