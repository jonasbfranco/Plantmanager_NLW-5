import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgFromUri } from "react-native-svg";
import { useRoute }from '@react-navigation/native';
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { format, isBefore } from "date-fns";


interface Params {
    plant: {
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repeat_every: string;
        };
    }
}

export function PlantSave() {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDataPicker, setShowDataPicker] = useState(Platform.OS === 'ios');

    const route = useRoute();
    const { plant } = route.params as Params;

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
                setShowDataPicker(oldState => !oldState);
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma data no futuro ⏰');
        }

        if(dateTime){
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTimePickerAndroid(){
        setShowDataPicker(oldState => !oldState);
        // console.log('Android');
    }

  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}> */}
            <View style={styles.plantInfo}>
                <SvgFromUri 
                    uri={plant.photo} 
                    height={150} 
                    width={150} 
                />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterdrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                {showDataPicker && (
                    <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity 
                            style={styles.dateTimePickerButton}
                            onPress={handleOpenDateTimePickerAndroid}
                        >
                            <Text style={styles.dateTimePickerText}>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }

                <Button 
                    title="Cadastrar Planta" 
                    onPress={() => {}} 
                />
            </View>
        {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo:{
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 5,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 15,
    marginTop: 5,
    lineHeight: 20,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: Platform.OS === "android" ? 20 : StatusBar.currentHeight,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 15,
    borderRadius: 20,
    position: 'relative',
    bottom: 30,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 14,
    // textAlign: 'justify',
    lineHeight: 18,
  },
  alertLabel: {
    textAlign:'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    // marginBottom: 5,
  },
  dateTimePickerText: {
    color:colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
