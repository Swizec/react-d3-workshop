---
title: "Your First App"
---

Now we're building an app. A simple app without *proper* state management at first, but an app non-the-less.

We're going to add gifs from Imgur to go with our Rick quotes. 

![](../images/mortysmindblowers.gif)

# What goes in which component

So, how do you decide what should be a component and what shouldn't? When do you break a file into two? How do you structure your code?

The answers are subjective and often boil down to *"It felt right"*. I can explain this better by drawing pictures and waving my arms.

Ultimately it boils down to this 👇

> If you have to use "and" to describe what your component is for, you should split it up

## Practical exercise

Let's add a video component that plays a video and calls a function when it reaches the end ( `onEnded` ), and a function when you click on the video.

## Unidirectional flow – props 👇 events 👆

Remember that picture from the last section?

![](../images/unidirectional.png)

That's actually a Vue picture. The unidirectional data flow that React popularized was such a great idea that everyone wants to use it now.

At its core the idea is that you can always know what's going on with your app. You have one source of state, you have a set of actions that change it, and your UI reacts to those changes.

I like to think of it as a state machine.

`[whiteboard explanation]`

### Practical exercise

When a video ends, play the next one. Add a skip button.

## Generalized components

HOCs – higher order components – and Render callbacks and render props. Which is best? When do you use them?

Here is an example of a HOC

```javascript
function D3blackbox(D3render) {
  return class Blackbox extends React.Component {
    componentDidMount() { D3render.call(this); }
    componentDidUpdate() { D3render.call(this) }
  
    render() {
      const { x, y } = this.props;
      return <g transform={`translate(${x}, ${y})`} ref="anchor" />;
    }
  }
}
```

[CodePen link](https://codepen.io/swizec/pen/woNjVw)

This particular HOC wraps non-React code in a React component. You can use this approach for all sorts of things where you need to embrace and extend a component.

Although I find that plain old `extend` works just as well in many cases. 

Another approach to building generalized components is the function as children pattern. Famously used by Kent C. Dodds' [downshift](https://codepen.io/swizec/pen/woNjVw) library.

```javascript
const Fac = ({ children }) => (
	<div>
		<h1>One</h1>
		{children({ number: 1 })}
	</div>
);

const PrettyNumber = () => (
    <Fac>
        {({ number }) => (
            <span style={{ color: "amaranth", fontSize: "2em" }}>{number}</span>
        )}
    </Fac>
);
```

[Try in CodePen](codepen://your-first-app/fac)

The idea there is to have a component that deals with logic and instrumentation, but defers rendering to others. Some prefer explicitly calling functions, others just render the children prop.

A similar approach is using render props where you put that callback in a prop.

# Routing

We're going to use Routing more practically tomorrow. Here's a quick explanation.

React Router is designed to be declarative and follow normal React patterns. You declare your routes like this 👇

```jsx
const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/stuff" component={stuff} />
	</Route>
);

<Router routes={routes} history={browserHistory} />
```

Your URL structure then follows the structure of these routes. ReactRouter swaps around what it's rendering based on the route.

And you use `<Link>` to link between pages.

This workshop page is built using [GatsbyJS](https://www.gatsbyjs.org/) and uses ReactRouter behind the scenes.

ReactRouter is a great example of a popular library that uses render props.
