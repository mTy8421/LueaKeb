import { Container } from "@mui/material";
import ChartBar from "../layouts/ChartBar";
import SideNavBar from "../layouts/SideNavBar";
import Tables from "../layouts/Tables";

export default function Challenge() {
  const title = (
    <div className="container text-center">
      <h1 className="text-2xl">🔥 Top Score</h1>
      <div className="flex mx-auto">
        <ChartBar />
      </div>
      <Container>
        <Tables />
      </Container>
    </div>
  );
  return (
    <>
      <SideNavBar Tag={title} />
    </>
  );
}
