export default function Posting (props){
    return (
        <div className="posting">
            <h1>{props.title} - {props.price}</h1>
            <p>{props.description}</p>
            <img src={props.imageURL}/>
        </div>
    )
}