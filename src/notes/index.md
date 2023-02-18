---
title: Notes
date: 2023-02-19
layout: base.njk
override:tags: []
---

<h1>Notes</h1>

This is where I share ideas in a more informal and short-form way. I'm trying to use this to blog more!

{% for notePost in collections.notes | reverse %}

<div class="project h-entry">
<h2><a href="{{notePost.url}}" class="u-url u-uid">{{notePost.data.title}}</a></h2>
<p class="pull-up smaller"><time class="dt-published" datetime="{{notePost.data.date | timeValue}}">{{notePost.data.date | niceDate}}</time></p>
</div>
{% endfor %}
