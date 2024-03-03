import { BarChart } from "@mui/x-charts/BarChart";
export default function ChartBar() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["bar A", "bar B", "bar C"],
          scaleType: "band",
        },
      ]}
      leftAxis={null}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
