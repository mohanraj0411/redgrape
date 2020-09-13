import React from 'react';
import ReactDOM from "react-dom";
import { jsx } from "@emotion/core";
import styled from '@emotion/styled'
import { InputGroup, Input, Text } from "sancho";

const Formzip = (props) => {

    const Formview = styled.div(props => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '.5rem 0',
        justifyContent: 'left'
    }));

    const Layer = styled.div(props => ({
        marginTop: '2rem'
    }));

    const [appState, setAppState] = React.useState({
        loading: false,
        repos: null,
      });
    
    React.useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://www.wsjwine.com/api/address/zipcode/12345`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos.response });
            },
            (error) => {
                setAppState({ loading: true });
                setError(error);
            }
            );
        }, [setAppState]
    );

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const zipcode = appState.repos;

    const handleChange = e => {
        let zip = e.target.value
        if(zip){
            setSearchTerm(zip);
        }
    };


    React.useEffect(() => {
        if(zipcode){
            if(zipcode.zipCode === searchTerm){
                setSearchResults([zipcode]);
            }
        }
    }, [searchTerm]);
    
    return (
        <Layer>
            <Text gutter={false} variant="h2" className="heading"><span>STEP 2:</span>Which Case Would You Like?</Text>
            <Formview>
                <InputGroup label="ZIP" helpText="Enter ZIP to populate City and State">
                    <Input placeholder="" value={searchTerm}  onChange={handleChange}/>
                </InputGroup>
                {searchResults.map((item, index) => (
                <ul className="list-zip">
                    <li key="city">{item.city}</li>
                    <li key="stateName">{item.stateName}</li>
                </ul>
                ))}
                {searchResults.map(item => (
                    <Text gutter={false} variant="paragraph" className="paragraph">{item.stateCreateMsg}</Text>
                ))}
            </Formview>
        </Layer>
    );
};

export default Formzip;