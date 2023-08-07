import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = (props: ContainerProps) => {
  return <div className="container mx-auto px-4">{props.children}</div>;
};

export default Container;
