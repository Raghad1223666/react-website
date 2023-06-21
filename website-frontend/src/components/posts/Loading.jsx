import React, { Fragment } from "react";

// this component apply HOC 
function Loading({ loading, error, children }) {
    const childrenType = children?.type?.render?.displayName;
    
  const renderHandler = () => {
    if (childrenType === "Button") {
      const cloneElement = React.cloneElement(
        children,
        { disabled: true },
        "Loading ..."
      );
      return (
        <Fragment>
          {loading ? (
            cloneElement
          ) : error ? (
            <Fragment>
              {children}
              <p>
                <br /> {error}
              </p>
            </Fragment>
          ) : (
            children
          )}
        </Fragment>
      );
    }

    return (
      <Fragment>
        {loading ? <p>Loading </p> : error ? <p>{error} </p> : children}
      </Fragment>
    );
  };

  return renderHandler();
}

export default Loading;
