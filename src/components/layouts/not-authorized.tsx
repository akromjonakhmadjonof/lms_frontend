import React from "react";

interface LayoutInterface {
    children: React.ReactNode;
}

const NotAuthorizedLayout = (props: LayoutInterface) => {
    const {children} = props
    return (
        <>
            {children}
        </>
    )
}

export default NotAuthorizedLayout
