import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value));
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
    await AsyncStorage.removeItem("badges");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("email");
    return true;
  } catch (exception) {
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
  userData.map((user) => {
    if (user.email === email) return user;
  });
  return undefined;
};
