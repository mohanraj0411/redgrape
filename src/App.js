import React, { useEffect, useState } from 'react';
import { jsx } from "@emotion/core";
import styled from '@emotion/styled'
import { Container, Navbar } from "sancho";
import Header from './components/header/Header';
import withLoading from './components/withLoading';
import List from './components/List';
import Formzip from './components/Formzip';

function App() {
    const Main = styled.div(props => ({
        marginTop: '20px'
    }));

    const ListLoading = withLoading(List);

    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    });
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://www.wsjwine.com/api/offer/0033008`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos.response.mainItems });
            },
            (error) => {
                setAppState({ loading: true });
                setError(error);
            }
        );
        }, [setAppState]
    );

    return (
        <div>
            <Navbar position="static">
                <Container>
                    <Header/>
                </Container>
            </Navbar>
            <Main>
                <Container>
                    <ListLoading isLoading={appState.loading} repos={appState.repos} />
                    <Formzip></Formzip>
                </Container>
            </Main>
        </div>
    );
}

export default App;