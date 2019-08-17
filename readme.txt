Naming convention:
filetree: all files with underscore (ex. "index_asc.html")
html classes: kebap-case (ex. "section-header")
JavaScript variables: camelCase (ex. "focusTarget")

1) option_A (static version of project) 
every new request for sorting is redirected to a respective page)
- display elements in initial order of created object array
- display elements in ascending-descending order based on timestamp ("created") property, each order is rendered on a separate page.
- display elements in alphabetical order all at once in one page
- all rendering proceeded by calling only one function render()
- basic primitive search that focuses page on id places, event or restaurants base on input in serch field, works only with exact correct input
- on sm screen and xs images are not displayed at all (hidden bu BS class)
- logo serves as link to homepage, has a tooltip on it

2) option_B (dynamic version of project) 
- logo serves as link to homepage, has a tooltip on it
- display elements in initial order of created object array
- display elements in ascending-descending order based on timestamp ("created") property
- display elements in alphabetical order all at once in one page
- timestamp ("created") property is assigned by random date generating function
- display elements only of selected category (places / restaurats/ events)
- basic primitive search that focuses page on id places, event or restaurants based on input in serch field, works only with exact correct input
- on sm screen and xs images are not displayed at all (hidden bu BS class)
- for rendering there are 2 functions: render() when elements assigned to specific category and renderAll() when elements are rendered all together withut sorting by category (To be honest, it could have been done by one function too, but made like this out of convenience to avoid all extra DOM manipulations after each selector change).

AliraVN
