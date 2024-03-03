import SideNavBar from "../layouts/SideNavBar";
import Tables from "../layouts/Tables";

export default function Works() {
  const title = (
    <div>
      <div className="text-center">
        <h1 className="text-2xl">Work Space</h1>
      </div>
      <Tables />
    </div>
  );
  return (
    <>
      <SideNavBar Tag={title} />
    </>
  );
}
