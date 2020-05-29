import React from 'react';

function StateContainer() {
    const [user] = React.useState({ name: 'Marian' });

    return (
        <Main user={user} />
    )
}

const Main = ({ user }) => (
    <>
        <Header user={user} />
        <div>Main content</div>
    </>
)

const Header = ({ user }) => (
    <header>Yo, {user.name}!</header>
)

export default StateContainer;
