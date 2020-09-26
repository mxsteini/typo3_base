.. include:: ../Includes.txt

.. _developer:

================
Developer Corner
================

Use this section to provide examples of code or detail any information that would be deemed relevant to a developer.

For example explain how a certain feature was implemented.


.. _developer-api:

API
===

How to use the API...

.. code-block:: php

   $stuff = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
      '\\Foo\\Bar\\Utility\\Stuff'
   );
   $stuff->do();

or some other language:

.. code-block:: javascript
   :linenos:
   :emphasize-lines: 2-4

   $(document).ready(
      function () {
         doStuff();
      }
   );


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

