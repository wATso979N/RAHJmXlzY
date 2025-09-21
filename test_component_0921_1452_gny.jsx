// 代码生成时间: 2025-09-21 14:52:48
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的Prop类型
const propTypes = {
  initialCount: PropTypes.number,
  testValue: PropTypes.string
};

// 如果使用TypeScript, 可以这样定义类型
// interface TestComponentProps {
//   initialCount: number;
//   testValue: string;
// }

// 函数组件
const TestComponent = ({ initialCount = 0, testValue }) => {
  // state管理
  const [count, setCount] = useState(initialCount);
  
  // 事件处理函数
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  // Render函数
  return (
    <div>
      <h1>Test Component</h1>
      <p>{testValue}</p>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

TestComponent.propTypes = propTypes;

export default TestComponent;
