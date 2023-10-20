import { StyleSheet, View, Text, FlatList, Image } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../data.json'
import { color } from "react-native-reanimated";
import styles from './/Disciplinas';


export default function Disciplinas() {
    /* const materia = data.disciplinas.nome

    const corCartao = () => {
        if(materia == 'Português'){
            return {color: '#00ffff'}
        }
    } */

    return (
        <View style={styles.container}>
            <FlatList
            data={data.disciplinas}
            keyExtractor={materia => materia.id}
            renderItem={({item}) => (
                <View style={styles.disciplinaCard}>
                <View style={styles.disciplinaNomeProf}>
                    <Text style={styles.disciplina}>{`${item.nome}`}</Text>
                    <Text style={styles.professor}>Professor(a): {`${item.professor}`}</Text>
                </View>
                <Image style={styles.iconeMateria} source={{ uri: `${item.icone}`}}/>
            </View>
            )}
            
            />
            {/* <View style={styles.disciplinaCard}>
                <View style={styles.disciplinaNomeProf}>
                    <Text style={styles.disciplina}>Matemática</Text>
                    <Text style={styles.professor}>Prof. Fulano</Text>
                </View>
                <MaterialCommunityIcons name="math-compass" size={40} color="black" />
            </View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 30
    },
    disciplinaCard: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 180,
        marginHorizontal: 20,
    },
    disciplina: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    professor: {
        fontSize: 18
    },
    iconeMateria: {
        width: 40,
        height: 40
    }
})