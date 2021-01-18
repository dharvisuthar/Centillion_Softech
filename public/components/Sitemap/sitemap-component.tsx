import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import * as sitemapLogo from "../../images/sitemap.jpg";
import { centillionStyles } from "../styles/CentillionStyles";
import Typography from 'material-ui/styles/typography';
import { getSiteMapItems } from '../../providers/sitemap-item-provider';
import { ButtonModel } from '../../models/ButtonModel';
/**
* interface to define properties for site map
*/
interface Props {

    currentTheme: Theme;

    classes: any;

    setCurrentComponent: (componentName: string) => void;
}

/**
 * export class for Site map 
 */
class SitemapComponent extends React.Component<Props> {

    state = {
        buttons: getSiteMapItems() as ButtonModel[]
    }
    render() {
        const { classes } = this.props;

        return (
            <div className="sitemap-main-div">
                <div className={classes.main_div}>
                    <div className={classes.hide_div}></div>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                            <img src={sitemapLogo} className={classes.contactus_firstdiv_grid_image}></img>
                        </Grid >
                    </Grid>
                    <Grid container spacing={24} className={classes.footer_seconddiv_padding}>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                            <p className={classes.sitemap_heading}>Pages</p>
                            <Grid container spacing={24} className="btm-space-sitemap">
                                {
                                    this.renderButtons()
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                            <p className={classes.sitemap_heading}>Technology</p>
                            <Grid container spacing={24} className="btm-space-sitemap">
                                <Grid item xs={12} sm={12} md={3} lg={3}> <span className="sitemap-btns">React</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">C#</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Angular js</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">TypeScript</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">VB.Net</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Php</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">SQL Server</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Mongo Db</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Block chain technology</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Excel Automation</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Java</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">AWS services</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Android</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">IOS</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Crystal Reports</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Tableau</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Telerik controls</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Vue js</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Lavarel js</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Knockout js</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Paython</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Windows</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Node.js</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">HTML 5</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">CSS 3</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Asp.net MVC 5</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Asp.net Core</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Linux Server</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Odoo</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Nope Commerce</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Graphic Design</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Paypal</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Stripe</span></Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Braintree</span></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                            <p className={classes.sitemap_heading}>Hire Developers</p>
                            <Grid container spacing={24} className="btm-space-sitemap">

                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

    renderButtons() {
        const { classes } = this.props;
        return (
            this.state.buttons.map((button, index) =>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <span
                        color="inherit"
                        className='sitemap-btns'
                        key={index}
                        onClick={() => { this.handleselectedcomponent(button) }} >
                        {button.Text}
                    </span>
                </Grid>
            )
        )
    }

    handleselectedcomponent = (selectedcomponent: ButtonModel) => {
        const buttons = this.state.buttons;
        buttons.forEach((button: ButtonModel) => {
            if (button.Text === selectedcomponent.Text) {
                button.Active = true;
            }
            else {
                button.Active = false;
            }
        });
        const newButtons = Object.assign([], buttons);
        this.setState({ buttons: newButtons });
        this.props.setCurrentComponent(selectedcomponent.Component);
    }
}

export const SitemapComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(SitemapComponent)

