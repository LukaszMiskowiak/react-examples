import React from 'react';

const UserContext = React.createContext();

function StateContextContainer() {
    const [user] = React.useState({ name: 'Marian' });

    return (
        <UserContext.Provider value={user}>
            <Main/>
        </UserContext.Provider>
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
        {user => (<header>Yo, {user.name}!</header>)}
    </UserContext.Consumer>
)  // this is a pattern called render props

export default StateContextContainer;