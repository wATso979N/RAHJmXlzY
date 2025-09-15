// 代码生成时间: 2025-09-15 22:27:04
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the component's propTypes for type checking
const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onTitleChange: PropTypes.func,
};

// TypeScript type definition
// type TestableComponentProps = {
//   title: string;
//   description?: string;
//   onTitleChange?: (newTitle: string) => void;
// };

const TestableComponent = ({ title, description, onTitleChange }) => {
  // State to manage the component's title
  const [componentTitle, setComponentTitle] = useState(title);

  // Handle the title change
  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setComponentTitle(newTitle);
    if (onTitleChange) {
      onTitleChange(newTitle);
    }
  };

  // Return the component JSX
  return (
    <div>
      <h1>{componentTitle}</h1>
      {description && <p>{description}</p>}
      <input
        type="text"
        value={componentTitle}
        onChange={handleTitleChange}
      />
    </div>
  );
};

// Setting default props
TestableComponent.defaultProps = {
  description: '',
  onTitleChange: () => {},
};

// PropTypes validation
TestableComponent.propTypes = propTypes;

export default TestableComponent;