import React, { useState } from 'react';
import { useEffect } from 'react';

function FastState() {
  const [value, setValue] = useState(0);
  const [valueWithRef,setValueWithRef ]= useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTimeout(() => {
            setValue(value + 1);
            setValueWithRef(valueWithRef + 1);
           
        }, 1000);
    }, 100);
    return () => clearInterval(intervalId);
  }, [value, setValue, valueWithRef ])

  return (
    <div>
        <p>
          Fast State: {value}
          <br />
          Fast State Correct: {valueWithRef}
        </p>
    </div>
  );
}

export default FastState;