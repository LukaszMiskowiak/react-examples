import React, {useReducer} from 'react';

const UserContext = React.createContext();
const initialState = { user: null, isAuth: false };

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                isAuth: true
            };
        case 'SIGNOUT':
            return {
                username: null,
                isAuth: false
            };
        default: 
            return state;
    }
}

function StateReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleLogin() {
        dispatch({ type: 'LOGIN', payload: { user: {name: 'Marian'}} });
    }

    function handleSignout() {
        dispatch({ type: 'SIGNOUT' })
    }
    
    return (
        <>
            <UserContext.Provider value={state.user}>
                <Main/>
            </UserContext.Provider>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignout}>Signout</button>
        </>
    )
}

const Main = () => (
    <>
        <Header />
        <div>Main content</div>
    </>
)
const Header = () => (
    <UserContext.Consumer>
        {user => (user && <header>Yo, {user.name}!</header>)}
    </UserContext.Consumer>
)

export default StateReducer;