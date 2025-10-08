// 代码生成时间: 2025-10-09 03:34:21
 * Manages state internally and uses PropTypes for type checking.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AutoCompleteSearch = ({ suggestions }) => {
  // State to keep track of the user input
  const [inputValue, setInputValue] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const handleInputChange = (e) => {
    // Only show suggestions if input value has more than 2 characters
    if (e.target.value.length > 2) {
      setInputValue(e.target.value);
      setSuggestionsVisible(true);
    } else {
      setInputValue(e.target.value);
      setSuggestionsVisible(false);
    }
  };

  const selectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestionsVisible(false);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="autocomplete-input"
      />
      {suggestionsVisible && (
        <div className="autocomplete-suggestions">
          {suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          ).map((suggestion) => (
            <div
              key={suggestion}
              className="suggestion-item"
              onClick={() => selectSuggestion(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// PropTypes or TypeScript types for the suggestions prop
AutoCompleteSearch.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AutoCompleteSearch;