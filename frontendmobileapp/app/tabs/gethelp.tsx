import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
/*components */
import GetHelpHeader from "../../components/gethelp-components/GetHelpHeader";
import GetHelpSearchBar from "../../components/gethelp-components/GetHelpSearchBar";
import GetHelpProfessionals from "../../components/gethelp-components/GetHelpProfessionals";
import styles from "../../Styles/page-styles/GetHelpStyles";

export default function GetHelpPage() {
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer} style={styles.container}>
      <GetHelpHeader />
      <GetHelpSearchBar />
      <GetHelpProfessionals />
    </ScrollView>
  );
}

