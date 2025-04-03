import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "../../Styles/HomeStyles"

const AllUpdatesPosts = () => {
    const [expanded, setExpanded] = useState(null);

    const allUpdatesPosts = [
        {
            name: 'Yeslove! Official',
            timePosted: "2 days ago",
            image: 'https://yeslove.co.uk/wp-content/uploads/avatars/1/1716057021-bpfull.jpg',
            content: `Today is #WorldBipolarDay and Mother’s Day - a time to celebrate mothers and acknowledge those navigating the challenges of bipolar disorder, whether personally or as a supportive loved one.

If you love someone with bipolar, you’ve probably struggled with what to say (or not say) during their highs and lows.

Here’s the thing: Some words, even if well-intended, can do more harm than good. Let’s break it down. 👇

1. “You were fine yesterday. What’s wrong now?”

→ Bipolar isn’t predictable, and expecting consistency can make them feel misunderstood.

✔️ You could try: “I know things can change day by day. How can I support you right now?”

2. “You don’t look sick.”

→ Mental health conditions aren’t always visible, but that doesn’t mean they aren’t real.

✔️ You could try: “I may not see it, but I know it’s real for you. I’m here.”

3. “Maybe you just need to try harder.”

→ Bipolar disorder isn’t about effort—it’s a medical condition, not a mindset.

✔️ You could try: “I see how much you’re doing, and I appreciate your effort.”

4. “Just think positive!”

→ Positive thinking doesn’t override brain chemistry.

✔️ You could try: “I know this is hard, and you don’t have to go through it alone.”

5. “I don’t know how much more of this I can take.”

→ Your feelings are valid, but saying this can make them feel like a burden.

✔️ You could try: “This is tough, and I want to find ways for both of us to cope.”

💡 Navigating a relationship with bipolar disorder isn’t about having all the answers - it’s about listening, learning, and adapting.

Today, let’s go beyond awareness. Let’s get better at supporting the people we love.

#WorldBipolarDay #BipolarAwareness #Relationships #MentalHealth #WordsMatter`
        }
    ];

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index); // Toggle the expansion
    };

    return (
        <View>
            {allUpdatesPosts.map((allUpdatesPost, index) => (
                <View key={index} style={styles.allUpdatesContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image style={styles.profileImage} source={{ uri: allUpdatesPost.image }} />
                        <View style={styles.profileInfoContainer}>
                            <Text style={styles.profileName}>{allUpdatesPost.name}</Text>
                            <Text style={styles.timePosted}>{allUpdatesPost.timePosted}</Text>
                        </View>
                    </View>
                    <Text style={styles.postContent}>
                        {expanded === index ? allUpdatesPost.content : `${allUpdatesPost.content.substring(0, 300)}...`}
                    </Text>
                    <TouchableOpacity onPress={() => handleToggle(index)}>
                        <Text style={{ color: '#2d5be3', marginTop: 10 }}>
                            {expanded === index ? 'See Less' : 'See More'}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

export default AllUpdatesPosts