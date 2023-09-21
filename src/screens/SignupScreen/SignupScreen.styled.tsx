import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';


const styles = StyleSheet.create({
    icon: {
        marginRight: 8, marginBottom: 2, marginLeft: 0, paddingLeft: 0
    },
    policyAndTerms: { width: '80%', alignSelf: 'center', textAlign: 'center', marginTop: dimensions.height < 700 ? 20 : 50 },
})

export default styles;