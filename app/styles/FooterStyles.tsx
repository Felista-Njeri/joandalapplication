import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //CONTAINERFIVE
    containerFive: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#f0f0f8",
        paddingBottom: 20
      },
      containerFiveContainerOne: {
        display: "flex",
        flexDirection: "row"
      },
      logoDiv: {
        width: "50%"
      },
      footerLogo: {
        marginLeft: 15,
        marginTop: 10
      },
      footerIcons: {
        marginLeft: 15,
        marginTop: 10,
        width: "75%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      playStoreDiv: {
        width: "50%",
        paddingTop: "4%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      },
      containerFiveContainerTwo: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 7,
        justifyContent: "space-between",
        gap: 7,
        paddingTop: 10
      },
      footerContainer: {
        
      },
      footerDetails: {
        fontFamily: "SpaceGrotesk_400Regular",
        fontSize: 11
      },
      footerTextOne: {
        fontSize: 12,
        textAlign: "center",
        paddingLeft: 3,
        paddingRight: 3,
        fontFamily: "SpaceGrotesk_400Regular"
      }

})