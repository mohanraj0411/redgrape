import React, { Component } from 'react';
import styled from '@emotion/styled'

const Menu = styled.div(props => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '.5rem 1rem'
}))

const Navitem = styled.div(props => ({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto'
}))

export class Header extends Component {
    render() {
        return (
            <Menu>
                <a href="/"><img src="static/media/wsj_logo_rebrand.png" /></a>
                <Navitem>Special Welcome Offer</Navitem>
            </Menu>
        )
    }
}

export default Header