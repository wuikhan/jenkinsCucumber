package stepDefinition;

import java.io.IOException;
import java.util.List;

import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeSuite;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utilities.BaseClass;

public class Hook extends BaseClass {

	@Before
	public void start(Scenario scenario) {
		System.out.println("Scenario Name :" + scenario.getName());
		htmlReporter = new ExtentHtmlReporter("extent-report.html");
		extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
	}

	@After
	public void stop(Scenario scenario) throws IOException {
		String name = scenario.getName() + " - " + scenario.getStatus();
		test = extent.createTest(scenario.getName(), "This test case will check the visibility of dashboard.");
		test.log(Status.INFO, "This step shows usage of log(status, details)");
		test.info("This step shows usage of info(details)");
		if (scenario.isFailed()) {
			test.log(Status.FAIL, "Failed due to some issue");
			test.fail(MarkupHelper.createLabel(scenario.getName(), ExtentColor.RED));
			takeScreen(name);
			test.addScreenCaptureFromPath("./Screenshots/" + name + ".png");
			extent.flush();
		}

		driver.quit();
	}

}
