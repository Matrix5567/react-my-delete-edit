import { Outlet, Link } from 'react-router-dom';
import { addPost } from '../action';
import { connect } from 'react-redux';

const Layout = ({ addPost, posts }) => {
  const datasubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const invalue = document.getElementById('invalue').value;

    addPost({
      invalue: invalue,
    });
  };

  return (
    <div>
      <h1>FirstPage</h1>
      <nav>
        <ul>
          <li>
            <Link className="btn btn-primary" to="/second">
              Second
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary" to="/third">
              Third
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <form onSubmit={datasubmit}>
        <input id="invalue" type={'text'} />
        <button type={'submit'}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state };
};
export default connect(mapStateToProps, {
  addPost,
})(Layout);
