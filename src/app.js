import { showAlert } from "./messages";
import $ from "jquery";
import "./styles.scss";
document.getElementById("btn-alert").addEventListener("click", showAlert);

$("#btn-jq").click(() => alert("click with jquery"));
