import { Link } from 'react-router-dom';
import { Cocktail } from '../features/cocktails/cocktailtSlice';

function CocktailDetail({ image, name, info, glass }: Cocktail): JSX.Element {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${name}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}

export default CocktailDetail;
