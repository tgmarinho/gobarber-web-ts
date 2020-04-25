import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

export default authContext;
