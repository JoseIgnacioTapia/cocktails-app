import { Link } from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! It's a dead end</h1>
        <Link to="/" className="btn bt-primary">
          Back Home
        </Link>
      </div>
    </section>
  );
}

export default Error;
