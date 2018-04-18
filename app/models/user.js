
module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: {
			autoIncrement: true, 
			primaryKey: true, 
			type: Sequelize.INTEGER 
		},
		firstname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		address: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lat: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lng: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		handlesDogs : {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		handlesCats : {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		handlesBirds : {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		handlesReptiles : {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		email: {
			type: Sequelize.STRING,
			validate: { isEmail:true }
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false 
		},
		isSitter: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		},
		status: {
			type: Sequelize.ENUM('active','inactive'),
			defaultValue: 'active'
		}

});

	return User;

}