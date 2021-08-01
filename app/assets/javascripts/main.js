  function style_init() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  function init(textures) {

    const width =  window.innerWidth*0.95;
    const height =  window.innerHeight*0.90;
    let { Engine , Render, Composite, Bodies } = Matter;
    let bodies = [];
    let boxRender = { fillStyle: 'rgba(0, 0, 0, 0)', strokeStyle: 'rgba(0, 0, 0, 0)', lineWidth: 0 }

    // create an engine
    let engine = Engine.create();
    
    // create a renderer
    let render = Render.create({
        element: document.getElementById('container'),
        options: {
          width: width,
          height: height,
          background: 'transparent',
          pixelRatio: 2, // Pixel比 スマホ用に2にする
          wireframes: false
        },
        engine: engine
    });

    // 床追加
    bodies.push(Bodies.rectangle(width / 2, height, width, 10, {render: boxRender, isStatic: true}));
    bodies.push(Bodies.rectangle(width, height / 2, 10, height, {render: boxRender, isStatic: true}));
    bodies.push(Bodies.rectangle(0, height / 2, 10, height, {render: boxRender, isStatic: true}));

    // add all of the bodies to the Composite
    Composite.add(engine.world, bodies);
  
    Engine.run(engine);
    Render.run(render);

    for (let i=0; i<textures.length; i++) {
      let chiri = createChiri(width, textures[i], Bodies)
      Matter.Body.setAngle(chiri, Math.random()*6);
      // add all of the bodies to the Composite
      setTimeout(() => {Composite.add(engine.world, chiri)}, 1000*i);
    }
  }
