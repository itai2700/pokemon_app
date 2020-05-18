import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../Actions/PostActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='btn grey' onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <h1>Loading Post</h1>
    );
    return <div className='container'>{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id == id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
