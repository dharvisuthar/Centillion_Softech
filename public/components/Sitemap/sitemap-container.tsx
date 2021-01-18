
import { connect } from "react-redux";
import { SitemapComponentWithStyles } from "../Sitemap/sitemap-component";
import { setCurrentComponentAction } from "../../actions";


const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentComponent: (componentName: string) =>
        dispatch(setCurrentComponentAction(componentName))
};
};

export const SitemapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitemapComponentWithStyles);
