package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utilities.BaseClass;

public class Hook extends BaseClass {
	
	@Before
	public void start() {
		System.out.println("This is a start method it should execute before each scenario");
	}
	
	@After
	public void stop() {
		driver.quit();
	}

}
