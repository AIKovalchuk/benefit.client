import React from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  person: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: (token: number, expirationTime: Date | undefined) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

let logoutTimer: NodeJS.Timeout;

const AuthProvider: React.FC = ({ children }: any) => {
  const authContext = React.useContext(AuthContext);
  const [token, setToken] = React.useState<number | null>(null);
  const [
    tokenExpirationDate,
    setTokenExpirationDate,
  ] = React.useState<Date | null>();

  const login = React.useCallback(
    (token: number, expirationTime: Date | undefined) => {
      setToken(token);
      const expiration =
        expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);

      setTokenExpirationDate(expiration);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          token,
          expirationTime: expiration.toISOString(),
        })
      );
    },
    []
  );

  const logout = React.useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  React.useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      login(storedData.token, new Date(storedData.expirationTime));
    }
  }, [login]);

  React.useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: null,
        person: null,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
