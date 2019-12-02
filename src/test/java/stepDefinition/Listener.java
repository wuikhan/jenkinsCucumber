package stepDefinition;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class Listener implements ITestListener {

	@Override
	public void onFinish(ITestContext arg0) {
		System.out.println("on finish");
	}

	@Override
	public void onStart(ITestContext arg0) {
		System.out.println("on start");
	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult arg0) {

	}

	@Override
	public void onTestFailure(ITestResult arg0) {
		System.out.println("on test failure");
	}

	@Override
	public void onTestSkipped(ITestResult arg0) {
		System.out.println("on test skipped");
	}

	@Override
	public void onTestStart(ITestResult arg0) {
		System.out.println("on test start");
	}

	@Override
	public void onTestSuccess(ITestResult arg0) {
		System.out.println("on test ssuccess");
	}

}
