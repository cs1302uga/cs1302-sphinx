cs1302-sphinx
=============

Quick Start
***********

**cs1302-sphinx** is distributed on PyPI.

1. Install **cs1302-sphinx** in your Sphinx project's build environment::

     pip install cs1302-sphinx

2. To use the base theme, update ``html_theme`` in ``conf.py``::

     html_theme = "cs1302_base"

3. To enable all extensions, update ``extensions`` in ``conf.py``::

     extensions = [
         "cs1302_sphinx",
         ...
     ]

4. Your Sphinx project's HTML pages will now be generated with the
   ``cs1302_base`` theme with all extensions enabled.

For more information, visit **cs1302-sphinx**'s documentation.

Development:
************

System Dependencies:

* ``npm`` -- used to build JavaScript and Sass files.
* ``uv`` -- used for project management.


To clone the development version of **cs1302-sphinx**::

   git clone https://github.com/cs1302uga/cs1302-sphinx.git
   cd cs1302-sphinx

To build::

  uv build

To build with verbose output, manually invoke ``hatch`` using ``uvx``::

  uvx hatch build --verbose

To add the development version of **cs1302-sphinx** as a dependency using
``uv``::

   uv add "cs1302-sphinx @ git+https://github.com/cs1302uga/cs1302-sphinx"
