import SideNavBar from "../layouts/SideNavBar";
import Tables from "../layouts/Tables";

export default function Works() {
  const title = <Tables />;
  return (
    <>
      <SideNavBar Tag={title} />
    </>
  );
}
