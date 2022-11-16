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

    if (value !== null) {
      console.log("storage", name, ":", value);
      return JSON.parse(value);
    } else {
      return undefined;
    }
  } catch (e) {
    console.log(e);
  }
};
