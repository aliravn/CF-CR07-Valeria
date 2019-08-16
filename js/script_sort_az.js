renderList.sort(function(a,b) { 
	return (a.name).localeCompare(b.name);
});
renderList.forEach(render) // rendering objects in new order
