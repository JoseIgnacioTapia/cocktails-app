import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

import Loading from './Loading';

function CocktailList(): JSX.Element {
  const cocktails = useSelector(
    (state: RootState) => state.cocktails.cocktails
  );
  const loading = useSelector((state: RootState) => state.cocktails.loading);

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
    <div>
      <h2>CocktailList</h2>
    </div>
  );
}

export default CocktailList;
