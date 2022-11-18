import AsyncStorage from "@react-native-async-storage/async-storage";
import { badgeNameMap, badgeNames } from "./badges";

export const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value));
    console.log("stored", name, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);

    if (value !== null && value !== undefined) {
      console.log("storage", name, ":", value);
      return JSON.parse(value);
    } else {
      return undefined;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getName = async () => {
  return await getData("username");
};

export const getEmail = async () => {
  return await getData("email");
};

export const clearData = async () => {
  try {
    console.log("CLEAR DATA");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("email");
    await badgeNames.map(async (name) => {
      await AsyncStorage.removeItem(name);
      const data = await getData(name);
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// stores a user to the storage with the values:
// TO DO: password hashing
// [{name: 'name', email: 'email', password1...}]
export const storeUser = async (user) => {
  try {
    var userData = await getData("users");
    if (userData === undefined) {
      await storeData("users", { data: [user] });
    } else {
      console.log(userData.data);
      userData["data"].push(user);
      console.log(userData);
      await storeData("users", userData);
    }
  } catch (e) {
    console.log(e);
  }
};

// returns a user if they have signed up
export const getUser = async (email) => {
  const userData = await getData("users");
  if (userData === undefined) {
    return undefined;
  }
  var data = undefined;
  await userData.data.map((user, i) => {
    console.log("checking user data", user.email === email);
    if (user.email === email) {
      console.log("found", user);
      data = user;
    }
  });
  return data;
};

export const replaceUser = async (originalData, newData) => {
  const userData = await getData("users");
  if (userData === undefined) {
    return undefined;
  }

  // remove user from database
  var data = [];
  await userData.data.map((user, i) => {
    if (user === originalData) {
      data.push(user);
    }
  });

  // add new data
  data.push(newData);
  console.log("newdata", data);

  // add new user
  await storeData("users", { data: data });
};
