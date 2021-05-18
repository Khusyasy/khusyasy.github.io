---
    title: Home
    permalink: /
    layout: base.njk
---

# Portfolio
---
### Javascript
---

{% for page in collections.js %}

[{{ page.data.title }} <img src="{{ page.data.img }}" /> Details...]({{ page.url }})

---
{% endfor %}

### PHP
---

[Restaurant Website - Laravel 8 <img src="images/laravel_resto.png"/>](https://restokhusyasy.000webhostapp.com/)

---
### Misc
---

[Landing Page <img src="images/landing_page.jpg"/>](https://khusyasy.000webhostapp.com/)

---

[Fullpage Landing Page <img src="images/landing_page_fullpage.jpg"/>](https://unbeguiled-pushups.000webhostapp.com/)

---
