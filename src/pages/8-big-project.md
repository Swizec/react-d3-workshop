---
title: Swizec's transport expenses dataviz
---

It's time to build something cool.

We're going to build a 2-chart dashboard. A piechart and a barchart showing the same data. Hovering one of the charts, reflects on the other. Both change the title to show you what you're hovering over.

As our dataset we're going to borrow a CSV file I got from my expense tracking app. Specifically the `transport` category because I got curious one evening. Ubers really add up.

![](../images/connected-dataviz.gif)

We're using the code-along approach 👇

1.  Swizec explains what we're going to do
2.  Swizec codes a part of it and makes a commit
3.  You fill in the blanks
4.  Swizec shows you how to fill in the blanks

The following is an outline of what we're doing to help us keep on track.

We're going to copypasta a lot of data manipulation code from my original repo. Writing allt that isn't fun and is often the most time consuming part of building a dataviz project.

## Clone starter repo

I've prepared a starter repo that comes with

*   dataset
*   data helper functions
*   stubbed out components and files
*   all necessary dependencies

[expenses dashboard starter repo](https://github.com/Swizec/react-d3-workshop-mar-2018)

[final solution](https://github.com/Swizec/react-d3-workshop-expenses-example)

```
$ cd
$ yarn/npm install
```

You now have everything you need to get started.

## Load and parse data

## Render a barchart

### Set up scales

### Render Bars in a loop

### Make Bar component

## Render a piechart

### Set up pie generator

### Render arcs in a loop

### Set up arc generator

### Render arc

## Connect hover effects

### Add hover callbacks to bars and arcs

### Track selected tag in main component

### Pass selected tag down to arcs and bars

### Change color of selected element

### Render name of current tag

## Add data streaming animation

### Add 1 datapoint per N milliseconds

### Add transitions to arcs

### Render a count of datapoints

## Bonus

### Add axes to barchart

### Add transitions to barchart

### Render more charts for different subsets of data
