---
title: "1.1 - Design Update"
categories:
- project-update
project: "Course Manager"
date: 2022-05-24
tags: [major]
summary: "A major design overhaul finally including support for mobile devices"
draft: false
---
A much needed redesign of the whole site, providing mobile support and making the site easier on the eyes overall, also including some bug fixes to the data collector

## Changelog

- Global Changes
  - Changed the colour palette slightly
  - Switched the font to Arial
  - Slightly reduced font size to accomodate for Arial's larger size
- Schedule View
  - Added a side menu that will be a permanent location for class data
  - Now allows the user to scroll both horizontally and vertically when part of the schedule isn't visible
    - The day and hour indicators should stay in place to provide reference when scrolled
  - Made a mobile view with the side menu moving to the bottom
- Search
  - Changed results to be shown as a smaller tile view
  - Classes already in your schedule will no longer have an add button
  - Adding a class to your schedule will remove the add button
  - Added a mobile view which reduces the search menu(you will be able to re-expand it in the search update)
  - Rerouted /class_search to /api/search for consistency
- Data Collector
  - Cleaned up log outputs for more readable output
  - Added the ability to collect data for multiple terms at once
  - Will now get additional schedule information from the class search if not already recorded

## Bugfixes

- Fixed class data not being collected properly when the class isn't in the semester section book
- Fixed duplicate course attributes being added when the pdf was processed
- Fixed invalid time values when text is put after the time in the semester section book
