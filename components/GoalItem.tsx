import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';


type AppProps = {
    title: string,
    id: string,
    onDelete: (goalId:string) => void;
};

const GoalItem = ({ title, id, onDelete }: AppProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;