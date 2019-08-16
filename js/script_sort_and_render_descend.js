//======================================================
// sorting function descending order
//======================================================

renderListDescend.sort(function(a,b) { // sort array in descending order
	return new Date(b.timestamp) - new Date(a.timestamp);
});

renderListDescend.forEach(render) // rendering objects in new order