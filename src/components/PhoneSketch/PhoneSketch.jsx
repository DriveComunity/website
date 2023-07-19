import Sketch from "react-p5";

function PhoneSketch() {
  let waveHeight;
  let waveCount;
  let waveSpeed;
  let waveOffset;
  let frameImage;

  function preload(p) {
    frameImage = p.loadImage("src/assets/mockup-c.png");
  }

  const setup = (p, canvasParentRef) => {
    p.createCanvas(frameImage.width, frameImage.height).parent(canvasParentRef);
    waveHeight = 50; // Height
    waveCount = 12; // Number
    waveSpeed = 0.02; // Speed
    waveOffset = 0;
  };

  const draw = (p) => {
    p.background(255);
    waveOffset += waveSpeed;

    for (let i = 0; i <= waveCount; i++) {
      const y = p.map(i, 0, waveCount, 0, p.height); // Y-coordinate

      if (i % 2 === 0) {
        p.fill(36, 160, 104);
      } else {
        p.fill(211);
      }

      p.beginShape();
      for (let x = 0; x <= p.width; x++) {
        const waveOffsetX = (x / p.width) * p.TWO_PI;
        const waveOffsetY = p.sin(waveOffset + waveOffsetX) * waveHeight;
        p.vertex(x, y + waveOffsetY);
      }
      p.vertex(p.width, y + waveHeight);
      p.vertex(p.width, y);
      p.endShape(p.CLOSE);
    }
    p.image(frameImage, 0, 0);
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
}

export default PhoneSketch;
