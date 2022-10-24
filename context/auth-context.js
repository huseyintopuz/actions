import React, { createContext, useState } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: "",
    });

    const setUserAuthInfo = ({ data }) => {
        const token = localStorage.getItem("token", data.data);

        setAuthState({
            token,
        });
    };

    const isUserAuthenticated = () => authState.token;

    return (
        <Provider
            value={{
                authState,
                setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
                isUserAuthenticated,
            }}
        >
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };