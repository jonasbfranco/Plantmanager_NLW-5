import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

import { Header } from '../components/Header';

import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { pt } from 'date-fns/locale';

import { formatDistance } from 'date-fns';
import { loadPlant, PlantProps } from '../libs/storage';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { Load } from '../components/Load';


export function MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    useEffect(() => {
        async function loadStorageDate(){
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            )

            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageDate();

    },[]);


    if (loading) {
        return <Load />
    }
    return (
        <>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.container}>

                <View style={styles.spotlight}>
                    <Image 
                        source={waterdrop}
                        style={styles.spotlightImage} 
                    />
                    <Text style={styles.spotlightText}>
                        {nextWatered}
                    </Text>
                </View>

                <View style={styles.plants}>
                    <Text style={styles.plantsTitle}>
                        Próximas regadas
                    </Text>

                    {/* <View style={{ flex: 1, width: '100%' }}> */}
                        <FlatList
                            data={myPlants}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({item}) => (
                                <PlantCardSecondary data={item}/>
                            )}
                            showsVerticalScrollIndicator={false}
                            // contentContainerStyle={{ flex: 1 }}
                        />
                    {/* </View> */}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 30,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 10,
        backgroundColor: colors.background,
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    spotlightImage: {
        width: 60,
        height: 60,
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        // textAlign: 'justify',
    },
    plants: {
        flex: 1,
        width: '100%',
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20,
    },

})