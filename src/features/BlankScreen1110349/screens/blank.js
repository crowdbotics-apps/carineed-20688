import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/bg.png"
      }}
      style={this.props.themedStyle.ImageBackground_1}
    >
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/car_u9Oe4ee.png"
        }}
        style={this.props.themedStyle.Image_3}
      />
      <Text style={this.props.themedStyle.Text_7}>CAR-I-NEED</Text>
    </ImageBackground>
  )
}

_Blank = withStyles(__Blank, theme => ({
  ImageBackground_1: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "cover"
  },
  Image_3: {
    width: 102,
    height: 56,
    marginLeft: 9,
    marginRight: 1,
    marginTop: 7,
    marginBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 18,
    paddingBottom: 1,
    overflow: "visible",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  Text_7: {
    marginLeft: 118,
    marginRight: 0,
    marginTop: -25,
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 5,
    overflow: "visible",
    alignSelf: "flex-start",
    fontSize: 20,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Montserrat-Bold",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "justify",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
}))

function mapStateToProps(state) {
  return { state: state }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
