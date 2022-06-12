<div class="h-card">

<div class="photo"><a href="https://larryhudson.io" class="u-url image-link"><img class="u-photo" src="/images/Larry_2020.jpg" alt=""></a></div>

Hi there! My name is <span class="p-name">Larry Hudson</span> and this is my personal site.

I'm a web developer and programmer based in Melbourne, Australia. I'm the Team Leader of Innovation, Tech and Web at the [Information Access Group](https://www.informationaccessgroup.com/).

I'm passionate about:

- making information more accessible by offering it in different formats
- creating tools to automate repetitive tasks, so creative people can focus on being creative
- sharing knowledge and encouraging a positive team culture.

You can find me on <a href="https://www.twitter.com/larryhudsondev" class="u-url" rel="me">Twitter</a>, hang out with me in the [lunch.dev Discord](https://events.lunch.dev/) and [Eleventy Discord](https://www.11ty.dev/blog/discord), or email me at <a href="mailto:larryhudson@hey.com" class="u-email" rel="me">larryhudson@hey.com</a>.

## Recent experiments

I enjoy testing out ideas by creating small demos and experiments. You can see some recent experiments below.

You can <a href="https://github.com/larryhudson/" class="u-url" rel="me">find more on my GitHub profile</a>.

{% for project in collections.projects | reverse %}

<div class="project">
<h3>{{project.data.title}}</h3>
<p class="pull-up smaller">{{project.data.date | monthYear}}</p>
{{project.templateContent|safe}}
</div>
{% endfor %}

## Get in touch

You can find me on:

- <a href="https://www.twitter.com/larryhudsondev" class="u-url" rel="me">Twitter</a>
- [the lunch.dev Discord](https://events.lunch.dev/)
- [the Eleventy Discord](https://www.11ty.dev/blog/discord/).

You can also email me at <a href="mailto:larryhudson@hey.com" class="u-email" rel="me">larryhudson@hey.com</a>.

</div>
