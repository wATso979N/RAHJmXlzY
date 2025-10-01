// 代码生成时间: 2025-10-02 03:51:22
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the item object in the breadcrumb array.
const breadcrumbItemType = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
# 优化算法效率
};

// Define the shape of the breadcrumb items array.
const breadcrumbItemsType = PropTypes.arrayOf(breadcrumbItemType);
# FIXME: 处理边界情况

const BreadcrumbNav = ({ items }) => {
  // State to keep track of the selected breadcrumb item.
  const [selectedItem, setSelectedItem] = useState(items[0]);

  // Handle breadcrumb item click.
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <nav aria-label='Breadcrumb'>
      <ol className='breadcrumb'>
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${item === selectedItem ? 'active' : ''}`}>
            <a href={item.url} onClick={() => handleItemClick(item)} aria-current='page'>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
# 改进用户体验

// PropTypes for the breadcrumb items.
BreadcrumbNav.propTypes = {
  items: breadcrumbItemsType,
};

// Default props.
# 增强安全性
BreadcrumbNav.defaultProps = {
  items: [],
};

export default BreadcrumbNav;