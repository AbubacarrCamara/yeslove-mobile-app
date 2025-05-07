import React from 'react';
import { View } from 'react-native';
import Post from './Post';
import { setFeedDataAction, updatePostsForFeedAction } from '@/app/store/feedSlice';
import { FeedApiFactory, ProfileApiFactory } from '@/generated-api';
import { useFocusEffect } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import dayjs from 'dayjs';

const AllUpdatesPosts = () => {
const dispatch = useAppDispatch();
useFocusEffect(React.useCallback(() => {
    dispatch(updatePostsForFeedAction('all'));
  }, []));
  const posts = useAppSelector(state => state.feed.feed.posts)

    return (
        <View>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    name={post.author}
                    timePosted={
                        post.timestamp ? dayjs(post.timestamp).format('MMM D, YYYY h:mm A') : 'Unknown date'
                      }
                      
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
