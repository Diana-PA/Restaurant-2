import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/esm/Image';

function Card({title, imageURL, text}) {
  return (
    <div className='card text-center bg-dark'>
      <Image src={imageURL} alt='' />
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{text}</p>
        <Button variant="secondary" className='btn btn-outline-secondary-color-dark rounded-0'>Agregar</Button>
      </div>
    </div>
  );
}

export default Card;