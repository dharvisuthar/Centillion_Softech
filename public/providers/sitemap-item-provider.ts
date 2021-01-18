import { ButtonModel } from '../models/ButtonModel';
import { NavigationPaths } from '../enums/NavigationPaths';
import { ComponentNames } from '../enums/component-names';
/**
 * export the class for get menu
 */
export const getSiteMapItems = () => {

    const buttonList = [];

    /**
     * get the home menu
     */
    const homeButton = new ButtonModel();
    homeButton.Text = "Home"
    homeButton.Active = true;
    homeButton.Component = ComponentNames.Home;
    buttonList.push(homeButton);

    /**
     * get the portfolio menu
     */
    const portfolioButton = new ButtonModel();
    portfolioButton.Text = "Portfolio";
    portfolioButton.Active = false;
    portfolioButton.Component = ComponentNames.Port_Folio;
    buttonList.push(portfolioButton);

    /**
     * get the about us menu
     */
    const aboutUsButton = new ButtonModel();
    aboutUsButton.Text = "About Us";
    aboutUsButton.Active = false;
    aboutUsButton.Component = ComponentNames.About_Us;
    buttonList.push(aboutUsButton);

    /**
      * get the contact us menu
      */
    const contactUsButton = new ButtonModel();
    contactUsButton.Text = "Contact Us";
    contactUsButton.Active = false;
    contactUsButton.Component = ComponentNames.Contact_Us;
    buttonList.push(contactUsButton);

    /**
     * get the site map menu
     */
    const sitemapButton = new ButtonModel();
    sitemapButton.Text = "Sitemap"
    sitemapButton.Active = true;
    sitemapButton.Component = ComponentNames.Sitemap;
    buttonList.push(sitemapButton);

    /**
     * get the privacy policy menu
     */
    const privacypolicyButton = new ButtonModel();
    privacypolicyButton.Text = "Privacy Policy";
    privacypolicyButton.Active = false;
    privacypolicyButton.Component = ComponentNames.Privacy_Policy;
    buttonList.push(privacypolicyButton);

    /**
     * get the desclaimer menu
     */
    const desclaimerButton = new ButtonModel();
    desclaimerButton.Text = "Desclaimer";
    desclaimerButton.Active = false;
    desclaimerButton.Component = ComponentNames.Desclaimer;
    buttonList.push(desclaimerButton);

    /**
    * get the career menu
    */
    const careerButton = new ButtonModel();
    careerButton.Text = "Career";
    careerButton.Active = false;
    careerButton.Component = ComponentNames.Career;
    buttonList.push(careerButton);

    return buttonList;
}



