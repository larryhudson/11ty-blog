---
title: Notes
layout: base.njk
override:tags: []
---

<h1>Projects</h1>

This is where I share little experiments and projects that I'm working on. These will usually include a link to a GitHub repository where you can explore the code and work with it yourself.

{% for project in collections.publishedProjects | reverse %}

<div class="project h-entry">
<h2><a href="{{project.url}}" class="u-url u-uid">{{project.data.title}}</a></h2>
<p class="pull-up smaller"><time class="dt-published" datetime="{{project.data.date | timeValue}}">{{project.data.date | monthYear}}</time></p>
</div>
{% endfor %}
