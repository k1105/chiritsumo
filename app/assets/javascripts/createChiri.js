function createChiri(width, texture, Bodies) {
    const x = width * ( 0.8 * Math.random() + 0.1);
    const y = -Math.random()*100;
    const scale = 0.6
    // 塵の生成
    const chiri = Bodies.trapezoid(x, y, 100*scale, 100*scale, 0.2, 
      {
         density: 10, //密度
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
