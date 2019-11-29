$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionaility of our salesforce application.",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login using valid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"Welcome1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I create Account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Phone",
        "Parent Account",
        "Fax",
        "Type",
        "Account Number"
      ],
      "line": 12
    },
    {
      "cells": [
        "BOA",
        "703-626-6053",
        "Aethna Home Products",
        "703-090-0000",
        "Prospect",
        "10001"
      ],
      "line": 13
    },
    {
      "cells": [
        "Wachovia",
        "703-626-6053",
        "Burlington Textiles Corp of America",
        "703-090-0000",
        "Other",
        "20001"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 1831693961,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 416669261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_username_as(String)"
});
formatter.result({
  "duration": 308744093,
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
  "duration": 477565610,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 749986481,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 1145739509,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_create_Account(DataTable)"
});
formatter.result({
  "duration": 29474716009,
  "status": "passed"
});
formatter.uri("feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionaility of our salesforce application.",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login using valid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"Welcome1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 1379975023,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 368256859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "LoginTest.i_enter_username_as(String)"
});
formatter.result({
  "duration": 768084823,
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
  "duration": 499828094,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 680771206,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 1501779425,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login using invalid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter username as \"wrongemail@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password as \"Welcome1\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 1940449106,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 419352028,
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
  "duration": 680109325,
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
  "duration": 529601279,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 6859382099,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 53817519,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Please check your username and password. If you still can\u0027t log in, contact your Salesforce administrator.]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinition.LoginTest.i_should_see_an_error_message(LoginTest.java:60)\n\tat ✽.Then I should see an error message(feature/Login.feature:18)\n",
  "status": "failed"
});
});