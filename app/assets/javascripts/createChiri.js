function createChiri(width, texture, Bodies) {
    const x = width * ( 0.1 * rnorm() + 0.5);
    const y = -Math.random()*100;
    const scale = 0.8
    // 塵の生成
    const chiri = Bodies.trapezoid(x, y, 50*scale, 50*scale, 0.2, 
      {
         density: 1, //密度
         frictionAir: 0.1, //空気抵抗
         restitution: 0, //反発係数
         friction: 0.8, //摩擦
        render: {
          sprite: {
            texture: texture,
            xScale: scale,
            yScale: scale,
          }
        }
      });

      return chiri;
  };
