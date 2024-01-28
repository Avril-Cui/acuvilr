import styles from "./work.module.css";
import Work from "./work";
import Aspect from "./aspect";
import Lift from "./lift";
import LiftDevice from "./lift_device";
import Keyboard from "./keyboard";

function Project(props: any) {
  return (
    <div id={props.id}>
      <Work />
      <Aspect />
      <Lift />
      <LiftDevice />
      <Keyboard />
    </div>
  );
}

export default Project;
