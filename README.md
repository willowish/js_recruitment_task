# JS Recruitment Task

## Description

We would like you to create an application that will display list of news fetched from The Guardian. You should use their API, which can be found here: [https://open-platform.theguardian.com/](https://open-platform.theguardian.com/)

Goal of this task is to check your JavaScript knowledge so please don't use any additional libraries. There are some exceptions, though. You can use `fetch` for http requests and if you are going to write some tests, you can of course use tools like `testing-library` or `jest`.

**Important**

- Please treat this tasks as something that would be shown to our customer, so focus on quality and best practices (and we don't mean only from the code point of view :) ).
- Also feel free to update or customize starter config. For example you can change `prettier` or `eslint` config or add something else that you are used to use on daily basis.
- We have provided sample html + css styling, so you can focus on writing JS code but you can change default layout if you want.

## Requirements

- Display list of news from last 30 days
- Add pagination: 10 items per page
- Add news filtering based on section selection from dropdown. You can restrict it only to: `sport`, `books`, `business`, `culture`
- Add search functionality for filtering news content based on provided phrase
- Each news list element should have following elements:
  - Title
  - Section name
  - Date of publication
  - Link to full article (open in new window)
  - "Read Later" button
- Clicking "Read later" button should add selected news to the "Read later" section on the right. Those elements should be stored somewhere and displayed even after refresh.
- Each element from "read later" can be removed by clicking "delete" button
- (Bonus) It would be beneficial if you would write some kind of tests, either unit or integration
- (Bonus) If you will find time, please briefly describe your approach to solving this task.

## Tools used

In order to keep things simple we used only really small number of libs for this boilerplate:

- [Parcel](https://en.parceljs.org) as a bundler
- [Milligram](https://milligram.io/) and [Normalize](https://necolas.github.io/normalize.css/) for some simple styling
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for static code check
- [PostCSS](https://postcss.org/) with [Autoprefixr](https://autoprefixer.github.io/) for css compatibility

## Solution

- function `element` that allowed to create 'components' in (relatively) comfortable manner
- newsService allow me to
  - obtain and store news
  - apply filters (search, page and selected section)
  - store applied filters (search, page and selected section)
  - dispatch events when filters or news list changed
- readLaterService: - add news to read later and store them in localStorage (service itself is completely decoupled from localstorage - it uses storageService, thanks to that we could easily change the storage type) - remove news from the read later list and from localStorage
- main.js - it's used to initialize all components and load initial data - it's listening for all custom events and react accordingly - namely rerender components that need to be rerendered
- components don't change state of the application directly. They call functions that trigger that change accordingly and then 'propagate' updated data to components. The idea was to mimic (in very limited maner) redux like one way data flow
