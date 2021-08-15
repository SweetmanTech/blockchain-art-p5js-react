import React from "react";
import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";

let minFrequency = 0.5;
let maxFrequency = 2;
let minAmplitude = 0.05;
let maxAmplitude = 0.5;
const canvasWidth = 500;
const canvasHeight = 500;

// Included in index.html
// This is an alternative to p5.js builtin 'noise' function,
// It provides 4D noise and returns a value between -1 and 1
const simplex = new SimplexNoise();

const Day5 = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    p5.mouseX = canvasWidth / 2;
    p5.mouseY = canvasHeight / 2;
	};

	const draw = (p5) => {
		p5.background(0);
  
    const frequency = p5.lerp(minFrequency, maxFrequency, p5.mouseX / canvasWidth);
    const amplitude = p5.lerp(minAmplitude, maxAmplitude, p5.mouseY / canvasHeight);
    
    const dim = Math.min(canvasWidth, canvasHeight);
    
    // Draw the background
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(dim * 0.0075);
    
    const time = p5.millis() / 1000;
    const rows = 10;

    // Draw each line
    for (let y = 0; y < rows; y++) {
        // Determine the Y position of the line
        const v = rows <= 1 ? 0.5 : y / (rows - 1);
        const py = v * canvasHeight;
        drawNoiseLine({
            v,
            start: [ 0, py ],
            end: [ canvasWidth, py ],
            amplitude: amplitude * canvasHeight,
            frequency,
            time: time * 0.5,
            steps: 150,
            p5
        });
    }
	};

  const drawNoiseLine = (opt = {}) => {
      const {
        v,
        start,
        end,
        steps = 10,
        frequency = 1,
        time = 0,
        amplitude = 1,
        p5
      } = opt;
      
      const [ xStart, yStart ] = start;
      const [ xEnd, yEnd ] = end;
    
      // Create a line by walking N steps and interpolating
      // from start to end point at each interval
      p5.beginShape();
      for (let i = 0; i < steps; i++) {
        // Get interpolation factor between 0..1
        const t = steps <= 1 ? 0.5 : i / (steps - 1);
    
        // Interpolate X position
        const x = p5.lerp(xStart, xEnd, t);
        
        // Interpolate Y position
        let y = p5.lerp(yStart, yEnd, t);
        
        // Offset Y position by noise
        y += (simplex.noise3D(t * frequency + time, v * frequency, time)) * amplitude;
        
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    }

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Noisy Day 5
      </p>
      <p>
        <a
          className="App-link"
          href="https://gateway.pinata.cloud/ipfs/QmabqQ9S3XwubugA4rRq44UrJBL1sWuCXqVfsNiFAUYgs9"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IPFS
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://polygonscan.com/tx/0x8b1920d332fdf95edd859b96aa3f25ba4867ae6bebe46ead34e699bddd5842c7"
          target="_blank"
          rel="noopener noreferrer"
        >
          View NFT on PolygonScan
        </a>
      </p>
    </div>
  );
};

export default Day5;