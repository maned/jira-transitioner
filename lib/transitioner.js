// Project dependencies

var JiraApi = require('jira').JiraApi,
	util = require('util'),
	_ = require('underscore'),
	config = require('./config.js');

// Create your JIRA connection
var jira = new JiraApi('http:', config.host, config.port, config.user, config.password, '2', true, false);

// Search for all issues in a project for any at Awaiting Release, then find transitions and transition the issues to QA.
jira.searchJira('project = ' + config.project + ' && status = "' + config.transitionFrom + '"', {},
	function (err, json) {

		if (err) return console.log(err);

		// Loop through each issue returned
		_.each(json.issues, function (issue) {
			// Grab transitions per issue
			jira.listTransitions(issue.key, function (err, transitions) {

				if (err) return console.log(err);

				_.each(transitions, function (transition) {
					// If the transition is what we what to transition to, the transition the issue to what we want.
					if (transition.name === config.transitionTo) {
						jira.transitionIssue(issue.key, {
							"transition": {
								"id": transition.id
							}
						}, function (err) {
							// Let the user know what's up!

							if (err) return console.log(err)

							console.log(issue.key + " has been transitioned from " + config.transitionFrom + " to " + config.transitionTo);

						});
					}
				});

			});
		});


	}
);