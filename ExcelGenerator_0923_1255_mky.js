// 代码生成时间: 2025-09-23 12:55:56
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript 类型定义
type ExcelGeneratorProps = {
  // 可以添加更多的props类型定义
  columns: Array<{ key: string; label: string }>;
  rows: number;
  defaultRowData?: any;
};

function ExcelGenerator({ columns, rows, defaultRowData = {} }: ExcelGeneratorProps) {
  // 状态管理
  const [data, setData] = useState<Array<any>>(new Array(rows).fill(null).map(() => ({ ...defaultRowData })));

  // 添加行的函数
  const addRow = () => {
    setData(prevData => [...prevData, { ...defaultRowData }]);
  };

  // 移除行的函数
  const removeRow = (index: number) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div>
      {columns.map(column => (
        // 列标题
        <div key={column.key}>{column.label}</div>
      ))}
      {data.map((row, index) => (
        // 每行数据
        <div key={index}>
          {columns.map(column => (
            <input
              type='text'
              key={column.key}
              value={row[column.key] ?? ''}
              onChange={(e) => {
                const newData = [...data];
                newData[index] = { ...newData[index], [column.key]: e.target.value };
                setData(newData);
              }}/>
          ))}
          <button onClick={() => removeRow(index)}>Remove Row</button>
        </div>
      ))}
      <button onClick={addRow}>Add Row</button>
    </div>
  );
}

// PropTypes 定义
ExcelGenerator.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.number.isRequired,
  defaultRowData: PropTypes.object,
};

export default ExcelGenerator;