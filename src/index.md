<div class="photo"><img src="/images/Larry_2020.jpg" alt=""></div>

Hi there! Welcome to my personal site.

I'm a web developer and programmer based in Melbourne, Australia. I'm the Team Leader of Innovation, Tech and Web at the [Information Access Group](https://www.informationaccessgroup.com/).

I'm passionate about:

- making information more accessible by offering it in different formats
- creating tools to automate repetitive tasks, so creative people can focus on being creative
- sharing knowledge and encouraging a positive team culture.

You can find me on [Twitter](https://www.twitter.com/larryhudsondev), hang out with me in the [lunch.dev Discord](https://events.lunch.dev/) and [Eleventy Discord](https://www.11ty.dev/blog/discord), or email me at [larryhudson@hey.com](mailto:larryhudson@hey.com).

## Recent experiments

I enjoy testing out ideas by creating small demos and experiments. You can see some recent experiments below.

You can [find more on my GitHub profile](https://github.com/larryhudson/).

{% for project in collections.projects | reverse %}

<div class="project">
<h3>{{project.data.title}}</h3>
<p class="pull-up smaller">{{project.data.date | monthYear}}</p>
{{project.templateContent|safe}}
</div>
{% endfor %}

## Get in touch

You can find me on:

- [Twitter](https://www.twitter.com/larryhudsondev)
- [the lunch.dev Discord](https://events.lunch.dev/)
- [the Eleventy Discord](https://www.11ty.dev/blog/discord/).

You can also email me at [larryhudson@hey.com](mailto:larryhudson@hey.com)
