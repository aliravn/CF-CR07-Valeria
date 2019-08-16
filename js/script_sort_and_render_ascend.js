//=================================================================
// sorting in ascending order and rendering
//==================================================================
renderListAscend.sort(function(a,b) { // sorting in ascending order
	return new Date(a.timestamp) - new Date(b.timestamp);
});
renderListAscend.forEach(render) // rendering objects in new order
