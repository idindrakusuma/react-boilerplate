import React from 'react';

export default React.lazy(() => import(/* webpackChunkName: "example-lazy" */ './ExampleLazy'));