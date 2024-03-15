import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import { MEALS } from "../data/dumy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const handleFavoriteStatus = () => {
    mealIsFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title="Tap me!"
            onPress={handleFavoriteStatus}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="black"
          />
        );
      },
    });
  }, [navigation, handleFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 34,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listInnerContainer: {
    width: "80%",
  },
});
