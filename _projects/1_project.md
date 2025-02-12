---
layout: page
title: Capacity and Resource-Aware Scalable Meta-RL
description:
img: assets/img/publication_preview/arch_icaps_final.png
importance: 1
category: research
related_publications: false
---

<!-- Brief Summary -->
<p>
Many real-world sequential repair problems can be effectively modeled using monotonic MDPs with budget and capacity constraints. 
We propose partitioning the multi-component MDP into smaller groups to handle the combinatorial complexity introduced by capacity limits. 
A meta-trained PPO agent then provides near-optimal repair policies for each group. 
Experiments on a large robot fleet confirm our method’s performance and scalability over baselines.
</p>

<p>
We will now discuss our proposed approach to obtain the approximately optimal policy for a budget and capacity-constrained multi-component monotonic MDP. Our approach follows a two-step process, as illustrated by the architectural overview below. In the first step, we partition the large multi-component MDP into <em>r</em> groups by solving a Linear Sum Assignment Problem (LSAP) that maximizes diversity within each group. The total budget is then allocated proportionally based on group size. In the second step, a meta-trained reinforcement learning agent derives an approximately optimal policy for each group.
</p>

<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/arch_icaps_final.png" title="Architectural Overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure: Architectural overview of the proposed approach.
</div>

<p>
For large scenarios—such as the one with 1000 robots and 300 repair technicians—<code>GUROBI</code> produces poor results within the provided time frame, as shown in the figure below. Even with extended runtimes, ILP solvers fail to find high-quality solutions, which highlights the scalability challenges of traditional methods. In contrast, our LSAP-based and meta-PPO approach produces good results.
</p>

<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/icaps/icaps_1000_300.png" title="Performance vs. Baselines" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure: Performance comparison against baselines for 1000 robots and 300 repair technicians.
</div>

<p>
The next figure depicts the computational complexity of our approach as the number of robots increases. The log-log plot demonstrates linear scalability with respect to the swarm size.
</p>

<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/icaps/icaps_comp_complexity.png" title="Computational Complexity Plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure: Computational complexity plot.
</div>

<p>
Additionally, the heatmap below captures the variation in computational time for different combinations of <em>(n, r)</em> pairs. It shows that the overall computational complexity is more sensitive to the number of robots than to the number of repair technicians.
</p>

<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/icaps/icaps_heatmap.png" title="Heatmap of Complexity" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure: Heatmap of computational complexity across different (n, r) pairs.
</div>

<p>
<strong>Conclusions:</strong> In this paper, we present a computationally efficient and scalable algorithm for solving large budget and capacity-constrained multi-component monotonic MDPs. By partitioning the MDP using an LSAP approach and employing a meta-PPO agent, our method outperforms non-partitioning baselines and scales linearly with the number of robots. Future work will extend the algorithm's capabilities to scenarios involving hierarchical budget constraints alongside capacity constraints.
</p>
