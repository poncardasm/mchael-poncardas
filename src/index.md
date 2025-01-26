---
layout: 'base.njk'
title: 'Mchael Poncardas'
---

<header>
    <h1>Mchael Poncardas</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/writings">Writings</a>
        <a href="/tags">Tags</a>
        <a href="/about">About</a>
    </nav>
</header>

<div class="content">
    <p>Welcome to my blog! Below you'll find my writings and projects.</p>

    <h2>Writings</h2>
    <ul>
        {% for post in collections.posts %}
            <li>
                <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.data.title }}</a>
            </li>
        {% endfor %}
    </ul>

    <h2>Projects</h2>
    <ul>
        <li><a href="#">Hugo</a>: The world's fastest framework for building websites.</li>
        <li><a href="#">Hugo Themes</a>: A curated directory of Hugo themes.</li>
    </ul>

</div>

<footer>
    <p>Copyright © 2025 Mchael Poncardas</p>
    <p><a href="/">Home</a> | <a href="/writings">Writings</a> | <a href="/tags">Tags</a> | <a href="/about">About</a></p>
</footer>
