import { Image, ImageBackground, StyleSheet, Platform, Text, View, ScrollView, Header, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabTwoScreen() {
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer} style={styles.container}>
      <View style={styles.ourProfessionalsContainer}>
        <ImageBackground source={{ uri: "https://yeslove.co.uk/wp-content/uploads/2021/04/shape_7.png" }} style={styles.backgroundImage}>

        <View style={styles.contentRow}>
        <Entypo name="megaphone" size={48} color="white" style={styles.icon}/>
        
        <View style={styles.textContainer}>
          <Text style={styles.ourProfessionalsText}>Our Professionals</Text>
          <Text style={styles.ourProfessionalsCaption}>Browse the list of our professionals</Text>
        </View>
        </View>
        </ImageBackground>
      </View>

{/* professionals search bar */}
 
 <View style={styles.searchBarContainer}>
  <TextInput placeholder='Search Members...' placeholderTextColor="gray"  style={styles.searchBar}></TextInput>
 </View>

 {/* professionals profiles */}

 <View style={styles.professionalProfileContainer}>
   <Image style={styles.profileImage} source={{ uri: "https://yeslove.co.uk/wp-content/uploads/avatars/160/1716314384-bpfull.jpg" }}></Image>
  <Text style={styles.professionalProfileName}>Frederick J Nunoo-Mensah</Text>
  <Text style={styles.professionalDescription}>I qualified as a person-centered counsellor in 2010. Since 2010, I have worked as an integrative therapist in a range of settings including the health care sector (the National Health Service in the U.K.), an autism service in Lancashire and in education i.e. in schools and at the University of Manchester. As an integrative therapist, I draw from a variety of therapeutic approaches including Cognitive Behavioural Therapy (CBT) and Psychodynamic Therapy. Therefore, I am able to support, assist and empower clients to work through a wide range of issues including depression, anxiety, stress, anger issues, low self-esteem, relationship issues, obsessive-compulsive disorder (OCD), abuse, bereavement etc. I completed an MA is Social Work at the University of Salford in 2013. Although I am not a practicing Social Worker, I have a good knowledge and understanding of safeguarding, child protection and drug & alcohol misuse; therefore I am able to apply my knowledge and life experience in supporting my clients where it is applicable and appropriate. I have a great interest in self-development / self-awareness / improving self-esteem. I believe that the most important relationship starts with oneself as this usually dictates the quality and depth of your relationships with others. Reading around spirituality and practicing ideas from Buddhism, Stoicism and Taoism in my daily life gives me great fulfilment. I also enjoy keeping healthy!</Text>
 </View>

 <View style={styles.professionalProfileContainer}>
 <Image style={styles.profileImage} source={{ uri: "https://yeslove.co.uk/wp-content/uploads/avatars/73/1716058150-bpfull.jpg" }}></Image>
  <Text style={styles.professionalProfileName}>Jael Kay</Text>
  <Text style={styles.professionalDescription}>Why listen to me?💭 Years ago, I navigated an unhealthy relationship that deeply affected my mental well-being. Summoning courage, I broke free and embarked on a transformative journey to reclaim my mental health. Immersed in research and community, YesLove! was birthed.✨️ As a Life and Breakup Coach, I now draw from my personal experience to guide clients toward resilience.💪 I also share my journey at events and through media, inspiring others to thrive post-adversity.🗣 With a musical touch, I amplify my message, connecting deeply with audiences.🎤 Why you’re here…👇 Feeling overwhelmed by your intimate relationship challenges?👋 As a Breakup & Life Coach and founder of YesLove!, I offer tailored solutions for personal and organisational needs. Whether you need personal support or organisational assistance, I have the experience and expertise to help.📖💪✨️✅️ One-on-One Coaching👂✍️🧠✨️ My personalised coaching sessions equip you with the tools to navigate challenges such as family and intimate relationship struggles. Drawing from personal experience and research-based techniques, I provide tailored strategies to help you thrive.   Workshops👂✍️🧠✨️ I offer transformative workshops that focus on: 1. Recovering from a Toxic Relationship 2. Dating Right These workshops provide practical tools and interactive exercises to manage and overcome the challenges you face. 👏They also offer the opportunity to connect with others on similar journeys, creating a supportive community.🫂 Ready to take the next step? 👇 Reach out to me at Jaelkay0609@gmail.com or send me a direct message!</Text>
 </View>

 <View style={styles.professionalProfileContainer}>
 <Image style={styles.profileImage} source={{ uri: "https://yeslove.co.uk/wp-content/uploads/avatars/168/1718799969-bpfull.jpg" }}></Image>
  <Text style={styles.professionalProfileName}>Carrie</Text>
  <Text style={styles.professionalDescription}>I’ve been helping individuals overcome anxiety perfectionism and build lasting confidence for over 20 years. With my expertise and personalised approach, my aim is to empower clients to break free from self-doubt and achieve their true potential. My tailored sessions focus on each individual’s unique challenges, creating strategies and goals that inspire growth and resilience. Discover how to embrace self-assurance, quiet the inner critic, and cultivate a deeper sense of peace and wellbeing through the my course programme with group discussions and accountability linked together or with 1:1 support. Integrated into my practice are mindfulness and visualisation exercises. I teach people how to develop a regular mindfulness practice and integrate it into their everyday lives. Mindfulness practice allows us to fully embrace life’s joys and meet the difficult moments more skillfully, and the result of that is often an increased sense of ease, peace, happiness and fulfillment. Learn how to be more present in your life Feel a greater sense of peace, happiness, and wellbeing Develop a regular mindfulness practice & integrate it into your everyday life Live more authentically and intentionally</Text>
 </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ourProfessionalsContainer: {
    backgroundImage: "linear-gradient(to right,rgb(228, 145, 20), #ffea00)",
    width: "90vw",
    height: 100,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 15,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ourProfessionalsText: {
    fontSize: 23,
    color: "#fff",
    fontWeight: 700
  },
  ourProfessionalsCaption: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 600
  },

/* search bar*/

searchBarContainer: {
  marginTop: 30,
  width: "90%",
  borderRadius: 15,
  height: 85,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

searchBar: {
  width: "90%",
  height: 43,
  border: "1px solid #ddd",
  paddingHorizontal: 10
},

/* professional profiles */

professionalProfileContainer: {
  marginTop: 30,
  width: "90%",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  borderRadius: 15,
},

professionalProfileName: {
  marginBottom: 10,
  fontWeight: 600,
  fontSize: 18
},

professionalDescription: {
  color: "#555", 
  fontSize: 15
},

profileImage: {
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: "5px solid #fff",
  marginBottom: 10,
},


});
