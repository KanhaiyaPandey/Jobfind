/* eslint-disable react/prop-types */
import { useState } from "react"
import Wrapper from "../assets/wrappers/ChartsContainer"
import AreaCharts from "./AreaChart"
import BarChartComponent from "./BarChart"

const ChartsContainer = ({data}) => {
    const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaCharts data={data} />}
    </Wrapper>
  )
}

export default ChartsContainer