export const getLocalData = (key: string) => {
  const localData = localStorage.getItem(key);
  return localData ? localData : '';
};

export const setLocalData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
