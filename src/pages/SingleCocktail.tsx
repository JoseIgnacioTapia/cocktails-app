import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { searchByTerm } from '../features/cocktails/cocktailtSlice';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

interface RouteParams {
  [key: string]: string | undefined;
}

function SingleCocktail(): JSX.Element {
  const { nameCocktail } = useParams<RouteParams>();

  const cocktail = useSelector((state: RootState) => state.cocktails.cocktails);
  const loading = useSelector((state: RootState) => state.cocktails.loading);
  // const error = useSelector((state: RootState) => state.cocktails.error);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchByTerm(nameCocktail ?? ''));
  }, [nameCocktail]);

  if (loading) {
    return <Loading />;
  }
  if (cocktail.length === 0) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail[0];

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients?.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
