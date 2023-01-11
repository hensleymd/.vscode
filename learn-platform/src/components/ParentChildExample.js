import React from 'react';

const ParentCompenent = (props) => {
    return(
        <div>
            <ChildComponent firstName ={"Matt"} lastName={"Hensley"} />
        </div>
    );
}

const ChildComponent = (props) => {
    return (
        <p>
            Hello! My name is { props.firstName } { props.lastName }
        </p>
    )
};