import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Resource(props) {
      const [count, setCount] = useState(Number(props.count));
      const [capacity, _setCapacity] = useState(Number(props.capacity));
      const [rate, setRate] = useState(Number(props.rate));

      function playSound() {
          if(props.audio)
          {
              let url = "/ldjam54/assets/crumble.mp3";
              let audio = new Audio(url);
              let promise = audio.play();
              if(promise) {
                  promise.catch(function(error) {console.log('may we have permission for audio?'); });
              }
          }
      }

      useEffect(() => {
          const interval = setInterval( () => {
              let newCount = count + rate;
              if(newCount <= 0)
              {
                  newCount = 0;
                  if(props.critical)
                  {
                      triggerEnd();
                  }
              } else if (newCount > capacity)
              {
                  newCount = capacity;
              }
              if(Math.random() < .1)
              {
                 playSound();
              }
              setCount(newCount);
              setRate(rate * Number(props.rateMult));
        }, 1000);
        return () => clearInterval(interval);
      }, [count, rate, capacity, props, playSound]);
      
      function handleClick() {
          let newCount = count+1;
          if(newCount > capacity)
          {
              newCount = capacity;
          }
          setCount(newCount);
      }
      function triggerEnd() {
          const dialog = document.querySelector("#gameOverDialog");
          dialog.showModal();
      }
      
    return (
        <div id={'res'+props.name} className={"resource vb "+props.className}>
          <h3 className="res has-text-info">{props.name}</h3>
          <span id={'cnt'+props.name} className="count">{(count).toLocaleString(undefined, {minimumFractionDigits: 0})} / {capacity}</span>
          <span> </span>
          <span id={'inc'+props.name} aria-label="{props.name} {rate} per second" className="diff">{(rate).toLocaleString(undefined, {minimumFractionDigits: 0})} /s</span>
          <span> <button onClick={handleClick}> {props.clickText} </button></span>
        </div>
    );
}