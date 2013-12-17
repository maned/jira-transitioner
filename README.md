jira-transitioner
=================

A small NPM module that transitions JIRA issues (for Continuous Intergration Workflows).

***What is Does***
Jira Transitioner is a Node.js module (npm structure) that connects with your instance of JIRA and transitions issues from one step to another.

It's designed to be used as a post-build step in a Continuous Integration (CI) workflow, to keep your JIRA up-to-date with your builds.

***How to Use***
Download and/or clone the module, go to 'lib/config.js' and change the object fields to match those of your particular install.

To run, go to the root level and run 'node .' and it will communicate with JIRA and transition any issues or User Stories from one state to another.
