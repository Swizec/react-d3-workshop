---
title: Integrating D3 with React
---

D3 is great out of the box. There's nothing inherently wrong it it at all. It's flexible and gets the job done. You don't necessarily need React nor any other library to create data visualizations.

So why use React? There are a few really good reasons why React makes your data visualization code even better.

# Why

## Declarative visualization

The idea behind declarative visualization is that you can focus on building your logic, not how to render something. Same as we discussed yesterday.

Take this animated alphabet for example. New letters animate in, old letters shuffle around, and dropped letters animate out. Each letter figures out how to do this on its own, you just render them in a loop.

![](../images/alphabet.gif)

[Try it live](http://swizec.github.io/react-d3-enter-exit-transitions/)

```jsx
class Alphabet extends Component {

  static letters = "abcdefghijklmnopqrstuvwxyz".split('');

  state = {alphabet: []}

  componentDidMount() {
    d3.interval(() => {
      const shuffledLetters = d3.shuffle(Alphabet.letters)
        .slice(0, Math.floor(Math.random() * 18))
        .sort();
      this.setState({alphabet: shuffledLetters});
    }, 1500);

  }

  render() {
    const { alphabet } = this.state;
    const letters = alphabet.map((d, i) => <Letter d={d} i={i} key={i} />)

    return <g transform="translate(0, 200)">
      <ReactTransitionGroup component="g">
        {letters}
      </ReactTransitionGroup>
    </g>
  }
}
```

## Reusable viz components

Now imagine you've built a `<Histogram />` component. You can move it around just like you can a `<Button />` component. Feed it different data, still a histogram.

![](../images/reusable-components.png)

```jsx
class Dataviz extends Component {
  render() {
      return (
         <g transform={translate}>
        
           <Histogram data={this.props.data}
            value={(d) => d.base_salary}
            x={0}
            y={0}
            width={400}
            height={200}
            title="All" />
              
           <Histogram data={engineerData}
             value={(d) => d.base_salary}
             x={450}
             y={0}
             width={400}
             height={200}
             title="Engineer" />
               
           <Histogram data={programmerData}
             value={(d) => d.base_salary}
             x={0}
             y={220}
             width={400}
             height={200}
             title="Programmer"/>
               
           <Histogram data={developerData}
             value={(d) => d.base_salary}
             x={450}
             y={220}
             width={400}
             height={200}
             title="Developer" />
         </g>)
    }
};
```

## No more spaghetti

![](../images/spaghetti.jpg)

# Using a library (and when not to)

# How

Our visualizations are going to use SVG - an XML-based image format that lets us describe images in terms of mathematical shapes. For example, the source code of an 800x600 SVG image with a rectangle looks like this:

```html
<svg width="800" height="600">
    <rect width="100" height="200" x="50" y="20" />
</svg>
```

These four lines create an SVG image with a black rectangle at coordinates (50, 20) that is 100x200 pixels large. Black fill with no borders is default for all SVG shapes.

SVG is perfect for data visualization on the web because it works in all browsers, renders without blurring or artifacts on all screens, and supports animation and user interaction. You can see examples of interaction and animation later in this book.

But SVG can get slow when you have many thousands of elements on screen. We're going to solve that problem by rendering bitmap images with canvas. More on that later.

## React with SVG

Another nice feature of SVG is that it's just a dialect of XML - nested elements describe structure, attributes describe the details. The same principles that HTML uses.

That makes React's rendering engine particularly suited for SVG. Our 100x200 rectangle from before looks like this as a React component.

```jsx
const Rectangle = () => (
    <rect width="100" height="200" x="50" y="20" />
);

ReactDOM.render(<Rectangle />, document.getElementById('svg'))
```

You're right. This looks like tons of work for a static rectangle. But look closely. Even if you know nothing about React and JSX, you can look at that code and see that it's a Picture of a Rectangle.

Compare that to a pure D3 approach:

```javascript
d3.select("svg")
  .attr("width", 800)
  .attr("height", 600)
  .append("rect")
  .attr("width", 100)
  .attr("height", 200)
  .attr("x", 50)
  .attr("y", 20);
```

It's elegant, it's declarative, it looks like function call soup. It doesn't scream "Rectangle in an SVG" to me as much as the React example does.

You have to take your time and read the code carefully: first, we select the svg element, then we add attributes for width and height. After that, we append a rect element and set its attributes for width, height, x, and y.

Those 8 lines of code create HTML that looks like this:

```html
<svg width="800" height="600">
    <rect width="100" height="200" x="50" y="20" />
</svg>
```

Would've been easier to just write the HTML, right? Yes, for static images you're better off using Photoshop or something then exporting to SVG.

Either way, dealing with the DOM is not D3's strong suit. There's a lot of typing, code that's hard to read, it's slow when you have thousands of elements, and it's often hard to keep track of which elements you're changing. D3's enter-update-exit cycle is great in theory, but I personally never found it easy to use.

If you don't know what I just said, don't worry. We'll cover the enter-update-exit cycle in the animations example. Don't worry about D3 either. **I know it's hard**. I've written two books about it, and I still spend as much time reading the docs as writing the code. There's much to learn, and I'll explain everything as we go along.

D3's strong suit is its ability to do everything other than the DOM. There are many statistical functions, great support for data manipulation, and a bunch of built-in data visualizations. **D3 can calculate anything for us. All we have to do is draw it out.**

## The basic idea

Which is why we're going to follow this approach:

- React owns the DOM
- D3 calculates properties

This way, we can leverage React for SVG structure and rendering optimizations and D3 for all its mathematical and visualization functions.

Now let's look at two different ways to put them together: blackbox and full-feature.

## Blackbox components

Let's build an axis component. Axes are the perfect use-case for blackbox components. D3 comes with an axis generator bundled inside, and they're difficult to build from scratch.

They don't look difficult, but there are many tiny details you have to get just right.

### A quick blackbox example - a D3 axis

D3's axis generator takes a scale and some configuration to render an axis for us. The code looks like this:

<iframe src="https://codesandbox.io/embed/v6ovkow8q3" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

If this code doesn't make any sense, don't worry. There's a bunch of D3 to learn, and I'll help you out. If it's obvious, you're a pro! This book will be much quicker to read.

We start with a linear scale that has a domain `[0, 10]` and a range `[0, 200]`. You can think of scales as mathematical functions that map a domain to a range. In this case, calling `scale(0)` returns `0`, `scale(5)` returns `100`, `scale(10)` returns `200`. Just like middle school mathematics.

We create an axis generator with `axisBottom`, which takes a scale and is going to generate a bottom oriented axis – numbers below the line. You can also tweak settings for the number of ticks, their sizing, and their spacing.

Equipped with an axis generator, we select the svg element, append a grouping element, use a transform attribute to move it `10px` to the right and 30px down, and invoke the generator with `.call()`.

### A quick blackbox example - a React+D3 axis

Now let's say we want to use that same axis code but as a React component. The simplest way is to use a blackbox component approach like this:

#### Blackbox version

<iframe src="https://codesandbox.io/embed/3xy2jr1y5m" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Oh man! So much code! Is this really worth it? Yes, for the other benefits of using React in your dataviz. You'll see :)

We created an Axis component that extends React base Component class. We can't use functional stateless components for this because we need lifecycle hooks. More on those later.

Our component has a render method, which returns a grouping element (g) moved 10px to the right and 30px down using the transform attribute. Same as before.

We added a ref attribute, which lets us reference elements in our component via this.refs. This makes D3 integration cleaner, and it probably works with React-native. I haven't tried yet.

The body of renderAxis should look familiar. It's where we put code from the pure D3 example. Scale, axis, select, call. There's no need to append a grouping element; we're already there with `this.refs.g`.

For the manual re-rendering part, we call renderAxis in componentDidUpdate and componentDidMount. This ensures that our axis re-renders every time React's engine decides to render our component. On state and prop changes usually.

That wasn't so bad, was it?

To make our axis more useful, we could get the scale and axis orientation from props. We'll do that for scales in our bigger project.

#### HOC version

After the blackbox axis example above, you'd be right to think something like *"Dude, that looks like it's gonna get hella repetitive. Do I really have to do all that every time?"*

Yes, you do. But! We can make it easier with a higher order component - a HOC.

Higher order components are one of the best ways to improve your React code. When you see more than a few components sharing similar code, it's time for a HOC. In our case, that shared code would be:

- rendering an anchor element
- calling D3's render on updates

With a HOC, we can abstract that away into something called a class factory. It's an old concept coming back in vogue now that JavaScript has classes.

You can think of it as a function that takes some params and creates a class – a React component. Another way to think about HOCs is that they're React components wrapping other React components and a function that makes it easy.

Let's build a HOC for D3 blackbox integration. We'll use it in the main example project.

A D3blackbox HOC looks like this:

<iframe src="https://codesandbox.io/embed/5v21r0wo4x" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

You'll recognize most of that code from earlier. We have a componentDidMount and componentDidUpdate lifecycle hooks that call D3render on component updates. This used to be called renderAxis. render renders a grouping element as an anchor into which D3 can put its stuff.

Because D3render is no longer a part of the component, we have to use `.call` to give it the scope we want: this class, or rather this instance of the React component.

We've also made some changes to make render more flexible. Instead of hardcoding the `translate()` transformation, we take x and y props. `{ x, y } = this.props` takes x and y out of this.props using object decomposition, and we used ES6 string templates for the transform attribute.

Consult my [ES6 cheatsheet](https://es2017.io) for details on that.

Using our new D3blackbox HOC to make an axis looks like this:

```javascript
const Axis = D3blackbox(function () {
  const scale = d3.scaleLinear()
                  .domain([0, 10])
                  .range([0, 200]);
  const axis = d3.axisBottom(scale);

  d3.select(this.refs.anchor)
    .call(axis);

});
```

It’s the same code as we had in `renderAxis` before. The only difference is that the function is wrapped in a `D3blackbox` call. This turns it into a React component.

I'm not 100% whether wrapping a function in a React component counts as a real HOC, but let's roll with it. More proper HOCs are React components wrapped in components.

You can play with this example on Codepen here.

## Full-feature integration

As useful as blackbox components are, we need something better if we want to leverage React's rendering engine. We're going to look at full-feature integration where React does the rendering and D3 calculates the props.

To do that, we're going to follow a 3-part pattern: 

- set up D3 objects as class properties 
- update D3 objects when component updates 
- output SVG in `render()`

It's easiest to show you with an example.

Let's build a rectangle that changes color based on prop values. We'll render a few of them to make a color scale.

Yes, it looks like a trivial example, but color-as-information is an important concept in data visualization.

I suggest following along in CodeSandbox for now. 

<iframe src="https://codesandbox.io/embed/985xmjrvx4" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

We start with a Swatch component that draws a rectangle and fills it with a color.

### Swatch component

```jsx
const Swatch = ({ color, width, x }) => (
    <rect width={width}
      height="20"
      x={x}
      y="0"
      style={{fill: color}} />
);
```

Looks like our earlier components, doesn't it? It's exactly the same: a functional stateless component that draws a rect element with some attributes - dimensions, position, and fill style.

Note that style is a dictionary, so we specify it with double curly braces: outer braces for a dynamic value, inner braces for a dictionary.

Then we need a Colors component. It follows the full-featured integration structure: D3 objects as properties, an updateD3 function, plus some wiring for updates and rendering.

### Colors component, pt1

```javascript
class Colors extends Component {
    colors = d3.schemeCategory20;
    width = d3.scaleBand()
          .domain(d3.range(20));
```

We start by inheriting from Component and defining defaults for D3 objects. this.colors is one of D3's predefined color scales. schemeCategory20 is a scale of 20 colors designed for categorization. It seemed like a good example, and you're welcome to try others.

this.width is a D3 scale designed for producing bands, d3.scaleBand. As mentioned earlier, scales map domains to ranges. We know our domain is 20 colors, so we can statically set the domain as `[1, 2, 3, ..., 20]` with `d3.range(20)`.

d3.range generates a counting array, by the way. We'll use that a lot.

We'll use this.width to calculate widths and positions of our color swatches. Here's a picture from D3 docs to help you visualize what `scaleBand` does:

![](../images/band.png)

### Colors component, pt2

```javascript
componentWillMount() {
 this.updateD3(this.props);
}

componentWillUpdate(newProps) {
 this.updateD3(newProps);
}

updateD3(props) {
 this.width.range([0, props.width]);
}
```

componentWillMount and componentWillUpdate are component lifecycle hooks. Can you guess when they run?

componentWillMount runs just before React's engine inserts our component into the DOM, and componentWillUpdate runs just before React updates it. That happens on any prop change or setState call.

Both of them call our updateD3 method with the new value of props. We use it to update this.width scale's range. Doing so keeps the internal state of D3 objects in sync with React's reality. Without it, our component might render stale data.

Finally, we render a bunch of color swatches.

### Colors component, pt3

```javascript
render() {
    return (
    <g>
        {d3.range(20).map(i => (
            <Swatch color={this.colors[i]}
        width={this.width.step()}
        x={this.width(i)} />
         ))}
    </g>
    )
}
```

We create a grouping element to fulfill React's one child per component requirement, then render 20 swatches in a loop. Each gets a color from this.colors and a width and x from this.width.

After inserting into the DOM with ReactDOM, we get a series of 20 colorful rectangles.

Try changing the `width="400"` property of `<Colors />`. You'll see D3's scaleBand and our update wiring ensure the color strip renders correctly. For more fun, try changing the Colors component so it takes the color scale as a prop, then rendering multiple instances of `<Colors />` side-by-side.

# Practical exercise

Can you turn the color scale into a simple bar chart with random data? What about a checkerboard?

[Checkerboard solution](https://codesandbox.io/s/036y4jj30w)

# About server-side-rendering SSR