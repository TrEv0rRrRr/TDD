type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return <h1>{name !== "" ? `Hello, ${name}!` : "Hello, guest!"}</h1>;
};

export default Greeting;
