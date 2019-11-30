package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BaseClass {
	public static WebDriver driver;

	public static void openBrowser() {
		 System.setProperty("webdriver.chrome.driver","drivers/chromedriver");
		 ChromeOptions option = new ChromeOptions();
		 option.addArguments("window-size=1400,800");
		 option.addArguments("headless");
		driver = new ChromeDriver(option);

		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}

}
