
CKEDITOR.editorConfig = function( config ) {
	
  	//config.removeDialogTabs = 'image:advanced;image:Upload;image:Link';
  	config.filebrowserUploadUrl="actions/ckeditorUpload"; 
    config.extraPlugins = 'eqneditor';
   	config.toolbarGroups = [
	
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'insert' }	

	];
};


