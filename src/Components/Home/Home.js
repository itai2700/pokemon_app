import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../Images/pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    const pokeName = "pikachu";
    let intialURL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`;
    fetch( intialURL )
      .then( (res) => res.json() )
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <li className='post card' key={post.id}>
            <img src={pokeball} alt='A Pokeball' />
            <Link to={'/' + post.id}>
              <div className='card-content'>
                <h3 className='card-title red-text'> {post.title}</h3>
                <p className='card-content black-text'>{post.body}</p>
              </div>
            </Link>
          </li>
        );
      })
    ) : (
      <div className='center'>No Posts Yet</div>
    );

    return (
      <div className='container home'>
        <h1 className='center'>Home</h1>
        <ul>{postList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
