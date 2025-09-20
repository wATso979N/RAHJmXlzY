// 代码生成时间: 2025-09-20 11:10:27
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto';

// 定义PropTypes或TypeScript类型
const propTypes = {
  // 你可以在这里添加其他props的类型检查
};

// 使用函数组件和Hooks实现哈希值计算工具
const HashCalculator = () => {
  // state管理
  const [inputValue, setInputValue] = useState(''); // 用户输入的值
  const [hashValue, setHashValue] = useState(''); // 计算出的哈希值

  // 计算哈希值的函数
  const calculateHash = () => {
    const hash = createHash('sha256');
    hash.update(inputValue);
    setHashValue(hash.digest('hex')); // 设置哈希值为十六进制字符串
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text to calculate hash"
      />
      <button onClick={calculateHash}>Calculate Hash</button>
      <div>Hash Value: {hashValue}</div>
    </div>
  );
};

HashCalculator.propTypes = propTypes;

export default HashCalculator;
    