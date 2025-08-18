export interface UserLocalStorage {
  id: number;
  email: string;
  name: string;
  phone: string | null;
  avatar: string | null;
  dateOfBirth: string;
  gender: string;
}

export function useUser() {
  const getUser = (): UserLocalStorage | null => {
    const userString = localStorage.getItem("user");
    return userString ? (JSON.parse(userString) as UserLocalStorage) : null;
  };

  const getId = () => getUser()?.id || null;
  const getEmail = () => getUser()?.email || null;
  const getName = () => getUser()?.name || null;
  const getPhone = () => getUser()?.phone || null;
  const getAvatar = () => getUser()?.avatar || null;
  const getDateOfBirth = () => getUser()?.dateOfBirth || null;
  const getGender = () => getUser()?.gender || null;

  const user = getUser();
  return user || {} as UserLocalStorage;
}

