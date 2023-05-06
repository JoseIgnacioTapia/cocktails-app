import { useEffect, useRef, FormEvent } from 'react';

function SearchForm(): JSX.Element {
  const searchValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchValue.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search yourfavorite cocktail</label>
          <input type="text" id="name" ref={searchValue} />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
