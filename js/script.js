const scene = new Scene({
    ".container": {}
  }, {
    selector: true,
  });
  
  const item = scene.getItem(".container");
  
  function move(startTime, endTime, left, top, rotate, scale) {
    const frame = Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      }
    })
    item.set({
      [startTime]: frame,
      [endTime]: frame,
    });
  }
  
  
  move(0, 0, 90, 115, 0, 5);
  move(1, 1, 90, 115, 0, 2);
  move(2, 3, 0, 115, 0, 1);
  move(4, 4.5, -100, 0, -90, 2);
  move(5.5, 6, -52, -18, -90, 1.6);
  move(7, 7.5, 30, 45, 0, 2);
  move(8.5, 9,  10, 30, 0, 3);
  move(10, 10.5, 28, 0, 0, 2.2);
  move(11.5, 12, 50, -35, 0, 1.65);
  move(13, 13.5, 35, -70, 0, 2);
  move(14.5, 18, 0, 0, 0, 1);
  
  function typing(text, duration = 1) {
    return Scene.typing({ prefix: "\"", suffix: "\"", property: "content", text: text, duration: duration });
  }
  scene.set({
    "[data-typing='i']:before": typing("I "),
    "[data-typing='frontend']:before": { 1: typing("'m Front-End") },
    "[data-typing='developer']:before": { 1.5: typing("developer") },
    "[data-typing='with']:before": { 3.3: typing("with", 0.5) },
    "[data-typing='javascript']:before": { 4.5: typing("JavaScript") },
    "[data-typing='html']:before": { 6: typing("html") },
    "[data-typing='css']:before": { 7.5: typing("CSS", 0.7) },
    "[data-typing='design']:before": { 9: typing("design") },
    "[data-typing='animation']:before": { 10.5: typing("Animation") },
    "[data-typing='react']:before": { 12: typing("react") },
  });
  
  scene.setPlaySpeed(1);
  scene.setEasing("ease-in-out");
  scene.setIterationCount("infinite");
  scene.playCSS();
  