package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

public class BaseClass {
	public static WebDriver driver;

	public static void openBrowser() {
		 System.setProperty("webdriver.chrome.driver","drivers/chromedriver");
		driver = new ChromeDriver();
		// System.setProperty("phantomjs.binary.path","drivers/phantomjs");
		//driver = new PhantomJSDriver();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}

}
