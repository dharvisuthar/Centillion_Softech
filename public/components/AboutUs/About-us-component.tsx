import * as React from 'react';
import { connect } from "react-redux";
import { IconButton, Grid, Theme, Button, withStyles, CardMedia, createStyles } from "@material-ui/core";
import { getAboutUsItems } from '../../providers/aboutus-item-button-provider';
import { ButtonModel } from '../../models/ButtonModel';
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
import { companyName } from '../../providers/comp-name-provider';
import { AboutusComponentNames } from "../../enums/aboutus-component-names";
import * as skypeLogo from "../../images/IconSkype.png";
import * as grouppicLogo from "../../images/photo6.jpg";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import { centillionStyles } from "../styles/CentillionStyles";
import * as doctymeImage from "../../images/doctyme.png";
import * as labcantonImage from "../../images/labcanton.png";
import * as exultitImage from "../../images/exultit.png";
import * as fyuzeImage from "../../images/fyuzeapp.png";
import * as memoImage from "../../images/memomaker.png";
import * as ExultImage from "../../images/Exultitsolution.jpg";
import * as eventalogImage from "../../images/eventalog.png";
import * as etruckingImage from "../../images/etruckingsoftware.jpg";
import * as fitnessImage from "../../images/7fitness.jpg";
import * as eventalog1 from "../../images/eventalogone.jpg";
import * as eventalog2 from "../../images/eventalogtwo.jpg";
import * as eventalog3 from "../../images/eventalogthree.jpg";
import * as eventalog4 from "../../images/eventalogfour.jpg";
import * as eventalog5 from "../../images/eventalogfive.jpg";
import * as eventalog6 from "../../images/eventalogsix.jpg";
import * as eventalog7 from "../../images/eventalogseven.jpg";
import * as eventalog8 from "../../images/eventalogeight.jpg";
import * as eventalog9 from "../../images/eventalognine.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/**
 * interface to define properties for about us component
 */
interface Props {
    currentTheme: Theme;

    setCurrentComponent: (componentName: string) => void;

    currentComponent: string;

    classes: any;
}
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
/**
 * export the class for about us component
 */
class aboutUsComponent extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.state.buttons.map((button, index) =>
            this.handleButtonselectedcomponentOnLoad(button))
    }

    state = {
        buttons: getAboutUsItems() as ButtonModel[]
    }

    useStyles = withStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
            },
            heading: {
                fontSize: theme.typography.pxToRem(15),
                fontWeight: theme.typography.fontWeightRegular,
            },
        }),
    );


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                {/* about us first div */}
                <Grid container spacing={24} className={classes.aboutus_first_container}>
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <h1 className={classes.aboutus_first_h1}>When you <span className="color-1e99d4">Hire us</span>, You Hire <span className="color-1e99d4">Quality and Excellence</span></h1>
                        <h3 className={classes.aboutus_first_h3}>No matter the Technology or Services</h3>
                        <p className={classes.aboutus_first_p}>By entrusting your faith and time in us, {companyName} makes sure your investment is in the right hands. Showing flexibility in our work and delivering results have been the key drivers of our growth.</p>
                        <p className={classes.aboutus_first_p}>Taking the innovative approach to transform your ideas into reality, you just have to relax and let our Professionals pave the path towards the realization of your ideas into reality!</p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <CardMedia image={grouppicLogo} className={classes.aboutus_first_cardMedia} />
                    </Grid >
                </Grid>

                <Grid container className={classes.aboutus_expension_container}>
                    <ExpansionPanel className={classes.aboutus_expension_width}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="color-white" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.aboutus_expensionsummary}>
                            <Typography className={classes.aboutus_expensionsummary_typography}>Point of Contact</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Chintan Suthar</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typography}><IconButton>
                                        <img src={skypeLogo} className={classes.aboutus_expensiondetails_typography_imge}>
                                        </img>
                                    </IconButton>chintan.suthar90</Typography>
                                </Grid>

                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.aboutus_expensionsummary_typography_second}>Blog</Typography>
                        </ExpansionPanelSummary>                       
                        <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}>TypeScript and React</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}  >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="color-white" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={classes.aboutus_expensionsummary}>
                            <Typography className={classes.aboutus_expensionsummary_typography}>Life at Centillion Softech</Typography>
                        </ExpansionPanelSummary> 
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typograpgy}>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typograpgy}>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typograpgy}>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typograpgy}>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.aboutus_expensionsummary_typography_second}>Case Studies</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid} >
                                    <CardMedia image={niftyCartImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Nifty Cart</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={atxBoatsImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>ATX Surf Boats</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={doctymeImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Doctyme</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid} >
                                    <CardMedia image={labcantonImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>The Lab Canton</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={ExultImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Exult-it</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={fyuzeImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Fyuze App</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid} >
                                    <CardMedia image={eventalogImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Eventalog</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={memoImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Memo Maker</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={fitnessImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>7wfitness</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={etruckingImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Etrucking Software</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} lg={4} md={4} className={classes.casestudies_grid}>
                                    <Carousel responsive={responsive} className={classes.casestudies_cardMedia}>
                                        <CardMedia image={eventalog1} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog2} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog3} className="image-mobile-perfect "> </CardMedia>
                                        <CardMedia image={eventalog4} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog5} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog6} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog7} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog8} className="image-mobile-perfect"> </CardMedia>
                                        <CardMedia image={eventalog9} className="image-mobile-perfect"> </CardMedia>
                                    </Carousel>
                                    <h4 className={classes.casestudies_a}>Eventalog</h4>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                {/* about  second div */}
               
            </div>
        );
    }

    /**
     * display tab button in about us page(show tab component)
     */
    aboutusButtons() {
        return (
            this.state.buttons.map((button, index) =>
                <Button
                    color="inherit"
                    variant="outlined"
                    style={{
                        margin: 5, padding: 5, display: "block",
                        borderColor: this.props.currentTheme.palette.primary.main,
                        backgroundColor: button.Active ? this.props.currentTheme.palette.primary.main : "white",
                        color: button.Active ? "white" : this.props.currentTheme.palette.primary.main
                    }}
                    key={index} onClick={() => { this.handleButtonselectedcomponent(button) }}  >
                    {button.Text}
                </Button>
            )
        )
    }

    /**
     * use for display selected tab
     */
    handleButtonselectedcomponent = (selectedcomponent: ButtonModel) => {
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

    /**
     * use for display load time tab
     */
    handleButtonselectedcomponentOnLoad = (selectedcomponent: ButtonModel) => {
        const buttons = this.state.buttons;
        buttons.forEach((button: ButtonModel) => {
            if (button.Text === "Our Team") {
                button.Active = true;
            }
            else {
                button.Active = false;
            }
        });
        const newButtons = Object.assign([], buttons);
        this.setState({ buttons: newButtons });
        this.props.setCurrentComponent("our_team");
    }
}
export const aboutUsComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(aboutUsComponent)

