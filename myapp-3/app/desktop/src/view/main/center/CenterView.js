Ext.define('myapp3.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items:[{
		xtype:'panel',
		fullscreen:true,
	//layout:'hbox',
	defaultType:'textfield',
	defaults:{
		flex:1
	},
	items:[{
		html:'User Form',
		style:'background-color:white'
	},
{
	fieldLabel:'First Name',
	name:'firstName'
},
{
	fieldLabel: 'Last Name',
	name:'lastName'
},
{
	xtype :'datefield',
	fieldLabel:'Date of Birth',
	name:'birthDate',
	msgTarget:'under',
	invalidText:'"{0}" bad. "{1}" good.'
},
{
	xtype:'button',
	text:'Submit',
	handler:function(){
		Ext.Msg.alert('message added');
	}
}]
	}]
});
