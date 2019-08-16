//=================================================================
// sorting in ascending order and rendering (oldest posts first)  - tested 16.08 / 11:46 - working
//==================================================================
// renderList.sort(function(a,b) { // sorting in ascending order
// 	return new Date(a.timestamp) - new Date(b.timestamp);
// });
renderList.sort(sortAscending);
renderList.forEach(render) // rendering objects in new order




