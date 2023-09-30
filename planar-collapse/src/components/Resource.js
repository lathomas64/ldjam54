import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Resource(props) {
      const [count, setCount] = useState(Number(props.count));
      const [capacity, _setCapacity] = useState(Number(props.capacity));
      const [rate, setRate] = useState(Number(props.rate));
      useEffect(() => {
          const interval = setInterval( () => {
              let newCount = count + rate;
              console.log(Date());
              if(newCount < 0)
              {
                  newCount = 0;
              } else if (newCount > capacity)
              {
                  newCount = capacity;
              }
              setCount(newCount);
              setRate(rate * Number(props.rateMult));
        }, 1000);
        return () => clearInterval(interval);
      }, [count, rate, capacity, props.rateMult]);
      
      function handleClick() {
          let newCount = count+1;
          if(newCount > capacity)
          {
              newCount = capacity;
          }
          setCount(newCount);
      }
    return (
        <div id="resRNA" class="resource vb">
          <h3 className="res has-text-info">{props.name}</h3>
          <span id="cntRNA" className="count">{(count).toLocaleString(undefined, {minimumFractionDigits: 0})} / {capacity}</span>
          <span> </span>
          <span id="incRNA" aria-label="{props.name} {rate} per second" className="diff">{(rate).toLocaleString(undefined, {minimumFractionDigits: 0})} /s</span>
          <span> <button onClick={handleClick}> click me </button></span>
        </div>
    );
}