// 代码生成时间: 2025-09-17 01:32:00
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropTypes类型
const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// 定义组件的默认属性
const defaultProps = {
  children: null,
};

// NetworkStatusChecker组件
const NetworkStatusChecker = ({ children }) => {
  // 使用useState Hook管理网络状态
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // 使用useEffect Hook监听网络状态变化
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {children(isOnline)}
      {/* 显示当前网络状态 */}
      <p>Network Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

// 设置propTypes和defaultProps
NetworkStatusChecker.propTypes = propTypes;
NetworkStatusChecker.defaultProps = defaultProps;

export default NetworkStatusChecker;