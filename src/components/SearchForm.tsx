import { useEffect, useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import { AppDispatch } from '../app/store';
import { searchByTerm } from '../features/cocktails/cocktailtSlice';

function SearchForm(): JSX.Element {
  const searchValue = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    searchValue.current?.focus();
  }, []);

  const searchHandler = async () => {
    const searchTerm = searchValue.current?.value || '';
    try {
      // const actionResult = await dispatch(searchByTerm(searchTerm));
      // const searchResult = unwrapResult(actionResult);

      // console.log(searchResult);
      dispatch(searchByTerm(searchTerm));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search yourfavorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchHandler}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
