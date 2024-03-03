import SideNavBar from "../layouts/SideNavBar";
import ChartPie from "../layouts/ChartPie";
import Tables from "../layouts/Tables";
import { Container } from "@mui/material";

export default function Homes() {
  const title = (
    <div>
      <div className="text-center">
        <h1 className="text-2xl">Home</h1>
      </div>
      <div className="flex mt-3">
        <ChartPie />
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
