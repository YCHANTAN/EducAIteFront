import React from 'react';

interface Props {
    data: any[]
}

const Table = ({data}: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-white">
            <th className="px-4 py-2 text-left text-white">Course</th>
            <th className="px-4 py-2 text-left text-white">Units</th>
            <th className="px-4 py-2 text-left text-white">Midterm Grade</th>
            <th className="px-4 py-2 text-left text-white">Final Grade</th>
            <th className="px-4 py-2 text-left text-white">GWA</th>
            <th className="px-4 py-2 text-left text-white">Final Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{item.course}</td>
              <td className="px-4 py-2">{item.units}</td>
              <td className="px-4 py-2">{item.midtermGrade}</td>
              <td className="px-4 py-2">{item.finalGrade}</td>
              <td className="px-4 py-2">{item.gwa}</td>
              <td className="px-4 py-2">{item.finalRemarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;