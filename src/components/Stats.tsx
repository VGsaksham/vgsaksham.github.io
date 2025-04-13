
import React from 'react';

interface StatProps {
  value: string;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <div className="text-right mb-14">
      <div className="text-neonGreen text-4xl md:text-5xl lg:text-6xl font-bold">{value}</div>
      <div className="text-white text-sm md:text-base">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="fixed right-12 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
      <Stat value="2+" label="Years of Experience" />
      <Stat value="4+" label="Completed Projects" />
      <Stat value="3k+" label="Hours Worked" />
    </div>
  );
};

export default Stats;
