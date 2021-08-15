import React from "react";
import Sketch from "react-p5";

const Day5 = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.noLoop();
	};

	const draw = (p5) => {
		// Set the default blend mode
    p5.blendMode(p5.BLEND);
  
    // Black background
    let r = p5.random(256);
    let g = p5.random(256);
    let b = p5.random(256);
    p5.background(r, g, b);
    
    // Set foreground as white
    
    p5.fill("#FFFFFF");
    
    // Set x-or / difference blend mode
    p5.blendMode(p5.DIFFERENCE);
    
    // Disable stroke
    p5.noStroke();
  
    // Center of screen
    const x = p5.width / 2;
    const y = p5.height / 2;
    
    // Fraction of screen dim
    const dim = p5.min(p5.width, p5.height);
    const size = dim * 0.5;
    
    p5.translate(0, 50);
    
    // Head
    head(p5, x, y, size);
    
    let top = p5.random(75);
    
    // Left Ear
    ear(p5, x, y, size, top, 1);
    
    // Right Ear
    ear(p5, x, y, size, -top, -1);
    
    p5.push();
    p5.translate(0, 22);
    
    // Nose.
    nose(p5, x, y, size);
    
    // Right Whiskers
    whiskers(p5, x, y, size, 8 );
    
    // Left Whiskers
    whiskers(p5, x, y, size, -2.3);
    p5.pop();
  
    // Right Eye
    eye(p5, x, y, size, -1.2);
    
    // Left Eye
    eye(p5, x, y, size, -0.85);
    
    // Mouth (optional attribute)
    mouth(p5, x, y, size);
  }

  function head(p5, x, y, size) {
    p5.push();
    p5.ellipse(x, y, size, size);
    p5.pop();
  }
  
  function ear(p5, x, y, size, top, multiplier) {
    p5.push();
    p5.translate(multiplier * size / 2, -size);
    p5.triangle(
      top + (x + size / 11), y - size / 11,
      x + (-multiplier) * size / 2, y + size / 2,
      x - size / 256, y + size
    );
    p5.pop();
  }
  
  function nose(p5, x, y, size) {
    p5.push();
    p5.ellipse(x, y, size / 7, size / 11);
    p5.translate( 0, 11);
    p5.triangle(
      x, y + size / 11,
      x + size / 14, y - size / 22,
      x - size / 14, y - size / 22
    );
    p5.pop();
  }
  
  function whiskers(p5, x, y, size, multiplier) {
    p5.rect(x + size / multiplier, y, 77, 11, 11);
    p5.rect(x + size / multiplier, y + 22, 77, 11, 11);
  }
  
  function eye(p5, x, y, size, multiplier) {
    p5.push();
    p5.translate(size + (x / multiplier), y  - size);
    p5.triangle(
      x, y - size / 5,
      x + size / 14, y - size / 22,
      x - size / 14, y - size / 22
    );
    p5.pop();
  }
  
  function mouth(p5, x, y, size) {
    let mouthVisibility = p5.random(1);
    if (mouthVisibility > 0.5) {
      p5.ellipse(x, y + 80, size / 7, size / 11);
    }
  }

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Lucifer Cats
      </p>
      <p>
        <a
          className="App-link"
          href="https://opensea.io/assets/lucifer-cats"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Open Sea
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://polygonscan.com/tx/0x509885cc140f09164fb080edfd79247f26d3fd0fdc39c742cd0668bd1067d687"
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