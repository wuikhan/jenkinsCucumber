$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionaility of our salesforce application.",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 158004406,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create Account using Valid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;create-account-using-valid-credentials",
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
  "comments": [
    {
      "line": 10,
      "value": "#Then I see the dashboard"
    }
  ],
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
  "duration": 1057397514,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 448921863,
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
  "duration": 136724668,
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
  "duration": 278952326,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 571223504,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_create_Account(DataTable)"
});
formatter.result({
  "duration": 25680718567,
  "status": "passed"
});
formatter.after({
  "duration": 117839535,
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
formatter.before({
  "duration": 676011,
  "status": "passed"
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
  "duration": 336169217,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 322500569,
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
  "duration": 227966445,
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
  "duration": 381145607,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 384273414,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 867941862,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepDefinition.LoginTest.i_see_the_dashboard(LoginTest.java:52)\n\tat ✽.Then I see the dashboard(feature/Login.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "duration": 774516983,
  "status": "passed"
});
formatter.before({
  "duration": 792267,
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
  "duration": 336744419,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 312751450,
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
  "duration": 467901401,
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
  "duration": 157118734,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 7121777968,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 103112415,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ease check your user[]ame and password. If...\u003e but was:\u003c...ease check your user[n]ame and password. If...\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinition.LoginTest.i_should_see_an_error_message(LoginTest.java:71)\n\tat ✽.Then I should see an error message(feature/Login.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 628164726,
  "status": "passed"
});
});