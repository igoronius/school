function Addition() {
	var zahl1 = parseInt(document.frmTaschenrechner.txtEingabe1.value);
	var zahl2 = parseInt(document.frmTaschenrechner.txtEingabe1.value);
	var ergebnis = zahl2+zahl1;
	document.frmTaschenrechner.txtErgebnis.value = ergebnis;
}