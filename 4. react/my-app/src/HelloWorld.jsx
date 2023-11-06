import { Age } from "./Age";
import { Avatar } from "./Avatar";

export function HelloWorld({ name = "stranger", age }) {
  return (
    <>
      <h1>Hello {name}!!!</h1>
      <Age age={age} />
      <Avatar src="https://images.unsplash.com/photo-1682686581221-c126206d12f0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Avatar src="https://images.unsplash.com/photo-1691962897049-f01c8925a46c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" />
    </>
  );
}
