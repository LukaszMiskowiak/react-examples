import React from 'react';

const Loader = () => <>...loading</>
const Posts = ({posts}) => (
    <ul>
        {posts.map(({id, body: post}) => (
            <li key={id}>{post}</li>
        ))}
    </ul>
)

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        this.loadPosts()
    }

    async loadPosts() {
        const posts = await (fetch('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.json()));
        this.setState({ // triggers rerender
            loading: false,
            posts
        });
    }

    render() {
        console.log('render')
        const {loading, posts} = this.state;

        return (
            <>
                {loading && <Loader/>}
                {!loading && <Posts posts={posts} />}
            </>
        )
    }
}

export default PostsContainer;
