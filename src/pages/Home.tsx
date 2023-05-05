import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

function Home(): JSX.Element {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}

export default Home;
