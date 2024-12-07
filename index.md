---
layout: base.njk
title: News
permalink: false
---

## Latest News

{% for article in collections.articles %}
    <div class="article-preview">
        <h3><a href="{{ article.url | url }}">{{ article.data.title }}</a></h3>
        <p class="date">{{ article.date | readableDate }}</p>
        <p>{{ article.templateContent | striptags | truncate(200) }}...</p> <p>[Short summary of the article]</p>
    </div>
{% endfor %}