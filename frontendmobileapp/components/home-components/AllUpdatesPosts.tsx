import React from 'react';
import { View } from 'react-native';
import Post from './Post';
import { allUpdatesPosts } from './PostsData';

const AllUpdatesPosts = () => {
    return (
        <View>
            {allUpdatesPosts.map((post, index) => (
                <Post
                    key={index}
                    name={post.name}
                    timePosted={post.timePosted}
                    numberOfLikes={post.numberOfLikes}
                    numberOfComments={post.numberOfComments}
                    image={post.image}
                    content={post.content}
                />
            ))}
        </View>
    );
};

export default AllUpdatesPosts;
