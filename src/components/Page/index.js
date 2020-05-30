import React from 'react';

import './page.scss';

function Page(props) {
    return <div className="page">{props.children}</div>;
}

export default Page;
