import { useDeferredValue } from "react";

const Comments = ({ entities = [] }) => {
  const values = useDeferredValue(entities);

  return (
    <ul>
      {values.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export { Comments };
