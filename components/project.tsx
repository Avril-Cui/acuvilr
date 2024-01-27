import styles from "./work.module.css";
import Work from "./work";
import Aspect from "./aspect";

function Project(props: any) {
  return (
    <div id={props.id}>
      <Work />
      <Aspect />
    </div>
  );
}

export default Project;
