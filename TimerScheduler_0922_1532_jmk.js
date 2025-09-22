// 代码生成时间: 2025-09-22 15:32:47
 * A React functional component that schedules tasks using setInterval
 * and manages state with useState.
 * Uses PropTypes for type checking.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TimerScheduler = ({ task, interval }) => {
  // State to store the current count or result
  const [count, setCount] = useState(0);

  // Effect hook to set up the interval
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      task();
    }, interval);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, [task, interval]);

  // Render the component
  return (
    <div>
      <h1>Timer Scheduler</h1>
      <p>Count: {count}</p>
    </div>
  );
};

// PropTypes for type checking
TimerScheduler.propTypes = {
  task: PropTypes.func.isRequired,
  interval: PropTypes.number.isRequired,
};

export default TimerScheduler;
