// 代码生成时间: 2025-09-18 16:35:52
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// 可以使用TypeScript而不是PropTypes
// import PropTypes from 'prop-types';
// interface ExcelTableGeneratorProps {
//   rows: number;
//   columns: number;
// }

const ExcelTableGenerator = ({ rows, columns }) => {
  // 使用state管理生成的表格数据
  const [data, setData] = useState(Array.from({ length: rows }, () => Array(columns).fill('')););

  // 使用useMemo避免不必要的更新
  const tableData = useMemo(() => {
    return data;
  }, [data]);

  const handleCellChange = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
  };

  return (
    <table>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td key={columnIndex}>
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ExcelTableGenerator.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};

// 如果使用TypeScript，则将PropTypes替换为相应的接口类型并注释掉PropTypes部分

export default ExcelTableGenerator;