import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components'

import LeveledList from './components/list-leveled';
import Counter from './components/counter';
import PostsContainer from './containers/posts';
import StateContext from './containers/state-context';
import State from './containers/state';
import StateReducer from './containers/state-reducer';

const StyledContainer = styled(Container)`
  * {
    color: ${props => props.theme.primary};
  }
`

const theme = {
  primary: 'darkblue'
}

function App() {
  return (
    <StyledContainer theme={theme}>
      <StateReducer />
    </StyledContainer>
  );
}

export default App;
