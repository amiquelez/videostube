import React from 'react';

import Aux from '../../hoc/Aux';
import Videos from '../Videos/Videos';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => (
    <Aux>
        <header className="Header">
          Header
        </header>
        <section className="Content">
          <Sidebar></Sidebar>
          <Videos></Videos>
        </section>
    </Aux>
)

export default Layout;