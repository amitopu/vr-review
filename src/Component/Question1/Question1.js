import React from "react";

const Question1 = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-left ml-6">
                What is context api ?
            </h1>
            <p className="text-xl text-justify ml-6 w-2/3">
                When we create many components and they are nested inside one
                another, then passing data to a specific component via props is
                very boring and difficult to maintain. Passing data to a child
                component is reffered as props drilling. To solve this problem
                with props drilling context API comes into play. It is a way to
                generate global variables and pass them to components. This is
                easier to maintain than props drilling. To create a context we
                need React.createContext(). It provides a provider and consumer.
                Provider component provides states to its children and consumer
                component takes this states.
            </p>
        </div>
    );
};

export default Question1;
