//======================================================
// sorting function descending order (new posts first)  - tested 16.08 / 11:46 - working
//======================================================

renderList.sort(function(a,b) { // sort array in descending order
	return new Date(b.timestamp) - new Date(a.timestamp);
});

renderList.forEach(render) // rendering objects in new order