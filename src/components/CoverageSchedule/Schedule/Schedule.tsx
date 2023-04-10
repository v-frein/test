import { PureComponent } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { Type } from "./Type";

import styles from "./Schedule.module.css";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props as any;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-55)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 700, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
];

export const Schedule = () => {
  return (
    <>
      <div className={styles.typesContainer}>
        <Type name="Тип" />
        <Type name="Тип" />
        <Type name="Тип" />
        <Type name="Тип" />
      </div>
      <ResponsiveContainer width={700} height={250}>
        <AreaChart
          width={700}
          height={250}
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
