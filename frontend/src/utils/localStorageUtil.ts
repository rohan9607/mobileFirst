'use client'
const key: string =process.env.LOCAL_STORAGE_KEY as string;
interface ILocalStoragePayloadType {
  isLoggedIn?: boolean;
  token?: string;
}
export const localStorageAvailable : () =>  boolean = () => {
  try {
    // Incognito mode might reject access to the localStorage for security reasons.
    // window isn't defined on Node.js
    // https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
    const ramdom_key = "check_storage";
    localStorage.setItem(ramdom_key, ramdom_key);
    localStorage.removeItem(ramdom_key);
    return true;
  } catch (err) {
    return false;
  }
};

export const getLocalStorage = () => {
    // Perform localStorage action
    try {
      let localStoragePayload = localStorage.getItem(key);
      if (!localStoragePayload) return undefined;
      return JSON.parse(localStoragePayload);
    } catch (e) {
      return undefined;
    }

};

export const setLocalStorage = async (payload: ILocalStoragePayloadType) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem("AUTOX_ADMIN", JSON.stringify(payload));
  }
};

export const removeLocalStorage = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.removeItem(key);
  }
};
export const removeLocalStoragePincode = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    let data = getLocalStorage()
    if (data  !== undefined) {
      data = {...data, pincode : ""}
      setLocalStorage(data);
    }
  }
};
