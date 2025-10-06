// 代码生成时间: 2025-10-06 20:01:40
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of an individual breadcrumb item.
const breadcrumbItemShape = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// Define the shape of the breadcrumb items array.
const breadcrumbShape = PropTypes.arrayOf(breadcrumbItemShape);

// The BreadcrumbNav component.
const BreadcrumbNav = ({ breadcrumbs }) => {
  const [activeItem, setActiveItem] = useState(breadcrumbs[0]);

  // Handler to set the active breadcrumb item.
  const handleSetActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={index} className={item === activeItem ? 'active' : ''}>
            <a href={item.href} onClick={() => handleSetActiveItem(item)} >{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

// PropTypes for the component.
BreadcrumbNav.propTypes = {
  breadcrumbs: breadcrumbShape,
};

// Default props in case breadcrumbs is not provided.
BreadcrumbNav.defaultProps = {
  breadcrumbs: [],
};

export default BreadcrumbNav;