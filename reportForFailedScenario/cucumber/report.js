$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionaility of our salesforce application.",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "login using invalid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-invalid-credentials",
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
  "duration": 1768661,
  "error_message": "java.lang.NoSuchMethodError: org.openqa.selenium.os.CommandLine.find(Ljava/lang/String;)Ljava/lang/String;\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:232)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:104)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:94)\n\tat utilities.BaseClass.openBrowser(BaseClass.java:15)\n\tat stepDefinition.LoginTest.i_open_chrome_browser(LoginTest.java:15)\n\tat ✽.Given I open chrome browser(feature/Login.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_should_see_an_error_message()"
});
formatter.result({
  "status": "skipped"
});
});