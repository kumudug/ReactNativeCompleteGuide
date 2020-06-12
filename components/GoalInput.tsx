import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal, Slider } from 'react-native';

type AppProps = {
    addMode: boolean,
    onAddGoal: (enteredGoal: string) => void;
};

const GoalInput = ({ addMode, onAddGoal }: AppProps) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={addMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler} />
                <Button
                    title="ADD"
                    onPress={() => onAddGoal(enteredGoal)} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    }
});

export default GoalInput;