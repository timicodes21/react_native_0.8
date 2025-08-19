import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Saves data to the async storage
 * @param {string} key
 * @param {any} data
 * @returns promise
 */

export const asyncStore = async <T extends string | object>(
  key: string,
  value: T,
) => {
  // stringify data if object
  const data = typeof value === 'string' ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, data);
};

/**
 * Gets saved data from the async store
 * @param {string} key
 * @param {boolean} isObject pass this as true if your return value is supposed to be an object
 * @return promise
 */

export const asyncGet = async <D>(
  key: string,
  isObject?: boolean,
): Promise<D | null> => {
  // get data from the async storage
  const data: string | null = await AsyncStorage.getItem(key);
  // return nothing if the data was not found
  if (!data) {
    return Promise.resolve(null);
  }
  // parse data if isObject
  const returnData = isObject ? JSON.parse(data) : data;
  // return stored data
  return Promise.resolve(returnData);
};

/**
 * Removes saved data from the async store
 * @param {string} key
 * @return Promise
 */

export const asyncRemove = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
