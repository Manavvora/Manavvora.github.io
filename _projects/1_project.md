---
layout: page
title: Deep RL for Intelligent Traffic Light Control
description:
img: assets/img/traffic_light/Simulation_ppo.gif
importance: 1
category:
related_publications: false
---

## The Environment

We use the **SUMO Traffic Simulator** to model our intersection. Each simulation episode runs for **5400 steps**, and each step is **1 second**. Vehicles are generated following a *Weibull distribution*. For each generated vehicle, the source and destination arms are chosen randomly.

For the **high-traffic scenario**, we have:
- **1000 cars** approaching the intersection from each arm (evenly distributed).
- **75%** of these vehicles go straight.
- The remaining **25%** turn either left or right.

Below is an image illustrating the intersection we are modeling:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/traffic_light/traffic_intersection.png" title="Intersection Layout" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Intersection Layout
</div>

---

## Comparing DQN and PPO

We compare two Deep Reinforcement Learning algorithms: **DQN** and **PPO**.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/traffic_light/Simulation_dqn.gif" title="DQN-based traffic light control" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/traffic_light/Simulation_ppo.gif" title="PPO-based traffic light control" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  DQN (left) vs. PPO (right) traffic light control simulations.
</div>

**Observations**:  
PPO achieves a shorter average delay **much faster** than DQN. Over time, however, both algorithms ultimately converge to **similar average delay values** by the end of training.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/traffic_light/avg_delay.png" title="Average Delay Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Average delay evolution during training.
</div>
