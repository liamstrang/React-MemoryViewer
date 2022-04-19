import React, { useState, useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../services/appContext";
import GridImageView from "react-native-grid-image-viewer";
import { Button, RadioButton, TextInput as Input } from "react-native-paper";

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
  const [newImageText, setNewImageText] = useState('')
  const [newImages, setNewImages] = useState(false)
  const [editError, setEditError] = useState('')

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

  useEffect(() => {
    setImages(memories[category])
  },[newImageText]);

  const deleteCategory = (category) => {
    memories[category] = [];
    setImages("");
  };

  const redoImages = (newImageText, category) => {
    let url = "https://picsum.photos/seed/";
    if(newImageText === '' || newImageText === null){
      setEditError("You must enter something")
      setTimeout(() => {
        setEditError('')
      }, 2000)
    }else{
      for(let i = 0; i < memories[category].length; i++){
        memories[category][i] = url + newImageText + i + "/400/400";
      }
      setNewImages(false)
      setImages("");
      setImages(memories[category]);
      setNewImageText("")
    }
    
  }

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
        <>
        <Button
          style={styles.button}
          icon="delete"
          mode="contained"
          onPress={() => deleteCategory(category)}
        >
          Delete Images in Category
        </Button>
      {newImages ? (
            <>
            <Input
              style={styles.input}
              selectionColor="#004ae6"
              underlineColor="transparent"
              mode="outlined"
              placeholder="Enter any text and new images will be generated"
              returnKeyType="next"
              value={newImageText}
              onChangeText={(newImageText) => setNewImageText(newImageText)}
              autoCapitalize="none"
              keyboardType="default"
            />
            {editError ? (
              <Text style={styles.error}>{editError}</Text>
            ):(
              null
            )}
            <View style={styles.multipleButtons}>
              <View>
                <Button
                  style={styles.button}
                  icon="arrow-left"
                  mode="contained"
                  onPress={() => setNewImages(false)}
                >
                  Back
                </Button>
              </View>
              <View>
                <Button
                  style={styles.button}
                  icon="refresh"
                  mode="contained"
                  onPress={() => redoImages(newImageText, category)}
                >
                  Edit Images
                </Button>
              </View>
            </View>
            </>
        ):(
          <Button
        style={styles.button}
        icon="refresh"
        mode="contained"
        onPress={() => setNewImages(true)}
      >
        Edit Images
      </Button>
        )}
      </>
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
          <Text style={styles.header}>Add Some Memories</Text>
        </>
      )}
      {category ? <></> : <Text style={styles.header}>Select a Category</Text>}
    </>
  );
};

export default Memories;
