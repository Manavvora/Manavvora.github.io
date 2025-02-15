---
layout: page
title: Reachability Based Risk-Aware Planner
description: A path planning algorithm that generates safe trajectories by minimizing risk around obstacles.
img: assets/img/rip/rip.gif
importance: 1
category: 
related_publications: false
---

## RiP-Planner Overview

**RiP: Reachability based (Ri)sk Aware Planner**

RiP is a path planning algorithm which leverages reachability-based trajectory design to generate a minimum risk path for a vehicle in the presence of obstacles. The risk is minimized by assigning risk boundaries around the obstacles and then optimizing the path for both length and risk. This algorithm is ideally suited for missions where safety is paramount and obstacles are adversarial.

A sample output of our algorithm is shown below. As observed, the final trajectory avoids the low-risk zone for as long as possible and completely steers clear of the high-risk zone for different goal points.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/rip/rip2.png" title="RiP-Planner Output Trajectory" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  RiP-Planner Output: The final trajectory avoids high-risk zones while minimizing overall path length.
</div>

---

## RiP-Planner Simulation

Below is an animated simulation demonstrating the RiP-Planner in action:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/rip/rip.gif" title="RiP-Planner Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  RiP-Planner Simulation: Visual demonstration of the planner generating safe trajectories.
</div>
