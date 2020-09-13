import React from 'react';
import { Layer, Alert } from "sancho";

function withLoading(Component) {
  return function withLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
        <Layer elevation="sm">
            <Alert title="Hold on, fetching data may take some time :)" />
        </Layer>
    );
  };
}

export default withLoading;