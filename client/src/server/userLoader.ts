import axios from "axios";
import { User } from "../redux/reducers/jsondata";

export interface UserLoader {
  getUser(): Promise<User>;
}

export interface UserLoaderArgs {
  url: string;
}

const defaultUrl = "http://jsonplaceholder.typicode.com/users";

export function createUserLoader({
  url = defaultUrl,
}: UserLoaderArgs): UserLoader {
  return {
    getUser: async (): Promise<User> => {
      const res = await axios.get(url);

      return res.data;
    },
  };
}
