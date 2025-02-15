---
layout: page
title: ROS2 Maze Solving and Mapping
description: ROS2-based course project on localization, navigation, and path planning for a differential drive robot in a maze.
img: assets/img/ros2_maze/mapping.gif
importance: 2
category: 
giscus_comments: false
---

This project is part of an online course that explores maze-solving behavior using ROS2. The course integrates key robotics algorithms with computer vision techniques to enhance motion planning. The focus here is on three critical aspects:

### Localization

Localization allows the robot to accurately determine its position within the maze using sensor fusion and computer vision inputs. The integration of computer vision aids in recognizing environmental features, which improves the robot's pose estimation and overall situational awareness.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ros2_maze/mapping.gif" title="Mapping Process" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The robot uses computer vision and sensor data to dynamically create a map of the maze.
</div>

### Path Planning

Path planning calculates the optimal route from the robot’s current location to its goal. Advanced algorithms, enhanced by computer vision for improved environmental understanding, determine efficient and safe paths for a differential drive robot. This integration ensures robust performance even in visually complex or cluttered maze environments.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ros2_maze/path_planning.gif" title="Path Planning Algorithm" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The path planning algorithm computes optimal routes in real time, integrating computer vision for enhanced obstacle detection.
</div>

### Navigation

With reliable localization, the navigation system enables the robot to safely maneuver through complex maze environments. Computer vision complements traditional sensor data by providing real-time obstacle detection, ensuring that the robot can adjust its trajectory dynamically to avoid collisions.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ros2_maze/maze_solving.gif" title="Maze Solving Behavior" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The maze solving behavior of the robot, powered by ROS2 and computer vision.
</div>


