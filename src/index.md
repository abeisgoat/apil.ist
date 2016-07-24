---
title: APIL.IST - THE LIST OF AMAZING, MAGICAL APIS
layout: layout.html
load_json: list.json
---
# <b>API L.IST</b> - THE LIST OF AMAZING MAGICAL APIS

Bring the magic to your app with APIs!

<style>
  [darker-grey] a {
    color: #888;
  }

  [darker-grey] {
    color: #888;
  }

  [lighter-grey] a {
    color: #ccc;
  }

  [lighter-grey] {
    color: #ccc;
  }

  [link] {
    margin-bottom: 10px;
  }

  [underline] {
    text-decoration: underline;
  }

  [black] {
    color: #555;
    background-color: #ccc;
    padding: 5px;
  }

  [black] a {
    color: #555;
  }
</style>

{{#each data.links}}
  <div link>
    [{{this.title}}]({{this.link}}) <span darker-grey underline>({{this.site}})</span> <span lighter-grey>added by <a href="https://twitter.com/{{this.added_by}}">{{this.added_by}}</a></span>
  </div>
{{/each}}

<br /><br />
<span black underline>[PLEASE CONTRIBUTE TO THIS OPEN-SOURCE SITE](https://github.com/abehaskins/apil.ist)</span>
