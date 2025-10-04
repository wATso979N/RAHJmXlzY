// 代码生成时间: 2025-10-05 03:39:23
// matrixOperationComponent.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 矩阵类型定义
interface Matrix {
  rows: number;
  columns: number;
  data: number[][];
}

// 矩阵运算组件
const MatrixOperationComponent = ({ matrix }: { matrix: Matrix }) => {
  const [result, setResult] = useState<Matrix | null>(null);

  // 矩阵加法
  const addMatrices = (matrixA: Matrix, matrixB: Matrix): Matrix | null => {
    if (matrixA.rows !== matrixB.rows || matrixA.columns !== matrixB.columns) {
      return null;
    }

    return {
      rows: matrixA.rows,
      columns: matrixA.columns,
      data: matrixA.data.map((row, rowIndex) =>
        row.map((_, columnIndex) => matrixA.data[rowIndex][columnIndex] + matrixB.data[rowIndex][columnIndex])
      )
    };
  };

  // 矩阵乘法
  const multiplyMatrices = (matrixA: Matrix, matrixB: Matrix): Matrix | null => {
    if (matrixA.columns !== matrixB.rows) {
      return null;
    }

    return {
      rows: matrixA.rows,
      columns: matrixB.columns,
      data: matrixA.data.map((row, rowIndex) =>
        row.map((_, columnIndex) =>
          matrixA.data[rowIndex].reduce((acc, value, colIndex) => {
            return acc + value * matrixB.data[colIndex][columnIndex];
          }, 0)
        )
      )
    };
  };

  // 执行矩阵运算
  const performOperation = (operation: 'add' | 'multiply') => {
    switch (operation) {
      case 'add':
        setResult(addMatrices(matrix, matrix)); // 这里使用相同的矩阵作为示例
        break;
      case 'multiply':
        setResult(multiplyMatrices(matrix, matrix)); // 这里使用相同的矩阵作为示例
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div>
      <h1>Matrix Operation Component</h1>
      <button onClick={() => performOperation('add')}>Add Matrices</button>
      <button onClick={() => performOperation('multiply')}>Multiply Matrices</button>
      {result ? (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <p>No operation performed.</p>
      )}
    </div>
  );
};

// PropTypes校验
MatrixOperationComponent.propTypes = {
  matrix: PropTypes.shape({
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  }).isRequired,
};

export default MatrixOperationComponent;