---
layout: page
title: RL-based Control of a Lunar Lander
description:
img: assets/img/lunar_lander/dqn_simulation.gif
importance: 1
category:
giscus_comments: false
---

## Lunar Landing Algorithm Comparison

We compare the performance of four different algorithms for controlling lunar lander simulations:
- **DQN**
- **Q-Learning**
- **SARSA**
- **Monte Carlo**
- **Random**

For each algorithm, we provide both a simulation GIF and a trajectory plot illustrating the landing path.

---

### DQN

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/dqn_simulation.gif" title="DQN Lunar Landing Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/dqn_trajectory.png" title="DQN Trajectory Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  DQN: Simulation (left) and trajectory plot (right).
</div>

---

### Q-Learning

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/qlearning.gif" title="Q-Learning Lunar Landing Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/q_learning.png" title="Q-Learning Trajectory Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Q-Learning: Simulation (left) and trajectory plot (right).
</div>

---

### SARSA

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/sarsa_simulation.gif" title="SARSA Lunar Landing Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/sarsa_trajectory.png" title="SARSA Trajectory Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  SARSA: Simulation (left) and trajectory plot (right).
</div>

---

### Monte Carlo

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/monte_carlo_simulation.gif" title="Monte Carlo Lunar Landing Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/monte_carlo_trajectory.png" title="Monte Carlo Trajectory Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Monte Carlo: Simulation (left) and trajectory plot (right).
</div>

---

### Random

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/random_simulation.gif" title="Random Lunar Landing Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/lunar_lander/random_trajectory.png" title="Random Trajectory Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Random: Simulation (left) and trajectory plot (right).
</div>
