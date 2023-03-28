export const getItem = (key) => {
   try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
   } catch (e) {
      return undefined;
   }
};

export const setItem = (key, data) => {
   return localStorage.setItem(key, JSON.stringify(data));
};
