export interface AuthState {
    object: Object | null;
    isLogged: boolean;
  }
  
  export const initialState: AuthState = {
    object: null,
    isLogged: false,
  };
  