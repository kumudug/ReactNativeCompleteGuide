import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button } from 'react-native';

type AppProps = { onAddGoal: (enteredGoal: string) => void; };

const GoalInput = ({ onAddGoal }: AppProps) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler} />
            <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
});

export default GoalInput;