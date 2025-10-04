// 代码生成时间: 2025-10-04 23:33:45
// React component for handling safety events
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the prop types using PropTypes for better type checking
const propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        severity: PropTypes.oneOf(['low', 'medium', 'high']).isRequired
    })).isRequired,
    onEventHandled: PropTypes.func.isRequired
};

// Function component that manages the state and handles events
const SafetyEventResponder = ({ events, onEventHandled }) => {
    const [handledEvents, setHandledEvents] = useState([]);

    // Handle the event by adding to the handledEvents state
    const handleEvent = (event) => {
        const updatedEvents = handledEvents.concat({ ...event, isHandled: true });
        setHandledEvents(updatedEvents);
        onEventHandled(event);
    };

    return (
        <div>
            {events.map((event) => {
                return (
                    <div key={event.id}>
                        <p>{event.description}</p>
                        <p>Severity: {event.severity}</p>
                        {!event.isHandled && (
                            <button onClick={() => handleEvent(event)}>Handle Event</button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

// Setting the default props in case no events are passed
SafetyEventResponder.defaultProps = {
    events: []
};

// Setting the propTypes
SafetyEventResponder.propTypes = propTypes;

export default SafetyEventResponder;
