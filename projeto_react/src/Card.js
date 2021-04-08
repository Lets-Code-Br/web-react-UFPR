const Card = ({ name, bio, ies }) => {
    return (
        <div className='card'>
            <img src={`https://via.placeholder.com/250x200/?text=${encodeURI(name)}`} alt='foto' />
            <h3>{name}</h3>
            <p className='bio'>{bio}</p>
            <p className='ies'>{ies}</p>
        </div>
    );
}

export default Card;
