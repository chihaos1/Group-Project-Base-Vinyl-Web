async function getInfo() {
  // Request and Compile VINYL Information
  const vinylRequest = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl');
  const allVinyl = await vinylRequest.json();
  const vinyl = new Object();
  for (const currentVinyl in allVinyl) {
    vinyl[currentVinyl] = allVinyl[currentVinyl];
  }

  // Request and Compile PLACEMENTS Information
  const placementsRequest = await fetch('https://inst377-vinylweb.herokuapp.com/api/placements');
  const allPlacements = await placementsRequest.json();
  const placements = new Object();
  for (const currentPlacement in allPlacements) {
    placements[currentPlacement] = allPlacements[currentPlacement];
  }

  // Request and Compile PLACEMENTS Information
  const certificationsRequest = await fetch('https://inst377-vinylweb.herokuapp.com/certifications');
  const allCertifications = await certificationsRequest.json();
  const certifications = new Object();
  for (const currentCertification in allCertifications) {
    certifications[currentCertification] = allCertifications[currentCertification];
  }

  // Request and Compile PRICES Information
  

  // Configure and Initialize Glide.js
  const config = {
    type: 'slider',
    perView: 5,
    focusAt: 'center'
  };

  const glide = new Glide('.glide', config).mount();

  // Initialize Elements
  const body = document.querySelector('body');
  const container = document.querySelector('.container');
  const albums = document.querySelectorAll('img');
  const search = document.querySelector('.fa-search');

  // Create Search Bar
  function createSearchBar() {
    const searchBox = document.createElement('label');
    searchBox.className = 'search';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.required = 'required';

    const searchPlaceholder = document.createElement('span');
    searchPlaceholder.className = 'placeholder';
    searchPlaceholder.innerHTML = 'Search an Album';

    searchBox.append(searchInput, searchPlaceholder);
    body.appendChild(searchBox);
  }

  // Create Detail Table
  function createDetail(id) {
    const new_container = document.createElement('div');
    new_container.className = 'detail';
    new_container.style.cssText = `height: 40vh;
                                    `;

    // Created Tab and Content
    const tab = document.createElement('div');
    tab.className = 'tab';
    const content = document.createElement('div');
    content.className = 'contents';

    // Created Buttons
    const general_info = document.createElement('button');
    general_info.className = 'link';
    general_info.innerHTML = 'General Information';
    general_info.addEventListener('click', (evt) => { openTab(0); });

    const songs = document.createElement('button');
    songs.className = 'link';
    songs.innerHTML = 'Songs';
    songs.addEventListener('click', (evt) => { openTab(1); });

    const placementsBut = document.createElement('button');
    placementsBut.className = 'link';
    placementsBut.innerHTML = 'Placements';
    placementsBut.addEventListener('click', (evt) => { openTab(2); });

    const certificationsBut = document.createElement('button');
    certificationsBut.className = 'link';
    certificationsBut.innerHTML = 'Certifications';
    certificationsBut.addEventListener('click', (evt) => { openTab(3); });

    const pricesBut = document.createElement('button');
    pricesBut.className = 'link';
    pricesBut.innerHTML = 'Prices';
    pricesBut.addEventListener('click', (evt) => { openTab(4); });

    // Created Content and Appended to Content Div
    // GENERAL_INFO Contents
    const general_info_content = document.createElement('div');
    general_info_content.className = 'heading';
    if (vinyl[id].producer_ln) {
      general_info_content.innerHTML = `
            <div class="items">
                <div class="item">
                    <i class="fas fa-music"></i>
                    <p class="header">Album</p>
                    <p class="result">${vinyl[id].album_name}</p>
                </div>
                <div class="item">
                    <i class="fas fa-user"></i>
                    <p class="header">Artist</p>
                    <p class="result">${vinyl[id].artist_name}</p>
                </div>
                <div class="item">
                    <i class="fab fa-product-hunt"></i>
                    <p class="header">Producer</p>
                    <p class="result">${vinyl[id].producer_fn} ${vinyl[id].producer_ln}</p>
                </div>
                <div class="item">
                    <i class="fas fa-bookmark"></i>
                    <p class="header">Genre</p>
                    <p class="result">${vinyl[id].genre}</p>
                </div>
                <div class="item">
                    <i class="fas fa-hashtag"></i>
                    <p class="header">Number of Tracks</p>
                    <p class="result">${vinyl[id].track_amount}</p>
                </div>
                <div class="item">
                    <i class="fas fa-hourglass-half"></i>
                    <p class="header">Runtime</p>
                    <p class="result">${vinyl[id].runtime}</p>
                </div>
            </div>
            `;
    } else if (!vinyl[id].producer_ln) {
      general_info_content.innerHTML = `
            <div class="items">
                <div class="item">
                    <i class="fas fa-music"></i>
                    <p class="header">Album</p>
                    <p class="result">${vinyl[id].album_name}</p>
                </div>
                <div class="item">
                    <i class="fas fa-user"></i>
                    <p class="header">Artist</p>
                    <p class="result">${vinyl[id].artist_name}</p>
                </div>
                <div class="item">
                    <i class="fab fa-product-hunt"></i>
                    <p class="header">Producer</p>
                    <p class="result">${vinyl[id].producer_fn}</p>
                </div>
                <div class="item">
                    <i class="fas fa-bookmark"></i>
                    <p class="header">Genre</p>
                    <p class="result">${vinyl[id].genre}</p>
                </div>
                <div class="item">
                    <i class="fas fa-hashtag"></i>
                    <p class="header">Number of Tracks</p>
                    <p class="result">${vinyl[id].track_amount}</p>
                </div>
                <div class="item">
                    <i class="fas fa-hourglass-half"></i>
                    <p class="header">Runtime</p>
                    <p class="result">${vinyl[id].runtime}</p>
                </div>
            </div>
            `;
    }

    // SONGS Contents
    const songs_content = document.createElement('h3');
    songs_content.className = 'heading';
    songs_content.innerHTML = 'Song';

    // PLACEMENTS Contents
    const placements_content = document.createElement('div');
    placements_content.className = 'heading';

    // If the Value from Placement is NULL, Change to N/A
    if (placements[id].billboard === null) {
      placements[id].billboard = 'N/A';
    }
    if (placements[id].occ === null) {
      placements[id].occ = 'N/A';
    }
    if (placements[id].gfk === null) {
      placements[id].gfk = 'N/A';
    }
    if (placements[id].aria === null) {
      placements[id].aria = 'N/A';
    }
    if (placements[id].oricon === null) {
      placements[id].oricon = 'N/A';
    }

    placements_content.innerHTML = `
            <div class="items">
                <div class="item">
                    <img class="flags" src="images/country_flags/us.PNG">
                    <p class="header">Billboard</p>
                    <p class="result-placement">${placements[id].billboard}</p>
                </div>
                <div class="item">
                    <img class="flags" src="images/country_flags/uk.PNG">
                    <p class="header">OCC</p>
                    <p class="result-placement">${placements[id].occ}</p>
                </div>
                <div class="item">
                    <img class="flags" src="images/country_flags/australia.PNG">
                    <p class="header">ARIA</p>
                    <p class="result-placement">${placements[id].aria}</p>
                </div>
                <div class="item">
                    <img class="flags" src="images/country_flags/germany.PNG">
                    <p class="header">GFK</p>
                    <p class="result-placement">${placements[id].gfk}</p>
                </div>
                <div class="item">
                    <img class="flags" src="images/country_flags/japan.PNG">
                    <p class="header">Oricon</p>
                    <p class="result-placement">${placements[id].oricon}</p>
                </div>
            </div>
    `;

    // CERTIFICATIONS Contents
    const certifications_content = document.createElement('div');
    certifications_content.className = 'heading';

    // Changing Variables Depending on Certification Status
    if (certifications[id].diamond === 1) {
        certifications[id].gold = "Certified"
        certifications[id].platinum = "Certified"
        certifications[id].multi_platinum = "Certified"
        certifications[id].diamond = "Certified"
    } else if (certifications[id].multi_platinum === 1) {
        certifications[id].gold = "Certified"
        certifications[id].platinum = "Certified"
        certifications[id].multi_platinum = "Certified"
        certifications[id].diamond = "N/A"
    } else if (certifications[id].platinum === 1) {
        certifications[id].gold = "Certified"
        certifications[id].platinum = "Certified"
        certifications[id].multi_platinum = "N/A"
        certifications[id].diamond = "N/A"
    } else if (certifications[id].gold === 1) {
        certifications[id].gold = "Certified"
        certifications[id].platinum = "N/A"
        certifications[id].multi_platinum = "N/A"
        certifications[id].diamond = "N/A"
    }

    certifications_content.innerHTML = `
            <div class="items items-cert">
                <div class="item item-cert">
                    <img class="cert" src="images/RIAA_cert/gold.PNG">
                    <p class="header">Gold</p>
                    <p class="result">${certifications[id].gold}</p>
                </div>
                <div class="item item-cert">
                    <img class="cert" src="images/RIAA_cert/platinum.PNG">
                    <p class="header">Platinum</p>
                    <p class="result">${certifications[id].platinum}</p>
                </div>
                <div class="item item-cert">
                    <img class="cert" src="images/RIAA_cert/multi-platinum.PNG">
                    <img class="cert" src="images/RIAA_cert/multi-platinum.PNG">
                    <p class="header">Multi-Platinum</p>
                    <p class="result">${certifications[id].multi_platinum}</p>
                </div>
                <div class="item item-cert">
                    <img class="cert" src="images/RIAA_cert/diamond.PNG">
                    <p class="header">Diamond</p>
                    <p class="result">${certifications[id].diamond}</p>
                </div>
            </div>
    `

    // PRICES Contents
    
    // Appends Contents to Content
    content.append(general_info_content, songs_content, placements_content,
      certifications_content);

    // Appends Buttons to Tab
    tab.append(general_info, songs, placementsBut, certificationsBut, pricesBut);

    // Appended Content and Tab to Container
    new_container.append(tab, content);

    // Append New Container to Body
    body.appendChild(new_container);

    // Open Tab 0 (General Information) By Default
    openTab(0);

    // Show Only the Tab that is Clicked On
    function openTab(tabIndex) {
      const heading = document.querySelectorAll('.heading');
      heading.forEach((item) => {
        item.style.display = 'none';
      });
      heading[tabIndex].style.display = 'block';
    }
  }

  // Create Search Box When Search Icon is Clicked On
  search.addEventListener('click', (evt) => {
    if (!body.contains(document.querySelector('.search'))) {
      createSearchBar();
    }
  });

  // Generate Detail Table After an Album is Selected by Clicking
  const lastClickedItem = [];
  albums.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.target.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                                   transform: scale(0.8);
                                   transition-duration: 0.5s`;

      // Center on Clicked Image
      glide.go(`=${evt.target.id}`);

      if (lastClickedItem[0] != evt.target && lastClickedItem[0]) {
        lastClickedItem[0].style.removeProperty('box-shadow');
        lastClickedItem[0].style.removeProperty('transform');
        lastClickedItem.shift();
      } else if (lastClickedItem.length >= 1) {
        lastClickedItem.splice(0, 2);
      }
      lastClickedItem.push(evt.target);

      container.style.cssText = `height: 50vh; 
                                 transition-duration: 1s
                                    `;

      if (!body.contains(document.querySelector('.detail'))) {
        createDetail(evt.target.id);
      } else if (body.contains(document.querySelector('.detail'))) {
        const detail = document.querySelector('.detail');
        detail.remove();
        createDetail(evt.target.id);
      }
    });
  });

  // Remove Detail Box When Area Outside of Container Is Clicked On, Other Than the Images
  body.addEventListener('click', (evt) => {
    const active = document.querySelector('.glide__slide--active').querySelector('img');
    const detail = document.querySelector('.detail');
    const searchBox = document.querySelector('.search');
    if (evt.target.nodeName === 'IMG' || evt.target.nodeName === 'INPUT' || evt.target.className === 'detail'
            || evt.target.className === 'tab' || evt.target.className === 'link'
            || evt.target.className === 'contents' || evt.target.nodeName === 'I'
            || evt.target.className === 'result' || evt.target.className === 'header'
            || evt.target.className === 'items' || evt.target.className === 'item'
            || evt.target.className === 'heading') {
    } else {
      container.style.cssText = `height: 100vh;
                                 transition-duration: 1s;
                                      `;
      detail.remove();
      if (body.contains(searchBox)) {
        searchBox.remove();
      }
      active.style.removeProperty('box-shadow');
      active.style.removeProperty('transform');
    }
  });

  // Generate Detail Table After an Album is Selected by Enter
  // Delete Detail Table When ESC is Entered
  body.addEventListener('keydown', (evt) => {
    const active = document.querySelector('.glide__slide--active').querySelector('img');
    const detail = document.querySelector('.detail');
    if (evt.key === 'Enter') {
      active.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                               transform: scale(0.8);
                               transition-duration: 0.5s`;
      container.style.cssText = `height: 50vh; 
                                     transition-duration: 1s;
                                    `;
      if (!body.contains(document.querySelector('.detail'))) {
        createDetail(active.id);
      } else if (body.contains(document.querySelector('.detail'))) {
        const detail = document.querySelector('.detail');
        detail.remove();
        createDetail(active.id);
      }
    } else if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') {
      albums.forEach((item) => {
        item.style.removeProperty('box-shadow');
        item.style.removeProperty('transform');
      });
    }
    albums.forEach((item) => {
      item.addEventListener('click', (evt) => {
        active.style.removeProperty('box-shadow');
        active.style.removeProperty('transform');
        item.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                               transform: scale(0.8);
                               transition-duration: 0.5s
                                   `;
      });
    });

    // Remove Detail Table
    if (evt.key === 'Escape' && detail) {
      container.style.cssText = `height: 100vh;
                                     transition-duration: 1s;
                                    `;
      detail.remove();
      active.style.removeProperty('box-shadow');
      active.style.removeProperty('transform');
    }
  });
}

window.onload = getInfo();