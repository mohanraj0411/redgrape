import React from 'react';
import { jsx } from "@emotion/core";
import styled from '@emotion/styled'
import { Layer, Pager, Tabs, Tab, TabPanel, Text, InputGroup, Check } from "sancho";

const List = (props) => {
    const [index, setIndex] = React.useState(0);

    const Tabmenu = styled.div(props => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '.5rem 1rem',
        justifyContent: 'center'
    }));

    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No offers, sorry</p>;

    return (
        <Layer css={{ overflow: "hidden" }}>
            <Pager value={index} onRequestChange={i => setIndex(i)}>
                {repos.map((repo) => {
                    return (
                        <TabPanel key={repo.product.colourName} id={repo.product.largeImage}>
                            <picture>
                                <source media="(min-width: 900px)" srcSet={repo.product.largeImage} />
                                <source media="(min-width: 750px)" srcSet={repo.product.thumbnailImage} />
                                <img src={repo.product.smallImage} alt={repo.product.colourName} />
                            </picture>
                        </TabPanel>
                    );
                })}
            </Pager>
            <Tabmenu>
                <Text gutter={false} variant="paragraph" css={{paddingTop:'10px', marginLeft:'10px'}}>Your Case Options</Text>
                <Tabs value={index} onChange={i => setIndex(i)}>
                    {repos.map((repo) => {
                        return (
                            <Tab key={repo.product.colourName} id={repo.product.colourId}>{repo.product.colourName}</Tab>
                        );
                    })}
                </Tabs>
            </Tabmenu>
            <Layer css={{ marginTop: "20px" }}>
                <Text gutter={false} variant="h2" className="heading"><span>STEP 1:</span>Which Case Would You Like?</Text>
                <InputGroup label="" css={{marginTop: '0'}}>
                    <div>
                        {repos.map((repo, index) => {
                            return (
                                <Check type="radio" name={repo.product.productType} key={repo.product.itemCode} label={repo.product.name} />
                            );
                        })}
                    </div>
                </InputGroup>
            </Layer>
        </Layer>
    );
};

export default List;