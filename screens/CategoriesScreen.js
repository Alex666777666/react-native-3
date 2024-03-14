import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dumy-data";
import CategorieGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategorieGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigate={navigation}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={itemData => itemData.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
