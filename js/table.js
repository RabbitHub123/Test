(function(){
	var hello = {};
	var table  = {};
	(function(){
		table.init  = function(){
			var element =  document.body;
			var table = document.createElement('table');
			table.id = 'someId';
			table.border = '2';
			element.appendChild(table);
			var table = document.getElementById('someId');
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);
			var cell1 = row.insertCell(0); 
			cell1.innerHTML = '”√ªß√˚'; 
			var cell2 = row.insertCell(1);
			cell2.innerHTML = '√‹¬Î'; 	
		};	
		table.append = function(user_list){
			var table = document.getElementById('someId');
			console.info(user_list);	
			for(var i=0 ,max = user_list.length; i< max ; i++){	
				var rowCount = table.rows.length;	
				console.info(user_list[i]);			
				var row = table.insertRow(rowCount);
				var cell1 = row.insertCell(0);		
				cell1.innerHTML = user_list[i].name; 
				var cell2 = row.insertCell(1);		
				cell2.innerHTML =  user_list[i].age; 
			}		
		};	
	})();
	hello.table = table;
	if (typeof window === 'object' && typeof window.document === 'object') {
		window.hello = hello;
	}
})();
	