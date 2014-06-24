jira-transitioner
=================

A small NPM module that transitions JIRA issues (for Continuous Intergration Workflows).

[![NPM](https://nodei.co/npm/jira-transitioner.png)](https://nodei.co/npm/jira-transitioner/)

###What is Does

Jira Transitioner is a Node.js module (npm structure) that connects with your instance of JIRA and transitions issues from one step to another.

It's designed to be used as a post-build step in a Continuous Integration (CI) workflow, to keep your JIRA up-to-date with your builds.

---

###How to Use

Download and/or clone the module, go to 'lib/config.js' and change the object fields to match those of your particular install.

Then do the following:

1. Install the dependencies via npm ('npm install').
2. Run the program ('node .').
3. Viola! Your issues are transitioned!

---

###License

Copyright (C) 2013  Managing Editor Inc (http://www.maned.com/)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
