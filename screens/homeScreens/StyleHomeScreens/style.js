import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  // Back Button ==================================
  backButton: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    position: "absolute",
  },
  // Time Table ===================================
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  containerSemestre: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    alignItems: "center",
  },
  semestre: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#4b9b81",
  },
  touch: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100,
    padding: 10,
    width: "40%",
    alignItems: "center",
  },
  semestreT: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  containerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    textAlign: "center",
    color: "gray",
  },
  // Group and Section =============================
  semestreGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
  },
  touchGroup: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#4b9b81",
    borderRadius: 100,
    padding: 10,
    width: "40%",
    alignItems: "center",
  },
  groupT: {
    color: "#4b9b81",
    fontWeight: "800",
    fontSize: 16,
  },
  groupCard: {
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#e8e8e8",
    borderStayle: "solid",
    borderWidth: 0.7,
    borderColor: "gray",
    borderRadius: 10,
    elevation: 5,
  },
  groupRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderColor: "gray",
  },
  groupRowBelow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  groupText1: {
    color: "gray",
    fontWeight: "600",
  },
  groupText2: {
    fontWeight: "800",
  },

  // Exam Schedule ======================================
  schedule: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 35,
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 15,
  },
  scheduleType: {
    backgroundColor: "#fdb308",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  scheduleModule: {
    marginHorizontal: 15,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
  },
  scheduleModuleName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  scheduleDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleDate: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ec6f6f",
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
  },
  scheduleTime: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebf4ff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
  },

  // Pourcentage =====================================
  PourcentageTitle: {
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 35,
    marginBottom: 15,
  },
  PourcentageCard: {
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 25,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
  },
  PourcentageModule: {
    paddingBottom: 15,
  },
  PourcentageDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 0.4,
    borderColor: "gray",
  },
  PourcentageDateContainerBelow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PourcentageDate: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebf4ff",
    borderStyle: "solid",
    borderWidth: 0.35,
    borderColor: "gray",
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 10,
  },
  PourcentageTime: {
    backgroundColor: "#ebfce4",
    borderStyle: "solid",
    borderWidth: 0.35,
    borderColor: "gray",
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 10,
  },
  // Exam Grade ======================================
  gradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderColor: "gray",
  },
  gradeText1: {
    fontWeight: "800",
    width: "50%",
  },
  gradeText2: {
    color: "gray",
    fontWeight: "600",
    width: "20%",
  },
  gradeText3: {
    color: "gray",
    fontWeight: "600",
    width: "20%",
  },
  // Assessment ======================================
  assessmentTD: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffebd6",
    borderStyle: "solid",
    borderWidth: 0.35,
    borderColor: "#e66300",
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 10,
  },
  assessmentGrade: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffe0e0",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 10,
  },
  // Academic vacation ================================
  photo: {
    fontSize: 65,
    color: "gray",
    backgroundColor: "#e8e8e8",
    marginRight: 20,
    padding: 5,
    borderRadius: 100,
  },
  vacation: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 2,
    borderRadius: 15,
    backgroundColor: "#4b9b81",
  },
  vacationText: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  // Enrollment ======================================
  enrollment: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  enrollmentText: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  t: {
    backgroundColor: "#2f2f3d",
    color: "white",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 15,
  },
  eContainer: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginTop: 5,
  },
  eText: {
    fontWeight: "900",
    fontSize: 15,
  },
  eField: {
    paddingVertical: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 0.6,
  },
  eFieldBelow: {
    paddingVertical: 5,
  },
});