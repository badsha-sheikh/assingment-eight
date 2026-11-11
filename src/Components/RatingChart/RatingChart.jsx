import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratings }) => {

  // Reverse data to show 5 stars at the top
  const chartData = [...ratings].reverse();
  // console.log(chartData)

  return (
    <div className="w-full h-[250px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
          />

          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={65}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            formatter={(value) => [
              value.toLocaleString(),
              "Ratings"
            ]}
          />

          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={20}
            radius={[0, 0, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default RatingChart;