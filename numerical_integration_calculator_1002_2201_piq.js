// 代码生成时间: 2025-10-02 22:01:40
 * Numerical Integration Calculator React Component
 * 使用函数组件和Hooks
 * 包含state管理
 * 使用PropTypes进行类型检查
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义PropTypes
const propTypes = {
  function: PropTypes.func.isRequired, // 被积分的函数
  lowerBound: PropTypes.number.isRequired, // 积分下限
  upperBound: PropTypes.number.isRequired, // 积分上限
  step: PropTypes.number, // 步长，默认为0.01
  iterations: PropTypes.number, // 迭代次数，默认为1000
};

// 定义组件的默认属性
const defaultProps = {
  step: 0.01,
  iterations: 1000,
};

// Numerical Integration Calculator组件
const NumericalIntegrationCalculator = ({ function: f, lowerBound, upperBound, step, iterations }) => {
  // 定义state
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  // 计算数值积分
  const calculateIntegral = () => {
    setLoading(true);
    let integral = 0;
    for (let i = 0; i < iterations; i++) {
      const x = lowerBound + (upperBound - lowerBound) * (i / iterations);
      integral += f(x) * step;
    }
    setResult(integral);
    setLoading(false);
  };

  // 渲染组件
  return (
    <div>
      <h1>数值积分计算器</h1>
      <button onClick={calculateIntegral} disabled={loading}>计算积分</button>
      {loading ? <p>计算中...</p> : <p>结果: {result.toFixed(4)}</p>}
    </div>
  );
};

// 设置propTypes和defaultProps
NumericalIntegrationCalculator.propTypes = propTypes;
NumericalIntegrationCalculator.defaultProps = defaultProps;

export default NumericalIntegrationCalculator;