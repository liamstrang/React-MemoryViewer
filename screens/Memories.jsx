import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { AppContext } from "../services/appContext";
import GridImageView from "react-native-grid-image-viewer";
import { Button, RadioButton } from "react-native-paper";

//Memories Styling
import styles from "../styles/memoriesStyles";

/**
@author Liam Strang - 45426392

@description Screen to display the "Memories" page. 
*/

const Memories = ({ route, navigation }) => {
  //Fetch Current User Profile
  const UserProvider = useContext(AppContext);
  let user = route.params.user;
  const userAccount = UserProvider.users.find((u) => u.username === user);
  const memories = userAccount.memories;

  const [getImages, setImages] = useState(memories["Travelling"]);
  const [category, setCategory] = useState("Travelling");

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

  const getCategory = (cat) => {
    setCategory(cat);
    if (cat === "Travelling") {
      setImages("");
      if (memories.Travelling.length > 0) {
        setImages(memories.Travelling);
      }
    }
    if (cat === "Home_Country") {
      setImages("");
      if (memories.Home_Country.length > 0) {
        setImages(memories.Home_Country);
      }
    }
  };

  const deleteCategory = (category) => {
    memories[category] = [];
    setImages("");
  };

  return (
    <>
      <Text style={styles.headline_text}>{usernameFixed}'s Memories</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
      <RadioButton.Group
        onValueChange={(value) => getCategory(value)}
        value={category}
      >
        <RadioButton.Item label="Travelling Memories" value="Travelling" />
        <RadioButton.Item label="Home Country Memories" value="Home_Country" />
      </RadioButton.Group>
      {getImages ? (
        <Button
          style={styles.button}
          icon="delete"
          mode="contained"
          onPress={() => deleteCategory(category)}
        >
          Delete Images in Category
        </Button>
      ) : (
        <></>
      )}
      {getImages ? (
        <GridImageView data={getImages} />
      ) : (
        <>
          <Button
            style={styles.button}
            icon="refresh"
            mode="contained"
            onPress={() => getCategory(category)}
          >
            Refresh
          </Button>
          <Text style={styles.header}>No Images</Text>
        </>
      )}
      {category ? <></> : <Text style={styles.header}>Select a Category</Text>}
    </>
  );
};

export default Memories;
