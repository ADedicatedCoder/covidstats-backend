[//]: # (Your README.md file should be minimally multiple paragraphs in length, and should explain what your project is, what each of the files you wrote for the project contains and does, and if you debated certain design choices, explaining why you made them. Ensure you allocate sufficient time and energy to writing a README.md that you are proud of and that documents your project thoroughly. Be proud of it!)

# YOUR PROJECT TITLE
#### **Video Demo:**  <URL HERE>
#### **Files**
#### - application.py
Contains the main Flask program to handle different routes, load HTML files as website templates with statistics from the API, collect and send out data from a SQLite database. 
#### - regions.db
Contains data about each of the provinces and each individiual region. It's columns are the 2-letter province code, the province name, the region name, the 4-digit numeric region code.
#### - layout.html
Contains the HTML for the navigational bar; links images, CSS files, fonts and Bootstrap; and creates the title, block and footer sections for use by other HTML files.
#### - index.html
The HTML file for the homepage. It includes an overview of what visitors will get to see on the website and includes images that directly lead to the pages.
#### - map.html
Includes the HTML rendering of a SVG map of Canada with all the provinces having their own separate sections. Additionally, each section is hyperlinked to go to a unique route and each section is titled with it's province for visitors unfamiliar with the geography of the country.
#### - region.html
Includes a select menu with all the available regions to select from. The options available to be selected are dynamically updated depending on the province that was initially selected at the Map page. For convenience, it also includes a button to go back to the map, so that inter-page navigation can be done seamlessly. 
#### - stats.html
Includes all the statistical data gathered from the API in a neat and tabulated format and has a button embedded within the page to go back to Region Selection for quick browsing. 
#### - prevent.html
Includes tips and safety precautions to help maximize user protection against COVID-19. There are multiple collapsibles with consise headers and detailed instructions and guides for safety from the World Health Organization. Additionally, for users who only wish to get the main information, there are TL;DR images in each collapsible and one main TL;DR image that summarizes all the gist of the Prevention page.
#### - about.html
Includes the version of the API and when the data was last updated. It additionally includes some personal notes and the main tools used to build the website.
#### - style.css
Includes most of the style elements used throughout the website. The main color scheme was meant to be a light grey or white with red as a secondary color but later I changed the primary color to a darker theme as it suited the website better and looked a lot more stylish.
