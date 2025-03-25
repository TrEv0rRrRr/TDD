type Props = {
  handleClick: () => void;
};

const GreetingButton = ({ handleClick }: Props) => {
  return <button onClick={handleClick}>Click me!</button>;
};

export default GreetingButton;
