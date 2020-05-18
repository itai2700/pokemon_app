import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../Images/pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
//   componentDidMount() {
//       fetch('')
//   }

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

export default connect(mapStateToProps)(Home);
