import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { AppDispatch } from '../app/store';
import { searchByTerm } from '../features/cocktails/cocktailtSlice';
import Loading from './Loading';
import CocktailDetail from './CocktailDetail';
import { useEffect } from 'react';

function CocktailList(): JSX.Element {
  const cocktails = useSelector(
    (state: RootState) => state.cocktails.cocktails
  );
  const loading = useSelector((state: RootState) => state.cocktails.loading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchByTerm());
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(({ id, name, image, info, glass }) => {
          return (
            <CocktailDetail
              key={id}
              id={id}
              name={name}
              image={image}
              info={info}
              glass={glass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CocktailList;
