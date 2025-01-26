---
layout: 'base.njk'
title: 'Home'
---

# Welcome to My Blog

Here are my latest posts:

<ul>
{% for post in collections.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> ({{ post.date | date: "dd MMM yyyy" }})
  </li>
{% endfor %}
</ul>
