.. include:: ../Includes.txt

.. _introduction:

============
Introduction
============

.. tip::

   This extension is a boilerplate, not a complete providerextension nor a sitepackage
.. _what-it-does:

What does it do?
================

This extensions is a boilerplate for a sitepackage or a providerextension. It provides the following features:

- webpack for building stylesheets and javascript with ES6
- webpack as proxy for browsersync on filechanges in every kind of file
- above the fold for javascript and css 
- a footer loader for javascript and css


.. important::

   Don't forget to set extension's version number in :file:`Settings.cfg` file,
   in the :code:`release` property.
   It will be automatically picked up on the cover page by the :code:`|release|` substitution.

.. _screenshots:

Screenshots
===========

This chapter should help people understand how the extension works.
Remove it if it is not relevant.

.. figure:: ../Images/IntroductionPackage.png
   :class: with-shadow
   :alt: Introduction Package
   :width: 300px

   Introduction Package after installation (caption of the image).

How the Frontend of the Introduction Package looks like after installation (legend of the image).


Structur for Javascript and scss
================================

To create an above-the-fold css and javascript, the css and javscript are structured as this:

::

    Privat
    ├── Scss          
    │   ├── _All
    │   │   ├── above
    │   │   │   └── _bootstrap.scss
    │   │   ├── below
    │   │   │   └── _bootstrap.scss
    │   │   ├── above.scss
    │   │   └── below.scss
    │   ├── Home
    │   │   ├── above
    │   │   │   └── _bootstrap.scss
    │   │   ├── below
    │   │   │   └── _bootstrap.scss
    │   │   ├── above.scss
    │   │   └── below.scss
    │   └── Content
    │       ├── above
    │       │   └── _bootstrap.scss
    │       ├── below
    │       │   └── _bootstrap.scss
    │       ├── above.scss
    │       └── below.scss
    └── Javascript          
        ├── _Helper
        ├── _All
        ├── Home
        │   ├── above
        │   │   └── _bootstrap.scss
        │   ├── below
        │   │   └── _bootstrap.scss
        │   ├── above.js
        │   └── below.js
        └── Content
            ├── above
            │   └── _bootstrap.scss
            ├── below
            │   └── _bootstrap.scss
            ├── above.js
            └── below.js

