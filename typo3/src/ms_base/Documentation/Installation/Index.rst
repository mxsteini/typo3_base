.. include:: ../Includes.txt

.. _installation:

============
Installation
============

First of all you need an node in version 12.

https://nodejs.org/en/download/

After installing node, open a commandlinetool and run these lines

.. code-block:: bash

    cd Resource/Privat
    npm install

Configuration
=============

::

    Privat
    ├── Assets
    ├── BackendLayouts
    ├── Build
    ├── config.json
    ├── config-local.json
    ├── Extensions
    ├── Fonts
    ├── Images
    ├── JavaScripts
    ├── Language
    ├── Layouts
    ├── node_modules
    ├── packagehash.txt
    ├── package.json
    ├── package-lock.json
    ├── Partials
    ├── Scss
    └── Templates

Asset:
######
Here you can put all your assets which should be copied to the public folder.


Build:
######
Here you can find the webpack configuration.

config.json + config-local.json
###############################
In the config.json and the config-local.json you can configure a local setup like url or port for the webpackproxy.






