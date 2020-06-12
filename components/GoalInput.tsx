import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal, Slider } from 'react-native';

type AppProps = {
    addMode: boolean,
    onAddGoal: (enteredGoal: string) => void,
    onAddCancel: () => void
};

const GoalInput = (props: AppProps) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.addMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonPanel}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="brown"
                            onPress={props.onAddCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addGoal} />
                    </View>
                </View>
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
    },
    buttonPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;