# 0x0F. Build a web app in JavaScript

### [0. Reuse and polish your Bootstrap integration](./README.md)

- Copy files from 0x0B. Implement a design with bootstrap:
  - homepage.html -> 0-homepage.html
  - pricing.html -> 0-pricing.html
  - courses.html -> 0-courses.html
  - styles.css and any files/folders needed (images, fonts…)
- Finalize the design if it's not done yet (screens should match Figma files)

### [1. Homepage - quotes](./1-homepage.html)

- From 0-homepage.html, create 1-homepage.html
- Replace static quotes by dynamic loading:
  - URL: https://smileschool-api.hbtn.info/quotes
  - No static quotes should be present in the quotes section
  - During the Ajax request, a loader should be present
  - Carousel should work like before

### [2. Homepage - popular tutorials](./2-homepage.html)

- From 1-homepage.html, create 2-homepage.html
- Replace static video cards by dynamic loading:
  - URL: https://smileschool-api.hbtn.info/popular-tutorials
  - No static video cards should be present in the section
  - During the Ajax request, a loader should be present
  - Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
  - Don’t forget the responsive part!

### [3. Homepage - latest videos](./homepage.html)

- From 2-homepage.html, create homepage.html
- Replace static video card by dynamic loading:
  - URL: https://smileschool-api.hbtn.info/latest-videos
  - No static video cards should be present in the section
  - During the Ajax request, a loader should be present
  - Carousel should work by sliding card by card (like GIF below) - this kind of carousel is - not unique, make it generic to reuse it easily!
  - Don’t forget the responsive part!

### [4. Pricing - quotes](./pricing.html)

- From 0-pricing.html, create pricing.html
- Replace static quotes by dynamic loading:
  - URL: https://smileschool-api.hbtn.info/quotes
  - No static quotes should be present in the quotes section
  - During the Ajax request, a loader should be present
  - Carousel should work like before

### [5. Courses](./courses.html)

- From 0-courses.html, create courses.html
- Replace static video card by dynamic loading:
  - URL: https://smileschool-api.hbtn.info/courses
    - GET parameters:
      - q: search value (in our case, the value of the field KEYWORDS)
      - topic: topic filter value (in our case, the value of the field TOPICS)
      - sort: order of all courses (in our case, the value of the field SORT BY)
  - No static video cards should be present in the section
  - During the Ajax request, a loader should be present
  - Dropdowns are dynamic (coming from the API):
    - Topic: list of topics
    - Sort by: list of sorts
  - Search value should be initialized by the value q in
  - the API response
  - The list of video cards is coming from courses in the API response
  - API request must be done when:
    - Search value is changing
    - A new Topic is selected
    - A new Sort by is selected

### [6. JSON to XML](./xml-scripts.js)

- Convert all your JSON Ajax call to another API… a XML API!

## Learning Objectives:

- What you should learn from this project:
  - How to implement designs from scratch using Figma and Bootstrap
  - How to add dynamic behavior to a website using Javascript
  - How to get data from an XML API

## Author

- **Colson Scott** - [OctopusHugz](https://github.com/OctopusHugz)
