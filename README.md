# Vinyl Records Database 
## Background
Despite the emergence of more "efficient" technologies, many people have still maintained interests in vinyl records. However, the passage of time and records being damaged or lost have added difficulties to keeping track of their existences. It is also impossible to manage a collection of records without being physically present. With the popularization of music streaming platforms and management systems, the team believes vinyl records could benefit from these technological shifts. 

## Project Description
Our goal is to create a management interface that allows users to upload or gather information on these records without having to be in-person. The digitization of vinyl records information will allow more people to view them efficiently and bridge the gap between accessibility and management.

## Project Link
https://inst377-vinylweb.herokuapp.com/

## Target Browsers
* Google Chrome
* Mozilla Firefox
* Microsoft Edge

# Developer Manual

## Installation of Application and Dependencies
1. Clone the [Repository](https://github.com/chihaos1/Group-Project-Base-Vinyl-Web.git) using GitHub Desktop or Terminals with **`git clone https://github.com/chihaos1/Group-Project-Base-Vinyl-Web.git`**.
2. Navigate to the directory of the cloned repository. 
3. Enter **`npm start`** in the directory's terminal to install all dependencies. 

## Running the application on a server
1. Open the directory, where the [Repository](https://github.com/chihaos1/Group-Project-Base-Vinyl-Web.git) is stored, in VSCode's Terminal or your OS's Terminal
2. Type into the terminal **`npm start`** and run it by pressing enter. There should be no errors popping up.
3. In your desired web browser, enter the following URL to view the Application: **`http://localhost:3000/`**

## Running any tests written for the software
1. Within VSCode, Open a split terminal (or two terminals) in the [Repository](https://github.com/chihaos1/Group-Project-Base-Vinyl-Web.git) directory
2. In one terminal run **`npm start`**
3. In the second terminal run **`npm test`**

## Implementation of API and Endpoints
**`/api/vinyl`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of general vinyl information, which includes the producer and singer information |
| POST | Creates a new database entry of a vinyl, with a numerical reference to the producer and singer |
| PUT | Updates an existing entry within the database, including new producer or singer information |
| DELETE | Removes an existing within the database, not including the producer or singer |

<br>

**`/api/singers`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all artists that have an entry within the database |
| POST | Creates a new database entry of an artist |

<br>

**`/api/producers`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all producer first and last names in the database  |
| POST | Creates a new database entry a producer by first and last name |

<br>

**`/api/songs`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all songs from the selected vinyl, including the musical info related to each song |

<br>

**`/api/placements`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all placements from the selected vinyl  |

<br>

**`/api/certifications`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all certification that the selected album was awarded |

<br>

**`/api/prices`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of pricing information from discog relevant to the selected vinyl  |

<br>

In this case, the route changes based on the vinyl's name and artist name

**`/api/albumCover/:albumName(based on selected vinyl)/:artistName(based on selected vinyl)`**
| Method | Purpose |
| :--- | :---: |
| POST | Returns the address of an image to be used for the display of newly input vinyls to the database|

## Known Issues and Future Developments
### Issues ###
*  Search results appear out of position on some screen sizes. Resolvable if viewed in full screen and in 100% zoom. 
*  Unstable performance on mobile and tablet devices. 
*  No deletion for producers and singers. Entries sometimes get duplicated in the database. 

### Future Developments ###
*  Expand database to include more data on each album. 
*  Allow users to create accounts. 
*  Add the ability to play songs with Spotify API ([documentation](https://developer.spotify.com/documentation/web-playback-sdk/)).  
*  Add the ability to create playlists. 
