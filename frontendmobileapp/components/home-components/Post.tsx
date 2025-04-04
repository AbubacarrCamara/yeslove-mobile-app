import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../Styles/HomeStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import PostCommentField from './PostCommentField';

const Post = ({ name, timePosted, image, content, numberOfLikes, numberOfComments }) => {
    const [expanded, setExpanded] = useState(false);
    const [commentSectionExpanded, setCommentSectionExpanded] = useState(false)

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleCommentToggle = () => {
        setCommentSectionExpanded(!commentSectionExpanded)
    }

    return (
        <View style={styles.postContainer}>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={{ uri: image }} />
                <View style={styles.profileInfoContainer}>
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.timePosted}>{timePosted}</Text>
                </View>
            </View>
            <Text style={styles.postContent}>
                {expanded ? content : `${content.substring(0, 300)}...`}
            </Text>

            <View style={styles.seeLessAndLikeContainer}>
                <View style={styles.likeButtonContainer}>
                    <AntDesign style={styles.likeIcon} name="heart" size={24} color="red" />
                    <Text>{numberOfLikes}</Text>
                    <FontAwesome6 onPress={handleCommentToggle} style={styles.commentIcon} name="comment-dots" size={24} color="gray" />
                    <Text>{numberOfComments}</Text>
                </View>
                <TouchableOpacity onPress={handleToggle}>
                    <Text style={{ color: '#2d5be3', marginTop: 10 }}>
                        {expanded ? 'See Less' : 'See More'}
                    </Text>
                </TouchableOpacity>
            </View>


            {/* comment section */}
            {commentSectionExpanded && (
                <PostCommentField image={image}/>
            )}

        </View>
    );
};

export default Post;

