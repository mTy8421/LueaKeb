import SideNavBar from "../layouts/SideNavBar";
import ChartPie from "../layouts/ChartPie";
import Tables from "../layouts/Tables";
import { Container } from "@mui/material";

export default function Homes() {
  const title = (
    <div>
      <div className="flex">
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
