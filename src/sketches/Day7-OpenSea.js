import React from "react";
import Sketch from "react-p5";

const Day7 = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);

    // Disable animation loop since its a static artwork
    p5.noLoop();
	};

	const draw = (p5) => {
    // Set the default blend mode
    p5.blendMode(p5.BLEND);
    
    // Black background
    p5.background("#0f3c54");
    
    // Set foreground as white
    p5.fill("#eb03a4");
    
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
    
    // Make a rectangle centred on the screen
    p5.rectMode(p5.CENTER);
    p5.rect(x, y, size, size);
    
    // Create a circle slightly offset down and right
    p5.push();
    p5.translate(size / 4, size / 4);
    p5.ellipse(x, y, size, size);
    p5.pop();
    
    // Create a triangle slightly offset up and left
    p5.push();
    p5.translate(-size / 4, -size / 4);
    p5.triangle(
      x, y - size / 2,
      x + size / 2, y + size / 2,
      x - size / 2, y + size / 2
    );
    p5.pop();
	};

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Day 7 - Open Sea
      </p>
      <p>
        <a
          className="App-link"
          href="https://gateway.pinata.cloud/ipfs/QmW1rhmTb9ubSaj46ufjUL1Bteo6tVq73nhps8yunbZ7Kg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IPFS
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://opensea.io/assets/matic/0x255f02a181bb8056cf81946554544f63a2a758c2/4"
          target="_blank"
          rel="noopener noreferrer"
        >
          View NFT on OpenSea
        </a>
      </p>
    </div>
  );
};

export default Day7;