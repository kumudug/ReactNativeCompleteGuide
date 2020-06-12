import React, { useState } from 'react';
import { StyleSheet, View, FlatList, GestureResponderEvent } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<{ id: string, val: string }[]>([]);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), val: goalTitle }]);
  };

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(
        (goal) => goal.id !== goalId
      );
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={
          itemData =>
            <GoalItem
              title={itemData.item.val}
              id={itemData.item.id}
              onDelete={removeGoalHandler} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
