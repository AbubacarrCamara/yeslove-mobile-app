import React from 'react';
import { View } from 'react-native';
import Post from './Post';
import { setFeedDataAction } from '@/app/store/feedSlice';
import { FeedApiFactory, ProfileApiFactory } from '@/generated-api';
import { useFocusEffect } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

const AllUpdatesPosts = () => {
const dispatch = useAppDispatch();
useFocusEffect(React.useCallback(() => {
    FeedApiFactory().getFeed({feed_type: "all"})
    .then(response => {
        dispatch(setFeedDataAction(response.data.posts ?? []))
    })
  }, []));
  const posts = useAppSelector(state => state.feed.feed.posts)

    return (
        <View>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    name={post.author}
                    timePosted={post.timestamp}
                    numberOfLikes={post.likes}
                    numberOfComments={post.comments}
                    image={post.image}
                    content={post.content}
                />
            ))}
        </View>
    );
};

export default AllUpdatesPosts;
