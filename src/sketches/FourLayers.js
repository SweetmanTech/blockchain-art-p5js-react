import React from "react";
import Sketch from "react-p5";

const FourLayers = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);

    // Disable animation loop since its a static artwork
    p5.noLoop();
	};

	const draw = (p5) => {
    const layers = ["blockchain", "scaling solutions", "service layer", "communities"];
    const backgroundColors = ["#636362", "#555555", "#7E4343", "#1F1F1F", "#141414", "#000000"];
    const primaryColors = ["#D02128", "#111111", "#313131", "#FFFFFF"];
    const textColors = ["#4F4F4F", "#F2F2F2"];

    // Set the default blend mode
    p5.blendMode(p5.BLEND);
    
    // Black background
    const backgroundColor = backgroundColors[Math.floor(p5.random(backgroundColors.length - 1))];
    p5.background(backgroundColor);

    p5.textSize(32);
    
    p5.rectMode(p5.CENTER);

    for (let i = 0; i < layers.length; i++) {
      const fillColor = primaryColors[Math.floor(p5.random(primaryColors.length - 1))];
      p5.fill(fillColor);
      p5.rect(250, 438 - (i * 125), 500 - (i * 100), 125, 20);
      const textColor = textColors[Math.floor(p5.random(textColors.length - 1))];
      p5.fill(textColor);
      p5.text(`layer ${i + 1}`, 200, 435 - (i * 125));
      p5.text(layers[i], 180 - 2*(layers[i].length), 480 - (i * 125))
    }
	};

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Layer 4 - Justin Drake + David Hoffman
      </p>
      <p>
        <a
          className="App-link"
          href="https://open.spotify.com/episode/1nng155wPM93z47L0Tnoqm?si=E_MxamjzQ9WQHu5h4Qs4XQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Podcast Episode
        </a>
      </p>
    </div>
  );
};

export default FourLayers;