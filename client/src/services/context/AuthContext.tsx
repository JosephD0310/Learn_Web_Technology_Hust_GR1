import { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

export interface User {
    email: string;
    expiresIn: number;
    accessToken: string;
}

interface State {
    user: User | null;
    loading: boolean;
    error: { status: number; message: string } | null;
}

interface Action {
    type:
        | 'LOGIN_START'
        | 'LOGIN_SUCCESS'
        | 'LOGIN_FAILURE'
        | 'LOGOUT'
        | 'REGISTER_START'
        | 'REGISTER_SUCCESS'
        | 'REGISTER_FAILURE';
    payload?: any;
}

const INITIAL_STATE: State = {
    user: JSON.parse(localStorage.getItem('user') as string) || null,
    loading: false,
    error: null,
};

export const AuthContext = createContext<{
    user: User | null;
    loading: boolean;
    error: { status: number; message: string } | null;
    dispatch: Dispatch<Action>;
}>({
    ...INITIAL_STATE,
    dispatch: () => {
        throw new Error('dispatch function must be overridden');
    },
});

function AuthReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                user: null,
                loading: false,
                error: null,
            };
        case 'REGISTER_START':
            return {
                user: null,
                loading: true,
                error: null,
            };
        case 'REGISTER_SUCCESS':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                user: action.payload?.user ?? null,
                loading: false,
                error: null,
            };
        case 'REGISTER_FAILURE':
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
