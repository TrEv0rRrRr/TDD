type Props = {
  tasks: string[];
};

const ToDo = ({ tasks }: Props) => {
  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </>
  );
};

export default ToDo;
