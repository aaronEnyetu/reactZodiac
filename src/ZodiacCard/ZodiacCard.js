import './ZodiacCard.css';


export default function ZodiacCard({ name, dates }) { 
  return (
  /* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */
    <div className='zodiac-card'>
      <h1>{name}</h1>
      <img src={`/images/${name}.png`} />
      <p>{dates}</p>
    </div>
  );
}

