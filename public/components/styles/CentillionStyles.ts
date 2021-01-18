import { isMobile } from "react-device-detect";
import * as reactLogo from "../../images/reactnew.jpg";
/**
 * table styles
 * @param theme 
 */
export const centillionStyles = theme => ({

    
      
      btnfileSelect:{
        padding: "8px 20px",
        fontSize:isMobile ? "20px" : "15px",
        fontWeight: "bold",
        height: 100,
        width: isMobile ? "97%" : "100%",
        border: "1px rgb(221, 221, 221) solid",
        backgroundColor: "rgb(221, 221, 221)",
        color: "rgb(73, 80, 87)"
      },
      
     inputblock:{
        fontSize: "100px",
        position: "absolute",
        left: 0,
        top: 0,
        opacity: 0
      },


    grid_Dash_second_main_p: {
        textAlign: 'justify'
    },
    image_perfect: {
        height: 250,
        width: "100%",
        // borderRadius: "100%",
        transition: "transform .2s",
        margin: "0px auto",
         "&:hover": {
             transform: "scale(1.0)"
        }
    },
    main_div: {
        fontFamily: "Roboto",
        position: "relative"
    },
    hide_div: {
        height: isMobile ? "157px" : "114px"
    },
    carousel_main_grid: {
        width: "100%",
        margin: 0,
        textAlign: "left",
        display: "block"
    },
    carousel_paper_grid: {
        backgroundColor: "#2a2f35",
        width: "100%"
    },
    carousel_paper_grid_typography: {
        lineHeight: 2,
        color: "white",
        position: "absolute",
        paddingTop: isMobile ? "5%" : "10%",
        paddingLeft: "5%",
        fontFamily: "Roboto",
        fontSize: isMobile ? 15 : 35,
        maxWidth: isMobile ? 162 : 550
    },
    header_cardMedia: {
        width: "100%",
        height: isMobile ? 125 : 500
    },
    
    header_cardMedia_portfolio: {
        width: "100%",
        height: isMobile ? 125 : 400
    },
    grid_dash_second_h1: {
        fontSize: isMobile ? 25 : 40,
        textAlign: "center",
        color: "#ffffff",
        textTransform: "uppercase"
    },
    hr_border: {
        width: "100px",
        border: "0px",
        height: "1px",
        backgroundColor: "#b7c500"
    },
    grid_dash_second_h3_career:{        
        fontSize: isMobile ? 12 : 20,
        textAlign: "center",
        color: "#343639"
    },
    grid_dash_second_h3: {
        fontSize: isMobile ? 12 : 20,
        textAlign: "center",
        color: "#b7c500"
    },
    grid_dash_second_h3_home: {
        fontSize: isMobile ? 12 : 20,
        textAlign: "center",
        color: "#ffffff"
    },
    grid_dash_second_main: {
        width: "12%"
    },
    grid_dash_second_main_paper: {
        // borderRadius: "100%",
        padding: "0px"
    },
    grid_Dash_second_main_h2: {
        color: "black",
        textAlign: "center"
    },
    grid_dash_third: {
        background: 'linear-gradient(45deg, #2a2f35 30%, rgba(66, 179, 219, 0.23) 90%)',
        height: isMobile ? 100 : 200
    },
    grid_dash_third_typography: {
        fontSize: isMobile ? 20 : 50, color: "rgb(255, 255, 255)", textAlign: "center", padding: isMobile ? "9%" : "4%"
    },
    
    grid_dash_third_main_grid: {
        padding: "0.5%"
    },
    grid_dash_flippy_height: {
        height: '220px'
    },
    grid_dash_flippy_front: {
        backgroundColor: '#ffffff'
    },
    grid_dash_flippy_front_cardMedia: {
        width: 100,
        height: 100,
        margin: "0px auto"
    },
    grid_dash_flippy_front_title: {
        fontSize: isMobile ? 15 : 18,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#2a2f35"
    },
    grid_dash_flippy_back: {
        backgroundColor: '#2a2f35'
    },
    grid_dash_flippy_back_header: {
        fontSize: isMobile ? 15 : 18,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "rgb(255, 255, 255)",
        textAlign: "center"
    },
    grid_dash_flippy_back_div: {
        fontSize: isMobile ? 12 : 15,
        lineHeight: 1.5,
        color: "rgb(255, 255, 255)",
        fontFamily: "Roboto"
    },
    portfolio_header_image: {
        width: "100%",
        height: isMobile ? 125 :400,
        opacity: 0.8
    },
    header_title_on_image: {
        color: "#2a2f35",
        textAlign: "center",
        position: "relative",
        top: isMobile ? -123 : -320,
        fontSize: isMobile ? 18 : 50,
        fontWeight: 800
    },
    header_title_on_image_p: {
        color: "#2a2f35",
        textAlign: "center",
        fontSize: isMobile ? 12 : 25,
        position: "relative",
        top: isMobile ? -110 : -320
    },
    
  
    portfolio_mobile_first_h3: {
        padding: isMobile ? "3%" : "7%",
        lineHeight: 1.5,
        color: "#2a2f35",
        fontSize: 20,
        fontWeight: 400,
        margin: 10,
        wordBreak: "break-word",
        textAlign: "justify"
    },
    portfolio_mobile_button: {
        marginBottom: 20,
        color: "#2a2f35",
        border: "1px #2a2f35 solid",
        height: 40,
        width: "150",
        fontWeight: 400,
        float: "right",
        marginRight: 20,
        MozBorderRadius: 5,
        boxAlign: "center"
    },
    portfolio_mobile_cardMedia: {
        width: "100%",
        height: isMobile ? 200 : "100%"
    },
    portfolio_mobile_second: {
        padding: "4% 5% 2% 5%",
        backgroundColor: "#2a2f35"
    },
    portfolio_mobile_second_span: {
        fontSize: isMobile ? 27 : 50,
        lineHeight: 1,
        color: "white",
        textAlign: "center"
    },
    
    portfolio_mobile_second_p: {
        fontSize: 20,
        lineHeight: isMobile ? 1.5 : 2,
        color: "white",
        wordBreak: "break-word",
        textAlign: "justify",
        margin: 20
    },
    portfolio_mobile_third_container: {
        padding: "2% 3% 5% 5%",
        width:'100%'
    },
    portfolio_mobile_third_grid: {
        borderRadius: 5
    },
    portfolio_mobile_third_cardMedia: {
        height: 270,
        width: "100%",
        borderRadius: 5,
        backgroundImage: `url(${reactLogo})`,
        "&:hover": {
            opacity: 1,
            boxShadow: "0 0 5px 5px rgba(183, 197, 00, 0.6)",
        }
    },
    // portfolio_paper:{
    //     "&:hover":{         
    //         boxShadow:"5px 5px 5px 5px #888888"
    //       }
    // },
    portfolio_mobile_third_h3: {
        fontWeight: 600
    },
    aboutus_first_container: {
        padding: "2% 5% 2% 5%",
        width: "100%",
        margin: 0
    },
    aboutus_first_h1: {
        lineHeight: 1.7
    },
    aboutus_first_h3: {
        lineHeight: 1.7,
        color: "#151515"
    },
    aboutus_first_: {
        color: "gray",
        lineHeight: 1.5,
        wordBreak: "break-word"
    },
    aboutus_first_cardMedia: {
        height: isMobile ? 200 : 360,
        width: "100%"
    },
    aboutus_expension_container: {
        padding: "2% 4% 5% 4%"
    },
    aboutus_expension_width: {
        width: "100%"
    },
    aboutus_expensionsummary: {
        backgroundColor: "#2a2f35"
    },
    aboutus_expensionsummary_typography: {
        color: "white",
        fontWeight: 600,
        fontSize: "1.17em",
        fontFamily: "Roboto"
    },
    aboutus_expensiondetails_grid_typograpgy: {
        fontWeight: 600,
        fontSize: 16,
        fontFamily: "Roboto"
    },
    padding_5: {
        padding: 5
    },
    aboutus_expensiondetails_typography: {
        paddingBottom: 10,
        fontSize: 16,
        fontFamily: "Roboto"
    },
    aboutus_expensiondetails_typography_imge: {
        height: 20,
        width: 20,
        marginRight: 20
    },
    aboutus_expensionsummary_typography_second: {
        fontWeight: 600,
        color: "#2a2f35",
        fontSize: "1.17em",
        fontFamily: "Roboto"
    },
    aboutus_expensiondetails_second: {
        background: "#2a2f35"
    },
    aboutus_expensionsummary_grid_typography: {
        padding: "5px 0px 5px 0px",
        lineHeight: 1.5,
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto"
    },
    aboutus_expensionsummary_grid_cardMedia: {
        height: 250,
        width: "100%",
        borderRadius: 5
    },
    aboutus_expensionsummary_grid_a: {
        fontWeight: 600,
        padding: "10px 0px",
        color: "white",
        fontFamily: "Roboto"
    },
    aboutus_third_container: {
        padding: "2% 5% 2% 5%",
        borderBottom: "1px #9E9E9E solid",
        display: "none"
    },
    font_family: {
        fontFamily: "Roboto"
    },
    formgroup_padding: {
        padding: "0px 20px 2px 20px"
    },
    blog_h4: {
        marginTop: 10
    },
    blog_a: {
        padding: "5px 0px 5px 0px",
        lineHeight: 1.5
    },
    casestudies_grid: {
        padding: 10
    },
    casestudies_cardMedia: {
        height: 180,
        width: "100%",
        borderRadius: 5,
        transition: "transform .1s",
        "&:hover": {
            transform: "scale(1.1)"
        }
    },
    casestudies_a: {
        fontWeight: 600,
        color:"#ffffff"
    },
    casestudies_h3: {
        paddingRight: 200
    },
    casestudies_padding: {
        padding: "5px 0px 5px 0px"
    },
    fontWeight_600: {
        fontWeight: 600
    },
    paddingbottom_10: {
        paddingBottom: 10
    },
    contactus_firstdiv: {
        padding: "2% 5% 2% 5%",
        backgroundColor: "rgb(245, 245, 245)"
    },
    contactus_firstdiv_h4: {
        marginTop: -14,
        marginLeft: -12
    },
    contactus_firstdiv_image: {
        height: 18,
        width: 25
    },
    contactus_skype_logo: {
        width: 18,
        height: 18
    },
    contactus_firstdiv_imgGrid: {
        height: isMobile ? 125 : 400,
        opacity: 0.8
    },
    contactus_firstdiv_grid_image: {
        width: "100%",
        height: isMobile ? 125 : 400,
        opacity: 0.8
    },
    
   
    contactus_seconddiv_formgrp_grid_100: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 10,
        maxWidth: "100%",
        flexBasis: "100%"
    },
    contactus_seconddiv_formgrp_input: {
        paddingLeft: 20,
        height: 40,
        width: isMobile? "90%" : "92%",
        border: "1px rgb(221, 221, 221) solid",
        backgroundColor: "rgb(221, 221, 221)",
        color: "rgb(73, 80, 87)"
    },
    contactus_seconddiv_file_uploader_btn: {
        border: '2px solid gray',
        color: 'gray',
        backgroundColor: 'white',
        padding: '8px 20px',
        borderRadius: '8px',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    contactus_seconddiv_formgrp_select: {
        paddingLeft: 20,
        width: "98.5%",
        height: 45,
        borderTop: "1px rgb(221, 221, 221)  solid",
        borderBottom: "1px rgb(221, 221, 221) solid",
        borderLeft: "1px rgb(221, 221, 221) solid",
        borderRight: "1px rgb(221, 221, 221) solid",
        color: "rgb(73, 80, 87)",
        backgroundColor: "rgb(221, 221, 221)"
    },
    contactus_seconddiv_formgrp_txtarea: {
        paddingTop: 10,
        paddingLeft: 20,
        height: 100,
        width: isMobile ? "92%" :"95%",
        border: "1px rgb(221, 221, 221) solid",
        backgroundColor: "rgb(221, 221, 221)",
        color: "rgb(73, 80, 87)"
    },
    contactus_seconddiv_formgrp_grid2: {
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
        textAlign: "center"
    },
    // contactus_seconddiv_formgrp_grid2_btn: {
    //     color: "#2a2f35",
    //     border: "1px #2a2f35 solid",
    //     height: 40,
    //     MozBorderRadius: 5
    // },
    // contactus_seconddiv_formgrp_grid3_h2: {
    //     textAlign: "center",
    //     color: "#2a2f35"
    // },
    // contactus_seconddiv_formgrp_grid3_formgrp: {
    //     height: isMobile ? 215 : 350,
    //     width: "100%",
    //     borderRadius: 5
    // },
    footer_appbar: {
        justifyContent: "space-between",
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor:"#151515",
        paddingTop:"30px"
    },
    footer_h3: {
        fontWeight: 500,
        color: "#b7c500",
        margin: 20
    },
    footer_iconbtn_grd1: {
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 15
    },
    color_white: {
        color: "white"
    },
    footer_grd2: {
        marginLeft: 10,
        marginTop: -14
    },
    footer_grd2_a: {
        color: "white",
        paddingLeft: 10
    },
    footer_grd3_h3: {
        fontWeight: 500,
        color: "#b7c500",
        margin: 20
    },
    footer_grd3_img: {
        height: 25,
        width: 25,
        paddingLeft: 20,
        paddingTop: 15
    },
    footer_grd4: {
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 20
    },
    footer_grd4_span: {
        paddingLeft: "5%"
    },
    footer_grd5: {
        textAlign: "right",
        paddingBottom: 10,
        marginTop: 30,
        paddingRight: isMobile ? "0px" : "20px"
    },
    menubar_appbar: {
        fontFamily: "Roboto",
        backgroundColor: "white",
        position: "fixed",
        top: "68px",
        marginTop: 68
    },
    menubar_span: {
        color: "#2a2f35",
        fontSize: isMobile ? 30 : 40
    },
    menubar_paddingtop: {
        paddingTop: 18
    },
    topbar_appbar: {
        fontFamily: "Roboto",
        position: "fixed",
        height: "68px"
    },
    topbar_toolbar: {
        justifyContent: "space-between",
        backgroundColor: "#2a2f35",
        minHeight:"50px"
    },
    topbar_iconbtn: {
        height: isMobile ? "31px" : "48px"
    },
    topbar_logo: {
        height: 20,
        width: 20
    },
    topbar_formctrl: {
        paddingTop: isMobile ? 7 : 15,
        display: "inline-block",
        cursor: "pointer",
        float: "right"
    },
    topbar_span: {
        marginLeft: 10,
        position: "relative",
        bottom: 4
    },
    footer_seconddiv_padding: {
        padding: isMobile ? "2% 5% 20% 5%" : "2% 5% 5% 5%",
        width:'100%'
    },
    
    desclaimer_seconddiv_padding: {
        padding: isMobile ? "8%" : "2% 5% 5% 5%",
        width:'100%'
    },
    sitemap_heading: {
        width: 500,
        /* height: 40px; */
        /* margin: 0 auto; */
        color: '#b7c500',
        fontSize:30,
        fontWeight:800
    },

    career_icon_perfect: {
        height: 100,
        width: 100,
        margin: "0px auto",

    },
    career_grid_dash_second_main_paper: {
        minHeight: 275,
        padding: 27,
        background: "linear-gradient(to bottom, #ffffff 0%, #b7c500 100%)"
    },
    career_menu_buttons: {
        paddingLeft: isMobile ? 2 : 5,
        paddingRight: isMobile ? 2 : 5,
        marginLeft: isMobile ? 2 : 5,
        marginRight: isMobile ? 2 : 5,
        marginBottom: 15,
        fontSize: isMobile ? 12 : 16,
        minHeight: isMobile ? 30 : 36,
        minWidth: isMobile ? 76 : 88,
        "&:hover": {
            cursor: "pointer",
            borderBottom: "1px #ffffff solid"
        }
    }
    //   root: {
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //     color: 'white',
    //     padding: '0 30px',
    //   },
    //   "&:hover":{
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    //   }
});
