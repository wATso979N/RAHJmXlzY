// 代码生成时间: 2025-10-01 18:25:45
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropTypes
const propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// LearningResources组件
const LearningResources = ({ resources }) => {
  // 使用useState钩子管理state
  const [filteredResources, setFilteredResources] = useState(resources);

  // 过滤资源的函数
  const filterResources = (category) => {
    setFilteredResources(
      resources.filter((resource) => resource.category === category)
    );
  };

  return (
    <div>
      <h1>Learning Resources</h1>
      <ul>
        {filteredResources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 设置defaultProps
LearningResources.defaultProps = {
  resources: [],
};

// 设置propTypes
LearningResources.propTypes = propTypes;

export default LearningResources;
