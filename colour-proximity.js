var cs = require("color-string");

module.exports = {
	proximity: proximity
};

function proximity(s1, s2){
	c1 = cs.getRgb(s1);
	c2 = cs.getRgb(s2);
	return Math.sqrt(Math.pow(c1[0]-c2[0],2) + Math.pow(c1[1]-c2[1],2) + Math.pow(c1[2]-c2[2],2));
}
