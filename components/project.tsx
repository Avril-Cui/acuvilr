import styles from "./work.module.css";
import Work from "./work";
import Aspect from "./aspect";
import Lift from "./lift";

function Project(props: any) {
  return (
    <div id={props.id}>
      <Work />
      <Aspect />
      <Lift />
    </div>
  );
}

export default Project;
