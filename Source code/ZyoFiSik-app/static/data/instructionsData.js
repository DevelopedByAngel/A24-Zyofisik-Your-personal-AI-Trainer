instructionsData = [
  {
    title: "Waiter Curl",
    svg: `<circle cx="100" cy="35"
    r="20"
    style="
      fill: var(--contrast);
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  />
  <path
    d="M100 55 L100 120 L125 180 M75 180 L100 120 "
    style="
      fill: transparent;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  />
  <path 
    d="M100 70 L90 70 L80 100 L100 130 M100 70 L110 70 L115 100 L100 130"
    style="
      fill: transparent;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  >
    <animate
      id="start"
      attributeName="d"
      attributeType="XML"
      from="M100 70 L90 70 L80 100 L100 130 M100 70 L110 70 L115 100 L100 130"
      to="M100 70 L90 70 L80 100 L100 90 M100 70 L110 70 L115 100 L100 90"
      dur="2s"
      begin="0s;stop.end"
      fill="freeze"
    />
    <animate
      id="stop"
      attributeName="d"
      attributeType="XML"
      from="M100 70 L90 70 L80 100 L100 80 M100 70 L110 70 L115 100 L100 80"
      to="M100 70 L90 70 L80 100 L100 130 M100 70 L110 70 L115 100 L100 130"
      dur="2s"
      begin="start.end"
    />
  </path>
  <!-- d="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z" -->
  <path
    d="M100 130 C87,130 90,123 100,123 C113,123 110,130 100,130 Z M100 130 L100 150 Z M100 150 C87,150 90,143 100,143 C113,143 110,150 100,150 Z"
    style="
      fill: var(--contrast);
      fill-opacity: 0.8;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  >
    <animate
      id="start"
      attributeName="d"
      attributeType="XML"
      from="M100 130 C87,130 90,123 100,123 C113,123 110,130 100,130 Z M100 130 L100 150 Z M100 150 C87,150 90,143 100,143 C113,143 110,150 100,150 Z"
      to="M100 90 C87,90 90,83 100,83 C113,83 110,90 100,90 Z M100 90 L100 110 Z M100 110 C87,110 90,103 100,103 C113,103 110,110 100,110 Z"
      dur="2s"
      begin="0s;stop.end"
    />
    <animate
      id="stop"
      attributeName="d"
      attributeType="XML"
      from="M100 90 C87,90 90,83 100,83 C113,83 110,90 100,90 Z M100 90 L100 110 Z M100 110 C87,110 90,103 100,103 C113,103 110,110 100,110 Z"
      to="M100 130 C87,130 90,123 100,123 C113,123 110,130 100,130 Z M100 130 L100 150 Z M100 150 C87,150 90,143 100,143 C113,143 110,150 100,150 Z"
      dur="2s"
      begin="start.end"
    />
  </path>`,
    steps: `<span>Cup one end of adumbbell with both of your hands and hold the dumbbell in front of your thighs.</span>
    <span>Curl the weight toward your chest while keeping your elbows still.</span>
    <span>Ensure that you keep the top end of the dumbbell facing straight up at all times.</span>
    <span>Forcefully contract your biceps at the top of the rep.</span>
    <span>Lower the weight under control until your arms are almost locked out.</span>`,
    url:'https://youtu.be/jt76fPbTdL4',
  },
  {
    title: "Dumbbell curl",
    svg: `<circle cx="100" cy="35"
        r="20"
        style="
          fill: var(--contrast);
          stroke: var(--contrast);
          stroke-width: 1.5;
        "
      />
      <path
        d="M100 55 L100 120 L125 180 M75 180 L100 120 M100 110 L80 100 L90 70 L100 70"
        style="
          fill: transparent;
          stroke: var(--contrast);
          stroke-width: 1.5;
        "
      />
      <path
        d="M100 70 L110 70 L115 100 L120 120"
        style="
          fill: transparent;
          stroke: var(--contrast);
          stroke-width: 1.5;
        "
      >
        <animate
          id="start"
          attributeName="d"
          attributeType="XML"
          from="M100 70 L110 70 L115 100 L120 120"
          to="M100 70 L110 70 L117 100 L125 80"
          dur="2s"
          begin="0s;stop.end"
          fill="freeze"
        />
        <animate
          id="stop"
          attributeName="d"
          attributeType="XML"
          from="M100 70 L110 70 L117 100 L125 80"
          to="M100 70 L110 70 L115 100 L120 120"
          dur="2s"
          begin="start.end"
        />
      </path>
      <path
        d="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
        style="
          fill: var(--contrast);
          fill-opacity: 0.8;
          stroke: var(--contrast);
          stroke-width: 1.5;
        "
      >
        <animate
          id="start"
          attributeName="d"
          attributeType="XML"
          from="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
          to="M110 90 C102,89 102,71 110,70 C118,71 118,89, 110,90 Z M117 80 L133 80 Z M140,90 C133,89 133,71 140,70 C148,71 148,89 140,90 Z"
          dur="2s"
          begin="0s;stop.end"
        />
        <animate
          id="stop"
          attributeName="d"
          attributeType="XML"
          from="M110 90 C102,89 102,71 110,70 C118,71 118,89, 110,90 Z M117 80 L133 80 Z M140,90 C133,89 133,71 140,70 C148,71 148,89 140,90 Z"
          to="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
          dur="2s"
          begin="start.end"
        />
      </path>`,
    steps: `<span>
      Stand straight with a dumbbell in each hand, your feet
      shoulder-width apart and hands by your sides.</span
    ><span> Squeeze the biceps and lift the dumbbells.</span
    ><span>
      Keep the elbows close to your body and the upper arms stationary,
      only the forearms should move. </span
    ><span
      >Once the dumbbells are at shoulder level, slowly lower the arms
      to the starting position.</span
    ><span> Repeat</span>`,
    url:'https://youtu.be/in7PaeYlhrM',
  },
  {
    title: "Hammer Curl",
    svg: ` <circle cx="100" cy="35"
    r="20"
    style="
      fill: var(--contrast);
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  />
  <path
    d="M100 55 L100 120 L125 180 M75 180 L100 120 M100 110 L80 100 L90 70 L100 70"
    style="
      fill: transparent;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  />
  <path
    d="M100 70 L110 70 L115 100 L120 120"
    style="
      fill: transparent;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  >
    <animate
      id="start"
      attributeName="d"
      attributeType="XML"
      from="M100 70 L110 70 L115 100 L120 120"
      to="M100 70 L110 70 L117 100 L125 80"
      dur="2s"
      begin="0s;stop.end"
      fill="freeze"
    />
    <animate
      id="stop"
      attributeName="d"
      attributeType="XML"
      from="M100 70 L110 70 L117 100 L125 80"
      to="M100 70 L110 70 L115 100 L120 120"
      dur="2s"
      begin="start.end"
    />
  </path>
  <path
    d="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
    style="
      fill: var(--contrast);
      fill-opacity: 0.8;
      stroke: var(--contrast);
      stroke-width: 1.5;
    "
  >
    <animate
      id="start"
      attributeName="d"
      attributeType="XML"
      from="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
      to="M110 90 C102,89 102,71 110,70 C118,71 118,89, 110,90 Z M117 80 L133 80 Z M140,90 C133,89 133,71 140,70 C148,71 148,89 140,90 Z"
      dur="2s"
      begin="0s;stop.end"
    />
    <animate
      id="stop"
      attributeName="d"
      attributeType="XML"
      from="M110 90 C102,89 102,71 110,70 C118,71 118,89, 110,90 Z M117 80 L133 80 Z M140,90 C133,89 133,71 140,70 C148,71 148,89 140,90 Z"
      to="M105 130 C97,129 97,111 105,110 C113,111 113,129, 105,130 Z M112 120 L128 120 Z M135,130 C127,129 127,111 135,110 C143,111 143,129 135,130 Z"
      dur="2s"
      begin="start.end"
    />
  </path>`,
    steps: `<span>Stand up straight with a dumbbell in each hand, holding them alongside of you. Your palms should be facing your body. Keep your feet hip-width apart and engage your core to stabilize the body.</span>
    <span>Keep your biceps stationary and start bending at your elbows, lifting one dumbbell.</span>
    <span>Lift until the dumbbell reaches shoulder-level. Hold this briefly, then lower back to the starting position.</span>`,
       url:'https://youtu.be/EWWKFb0q0Uc',
  },
  {
    title: "Push-ups",
    svg: `<circle
      cx="150"
      cy="150"
      r="20"
      style="
        fill: var(--contrast);
        stroke: var(--contrast);
        stroke-width: 1.5;
      "
    >
      <animate
        id="start"
        attributeName="cy"
        attributeType="auto"
        from="100"
        to="150"
        dur="2s"
        begin="0s;stop.end"
        fill="freeze"
      />
      <animate
        id="stop"
        attributeName="cy"
        attributeType="auto"
        from="150"
        to="100"
        dur="2s"
        begin="start.end"
      />
    </circle>
    <path
      d="M130 150 L80 155 L10 157 M80 155 L7 153"
      style="
        fill: transparent;
        stroke: var(--contrast);
        stroke-width: 1.5;
      "
    >
      <animate
        id="start"
        attributeName="d"
        attributeType="XML"
        from="M130 100 L80 120 L10 152 M80 120 L7 150"
        to="M130 150 L80 155 L10 157 M80 155 L7 153"
        dur="2s"
        begin="0s;stop.end"
        fill="freeze"
      />
      <animate
        id="stop"
        attributeName="d"
        attributeType="XML"
        from="M130 150 L80 155 L10 157 M80 155 L7 153"
        to="M130 100 L80 120 L10 152 M80 120 L7 150"
        dur="2s"
        begin="start.end"
      />
    </path>
    <path
      d="M124 150 L115 145 L128 157 M126 152 L120 145 L134 150"
      style="
        fill: transparent;
        stroke: var(--contrast);
        stroke-width: 1.5;
      "
    >
      <animate
        id="start"
        attributeName="d"
        attributeType="XML"
        from="M124 103 L126 120 L128 150 M126 102 L130 120 L134 148"
        to="M124 150 L115 145 L128 157 M126 152 L120 145 L134 150"
        dur="2s"
        begin="0s;stop.end"
        fill="freeze"
      />
      <animate
        id="stop"
        attributeName="d"
        attributeType="XML"
        from="M124 150 L115 145 L128 157 M126 152 L120 145 L134 150"
        to="M124 103 L126 120 L128 150 M126 102 L130 120 L134 148"
        dur="2s"
        begin="start.end"
      />
    </path>`,
    steps: `<span>Get on the ground and get on all fours. </span><span>Take your legs and make them straight as if you’re standing on the ground but keep your legs together not spread. Take your hands and have them shoulder width apart.</span>
      <span>To actually do a push up one must make their arms into 90 degree angles. Go down into the 90 degree angles then immediately come up. This basic push up works your biceps and broadens your chest.
      </span>`,
      url:'https://youtu.be/IODxDxX7oi4',
  },
  {
    title: "Squats",
    svg: `<circle
      cx="100"
      cy="40"
      r="20"
      style="
        fill: var(--contrast);
        stroke: var(--contrast);
        stroke-width: 1.5;
      "
    >
      <animate
        id="start1"
        attributeName="cy"
        attributeType="auto"
        from="40"
        to="100"
        dur="2s"
        begin="0s;stop1.end"
      />
      <animate
        id="stop1"
        attributeName="cy"
        attributeType="auto"
        from="100"
        to="40"
        dur="2s"
        begin="start1.end"
      />
    </circle>
    <path
      d="M95 120 L95 175 L121 150 L106 180 M95 175 L117 150 L102 180 M95 130 L110 127 L125 125 M95 132 L110 130 L123 127"
      style="
        fill: transparent;
        stroke: var(--contrast);
        stroke-width: 1.5;
      "
    >
      <animate
        id="start2"
        attributeName="d"
        attributeType="XML"
        from="M100 60 L100 120 L106 150 L106 180 M100 120 L102 150 L102 180 M100 70 L96 90 L102 115 M100 70 L99 90 L106 110"
        to="M95 120 L95 175 L121 150 L106 180 M95 175 L117 150 L102 180 M95 130 L110 127 L125 125 M95 132 L110 130 L123 127"
        dur="2s"
        begin="0s;stop2.end"
        fill="freeze"
      />
      <animate
        id="stop2"
        attributeName="d"
        attributeType="XML"
        from="M95 120 L95 175 L121 150 L106 180 M95 175 L117 150 L102 180 M95 130 L110 127 L125 125 M95 132 L110 130 L123 127"
        to="M100 60 L100 120 L106 150 L106 180 M100 120 L102 150 L102 180 M100 70 L96 90 L102 115 M100 70 L99 90 L106 110"
        dur="2s"
        begin="start2.end"
      />
    </path>`,
    steps: `<span>Plant your feet on the ground</span>
      <span>Bend your knees. </span>
      <span>Lower yourself in a controlled manner</span><span>
      Repeat</span>`,
      url:'https://youtu.be/YaXPRqUwItQ',
  },
];
