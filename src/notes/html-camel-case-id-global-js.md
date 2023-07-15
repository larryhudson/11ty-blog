---
title: Use camelCase IDs to easily access elements in JavaScript
date: 2023-03-06
excerpt: HTML elements with IDs can be accessed using the `window` attribute.
---

If you’re writing vanilla JavaScript, you can end up writing a lot of this:

```html
<button id="menu-toggle">Menu</button>

<script>
  const myButton = document.querySelector("#menu-toggle");
  myButton.addEventListener("click", doSomething);
</script>
```

I recently found out that if you add IDs to elements in your HTML, they become available as a part of the global ‘window’ variable. For example:

```diff-html
   <button id="menu-toggle">Menu</button>

   <script>
-  const myButton = document.querySelector("#menu-toggle");
+  window["menu-toggle"].addEventListener("click", doSomething);
   </script>
```

Every property of the ‘window’ variable is also available as a global variable (for example, `window.location` is the same as `location`). So if you use camelCase for your element IDs, they are even easier to access:

```diff-html
-  <button id="menu-toggle">Menu</button>
+  <button id="menuToggle">Menu</button>

   <script>
-  window["menu-toggle"].addEventListener("click", doSomething);
+  menuToggle.addEventListener("click", doSomething);
   </script>
```

It's only saving one line of code, but it feels pretty handy when you're trying to put together a quick demo. I think it's good to use when:

- you’ve got close control of the HTML markup and the JS code, eg. when you’re hand-coding simple components
- the HTML markup and the JS code are fairly close together, so you can make sure the IDs are set properly.

[I've put together a quick CodePen demo of a mobile nav menu using this approach](https://codepen.io/larryhudson/pen/RwYZbZv?editors=1010).

I would avoid this approach if:

- you don’t have control over the ID.
- you're working on a big project with other people, and the markup might change soon.
