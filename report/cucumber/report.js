$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionaility of our salesforce application.",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 180202842,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid Login Attempt",
  "description": "",
  "id": "test-salesforce-login-functionality;invalid-login-attempt",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter username as \"wrongemail@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password as \"Welcome1\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 934638178,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 609400274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongemail@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_username_as(String)"
});
formatter.result({
  "duration": 164010758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome1",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_password_as(String)"
});
formatter.result({
  "duration": 77669630,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 7351769035,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 92421806,
  "status": "passed"
});
formatter.after({
  "duration": 1272179855,
  "status": "passed"
});
});