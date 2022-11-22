<div class="h-card">

<div class="photo">
<picture class="u-photo">
    <source srcset="/images/Larry_366.webp" type="image/webp">
    <source srcset="/images/Larry_366.jpg" type="image/jpeg">
    <img src="/images/Larry_366.jpg" height="195" width="183" alt="Profile picture of Larry smiling with blurry trees behind">
</picture>
</div>

Hi there! My name is <span class="p-name">Larry Hudson</span> and this is my personal site.

<p class="p-note">I'm a web developer and programmer based in <span class="p-locality">Melbourne</span>, <span class="p-country-name">Australia</span>. I'm the <span class="p-job-title">Team Leader of Innovation, Tech and Web</span> at the <a href="https://www.informationaccessgroup.com/" class="p-org">Information Access Group</a>.</p>

I'm passionate about:

- making information more accessible by offering it in different formats
- creating tools to automate repetitive tasks, so creative people can focus on being creative
- sharing knowledge and encouraging a positive team culture.

You can find me on <a rel="me" href="https://indieweb.social/@larryhudson">Mastodon</a>, hang out with me in the [lunch.dev Discord](https://events.lunch.dev/) and [Eleventy Discord](https://www.11ty.dev/blog/discord), or email me at <a href="mailto:larryhudson@hey.com" class="u-email" rel="me">larryhudson@hey.com</a>.

## Recent experiments

I enjoy testing out ideas by creating small demos and experiments. You can see some recent experiments below.

You can <a href="https://github.com/larryhudson/" class="u-url" rel="me">find more on my GitHub profile</a>.

You can also subscribe to the <a href="/feed.xml" rel="alternate" type="application/rss+xml">RSS feed of updates</a>.

{% for project in collections.projects | reverse %}

<div class="project h-entry">
<h3><a href="{{project.url}}" class="u-url u-uid">{{project.data.title}}</a></h3>
<p class="pull-up smaller"><time class="dt-published" datetime="{{project.data.date | timeValue}}">{{project.data.date | monthYear}}</time></p>
<div class="e-content">
{{project.templateContent|safe}}
</div>
</div>
{% endfor %}

## Get in touch

You can find me on:

- <a href="https://www.twitter.com/larryhudsondev" class="u-url" rel="me">Twitter</a>
- [the lunch.dev Discord](https://events.lunch.dev/)
- [the Eleventy Discord](https://www.11ty.dev/blog/discord/).

You can also email me at <a href="mailto:larryhudson@hey.com" class="u-email" rel="me">larryhudson@hey.com</a>.

</div>
