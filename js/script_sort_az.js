//================================================================
// sorting function to arrange objects in array alphabetically - tested 16.08 / 11:46 - working
//================================================================

renderList.sort(function(a,b) { 
	return (a.name).localeCompare(b.name);
});
renderList.forEach(render) // rendering objects in new order

