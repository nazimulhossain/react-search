import './Card.css';
const Card = ({id,name,email})=>{
    const url = 'https://robohash.org/';   
    
    return (
        <div className='Card'>
            <div>
                <img src={`${url}${id}?size=180x180`} alt='robots'></img>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>      

        </div>
    )
}

export default Card;