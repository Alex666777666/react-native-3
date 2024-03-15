import { Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dumy-data";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootConatainer}>
        <Text style={styles.text}>You have no favorites yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootConatainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
