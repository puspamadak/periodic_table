for (i = 0; i < 118; i++) {
	const template = document.getElementById("element_holder").content.cloneNode(true);
	template.getElementById("atomic_number").innerHTML = i + 1;
	template.getElementById("symbol").innerHTML = elements[i][1];
	template.getElementById("name").innerHTML = elements[i][0];

	const mass = elements[i][2];
	//if atomic mass is a whole number put brackets around it
	template.getElementById("atomic_mass").innerHTML = parseInt(mass) == mass ? "(" + parseInt(mass) + ")" : mass;

	document.getElementById("e" + (i + 1)).appendChild(template);
}