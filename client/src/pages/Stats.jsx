/* eslint-disable no-unused-vars */
import ChartsContainer from "../components/ChartsContainer";
import StatsContainer from "../components/StatsContainer";
import { useLoaderData } from "react-router-dom";

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}

export default Stats