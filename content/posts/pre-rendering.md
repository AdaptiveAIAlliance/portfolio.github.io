---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
tags: ["Tag1", "Tag2", "Tag3"]
categories: ["Cat1", "Cat2", "Cat3"]
featImage: "test.png"
intro: "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is "
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
