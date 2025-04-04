import React from 'react';
import { View, Text } from "react-native";
import Post from "./Post";
import { friendsPosts } from './PostsData';

const FriendsPosts = () => {
  return (
    <View>
      {friendsPosts.map((post, index) => (
                <Post
                    key={index}
                    name={post.name}
                    timePosted={post.timePosted}
                    image={post.image}
                    content={post.content}
                    numberOfLikes={post.numberOfLikes}
                    numberOfComments={post.numberOfComments}
                />
            ))}
    </View>
  )
}

export default FriendsPosts
