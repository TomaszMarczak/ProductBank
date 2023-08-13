import { Button } from "./ui/button";

interface LoadingButtonProps extends React.HTMLAttributes<HTMLElement> {}

const LoadingButton = (props: LoadingButtonProps) => {
  return <Button variant="outline">...</Button>;
};

export default LoadingButton;
