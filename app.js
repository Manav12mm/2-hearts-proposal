// TWO HEARTS CAFE PROPOSAL APP - SEPT 16 to OCT 16

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. SCROLL-BASED PARALLAX & INTERLOCKED HEARTS ANIMATION
  const heroHearts = document.getElementById('hero-interlocked-hearts');
  const parallaxBg = document.getElementById('parallax-bg-img');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 400;
    const progress = Math.min(scrollY / maxScroll, 1);
    
    if (heroHearts) {
      const scale = 1 - (progress * 0.5);
      const translateY = scrollY * 0.8;
      const opacity = 1 - (progress * 0.85);
      
      heroHearts.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      heroHearts.style.opacity = opacity.toFixed(2);
    }

    if (parallaxBg) {
      const bgY = scrollY * 0.35;
      const bgScale = 1 + (progress * 0.05);
      parallaxBg.style.transform = `translate3d(0, ${bgY}px, 0) scale(${bgScale})`;
    }
  });

  // 2. CONTENT DATA CONFIGURATION
  const initialContentData = {
    // Sat Sept 19 - Reel 01 (Added per request)
    "2026-09-19": {
      type: "reel",
      numBadge: "Reel 01",
      dateStr: "Sat, Sept 19",
      niche: "Storefront Entrance Walkthrough",
      hook: "POV: Step inside Two Hearts Cafe past the floral storefront 🌸✨",
      content: "Slow-motion walk-in shot starting at the floral arch entrance and black glass storefront, walking inside under the pink wisteria ceiling towards marble seating.",
      audio: "Soft Romantic Acoustic (Trending Cafe Sound)",
      status: "Scheduled"
    },

    // Tue Sept 22 - Post 01
    "2026-09-22": {
      type: "post",
      numBadge: "Post 01",
      dateStr: "Tue, Sept 22",
      niche: "Signature Coffee & Menu Grid",
      hook: "Welcome to Two Hearts Cafe — Where Moments Bloom ☕✨",
      content: "High-resolution 4-photo grid post showcasing heart latte art, avocado toast, berry pastries, and cozy table seating.",
      audio: "Instagram Grid Post",
      status: "Scheduled"
    },

    // Fri Sept 25 - Reel 02
    "2026-09-25": {
      type: "reel",
      numBadge: "Reel 02",
      dateStr: "Fri, Sept 25",
      niche: "Storefront Floral Arch Romantic Vibe",
      hook: "Where moments feel magical — Two Hearts Cafe 🌸✨",
      content: "Romantic date aesthetic reel showing couples at marble tables under warm lighting and glowing floral arch entrance.",
      audio: "Lofi Chill Romantic Beat",
      status: "Scheduled"
    },

    // Sun Sept 27 - Event 01 (WHITE BADGE)
    "2026-09-27": {
      type: "event",
      numBadge: "Event 01",
      dateStr: "Sun, Sept 27 (5 PM - 8 PM)",
      niche: "Bring Your Own Cup & Couple Canvas Paint 🎨☕",
      hook: "Bring Your Own Cup & Couple Sketch Canvas Evening",
      content: "A cozy romantic date evening where couples bring their favorite custom mug or cup! Two Hearts Cafe provides complimentary sketch pads, canvases, and color paints for couples to paint each other or cafe art. Timing: 5:00 PM to 8:00 PM.",
      audio: "Aesthetic Cafe Lounge & Soft Acoustic",
      status: "Confirmed Sunday Event"
    },

    // Mon Sept 28 - Reel 03 (EVENT 01 RECAP REEL)
    "2026-09-28": {
      type: "reel",
      numBadge: "Reel 03",
      dateStr: "Mon, Sept 28",
      niche: "Event 01 Recap & Review Reel 🎥",
      hook: "Recap: Highlights from our Couple Canvas Paint Night! 🎨💖",
      content: "Post-event highlight edit showcasing couples painting under the pink floral canopy, custom mugs, smiling reviews, and romantic cafe vibes!",
      audio: "Upbeat Heartwarming Event Montage",
      status: "Event Recap Reel"
    },

    // Wed Sept 30 - Post 02
    "2026-09-30": {
      type: "post",
      numBadge: "Post 02",
      dateStr: "Wed, Sept 30",
      niche: "Storefront Floral Arch Carousel",
      hook: "Aesthetic corners at Two Hearts Cafe 🌸✨",
      content: "Aesthetic Carousel post showing closeups of the floral entrance arch, outdoor lighting, and couples posing at the door.",
      audio: "Instagram Carousel Post",
      status: "Scheduled"
    },

    // Sat Oct 03 - Reel 04
    "2026-10-03": {
      type: "reel",
      numBadge: "Reel 04",
      dateStr: "Sat, Oct 03",
      niche: "Pink Wisteria Floral Ceiling Vibe",
      hook: "The most Instagrammable pink floral ceiling in town 🌸♡",
      content: "Aesthetic panning shots looking up at the hanging pink & lavender flowers, showing cozy plush velvet seating and warm ambient glow.",
      audio: "Lofi Chill Cafe Beat",
      status: "Scheduled"
    },

    // Tue Oct 06 - Post 03
    "2026-10-06": {
      type: "post",
      numBadge: "Post 03",
      dateStr: "Tue, Oct 06",
      niche: "Chef Special Dessert Showcase",
      hook: "Sweet cravings solved at Two Hearts Cafe 🍰♡",
      content: "Vibrant single photo post highlighting our signature heart chocolate fondant & berry tart with warm lighting.",
      audio: "Instagram Single Post",
      status: "Scheduled"
    },

    // Fri Oct 09 - Reel 05
    "2026-10-09": {
      type: "reel",
      numBadge: "Reel 05",
      dateStr: "Fri, Oct 09",
      niche: "Behind The Scenes Fresh Bakes",
      hook: "The secret behind Two Hearts Cafe's viral Heart Pastries...",
      content: "Warm kitchen BTS footage showing our chef baking fresh raspberry tarts and plating delicate desserts with love.",
      audio: "Heartwarming Piano Melody",
      status: "Scheduled"
    },

    // Sun Oct 11 - Event 02 (WHITE BADGE)
    "2026-10-11": {
      type: "event",
      numBadge: "Event 02",
      dateStr: "Sun, Oct 11 (5 PM - 9 PM)",
      niche: "Coffee & Comedy Night 🎙️☕",
      hook: "Coffee & Comedy Night — Stand-up Comedy Special",
      content: "Live stand-up comedy performance featuring local comedians! Includes a special event menu with humorous drink names and exclusive promotional discounts on all menu prices for attendees. Timing: 5:00 PM to 9:00 PM.",
      audio: "Live Comedy Night Soundtrack",
      status: "Confirmed Sunday Event"
    },

    // Mon Oct 12 - Reel 06 (EVENT 02 RECAP REEL)
    "2026-10-12": {
      type: "reel",
      numBadge: "Reel 06",
      dateStr: "Mon, Oct 12",
      niche: "Event 02 Recap & Laughs Reel 🎥",
      hook: "Recap: Stand-up Comedy Night at Two Hearts Cafe! 🎙️😂",
      content: "Hilarious post-event review reel featuring comedian punchlines, audience laughs, humorous menu drinks, and happy customer reviews!",
      audio: "High Energy Comedy Recap Audio",
      status: "Event Recap Reel"
    },

    // Wed Oct 14 - Post 04
    "2026-10-14": {
      type: "post",
      numBadge: "Post 04",
      dateStr: "Wed, Oct 14",
      niche: "Monthly Recap & Highlights Grid",
      hook: "1 Month of Warmth & Memories at Two Hearts Cafe 💖",
      content: "Aesthetic Grid Recap showcasing top moments, coffee pours, and date nights under the floral canopy.",
      audio: "Instagram Grid Post",
      status: "Scheduled"
    }
  };

  let reelsData = initialContentData;
  localStorage.setItem('twohearts_content_v12', JSON.stringify(reelsData));

  function saveReelsData() {
    localStorage.setItem('twohearts_content_v12', JSON.stringify(reelsData));
  }

  // 3. CALENDAR GENERATION (CONTINUOUS SINGLE 1-MONTH CALENDAR FORMAT)
  const calendarMonthsWrapper = document.getElementById('calendar-months-wrapper');
  const tooltip = document.getElementById('reel-hover-tooltip');
  
  const ttReelNum = document.getElementById('tt-reel-num');
  const ttDate = document.getElementById('tt-date');
  const ttNiche = document.getElementById('tt-niche');
  const ttConcept = document.getElementById('tt-concept');
  const ttAudio = document.getElementById('tt-audio');

  let activeFilter = 'all';

  function renderCalendar() {
    calendarMonthsWrapper.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'continuous-calendar-block';

    // Single Continuous Header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'month-card-header';
    cardHeader.innerHTML = `
      <div class="month-card-title"><i class="fa-solid fa-calendar-week"></i> Campaign Schedule (Sept 16 – Oct 16, 2026)</div>
      <div class="month-card-range">Continuous Timeline</div>
    `;
    container.appendChild(cardHeader);

    // 7 Weekday Headers
    const weekdaysRow = document.createElement('div');
    weekdaysRow.className = 'calendar-weekdays-row';
    weekdaysRow.innerHTML = `
      <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
    `;
    container.appendChild(weekdaysRow);

    // 7-Column Days Grid
    const daysGrid = document.createElement('div');
    daysGrid.className = 'calendar-days-row-grid';

    // Sept 16, 2026 is Wednesday (weekday index 3: Sun=0, Mon=1, Tue=2, Wed=3)
    // 3 empty offset slots before Sept 16
    for (let i = 0; i < 3; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'clean-cal-day empty';
      daysGrid.appendChild(emptyCell);
    }

    // September days: 16 to 30
    for (let day = 16; day <= 30; day++) {
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      const fullDate = `2026-09-${dayStr}`;
      const item = reelsData[fullDate];
      const cellLabel = `Sept ${day}`;
      const cell = createCleanDayCell(cellLabel, fullDate, true, item);
      daysGrid.appendChild(cell);
    }

    // October days: 1 to 16
    for (let day = 1; day <= 16; day++) {
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      const fullDate = `2026-10-${dayStr}`;
      const item = reelsData[fullDate];
      const cellLabel = `Oct ${day}`;
      const cell = createCleanDayCell(cellLabel, fullDate, true, item);
      daysGrid.appendChild(cell);
    }

    // Oct 16 is Friday (weekday index 5). 1 empty slot for Saturday (Oct 17) to complete 7-col grid
    const emptyEnd = document.createElement('div');
    emptyEnd.className = 'clean-cal-day empty';
    daysGrid.appendChild(emptyEnd);

    container.appendChild(daysGrid);
    calendarMonthsWrapper.appendChild(container);

    renderReelsDeck();
  }

  function createCleanDayCell(dayNum, fullDate, inRange, item) {
    const hasItem = !!item;
    const cell = document.createElement('div');

    let typeClass = '';
    let filterHide = false;

    if (hasItem) {
      if (item.type === 'reel') typeClass = 'is-reel-day';
      else if (item.type === 'post') typeClass = 'is-post-day';
      else if (item.type === 'event') typeClass = 'is-event-day';

      if (activeFilter === 'reels' && item.type !== 'reel') filterHide = true;
      if (activeFilter === 'posts' && item.type !== 'post') filterHide = true;
      if (activeFilter === 'events' && item.type !== 'event') filterHide = true;
    }

    cell.className = `clean-cal-day ${typeClass} ${!inRange ? 'out-of-range' : ''} ${filterHide ? 'filter-hidden' : ''}`;
    cell.dataset.date = fullDate;

    // Date Number
    const numDiv = document.createElement('div');
    numDiv.className = 'clean-day-num';
    numDiv.innerText = dayNum;
    cell.appendChild(numDiv);

    // Pill Badge if item exists
    if (hasItem && !filterHide) {
      const badgeDiv = document.createElement('div');
      
      if (item.type === 'reel') {
        badgeDiv.className = 'pill-badge pill-pink';
        badgeDiv.innerHTML = `<i class="fa-solid fa-film"></i> <span>${item.numBadge}</span>`;
      } else if (item.type === 'post') {
        badgeDiv.className = 'pill-badge pill-gold';
        badgeDiv.innerHTML = `<i class="fa-solid fa-image"></i> <span>${item.numBadge}</span>`;
      } else if (item.type === 'event') {
        badgeDiv.className = 'pill-badge pill-white';
        badgeDiv.innerHTML = `<i class="fa-solid fa-star"></i> <span>${item.numBadge}</span>`;
      }

      cell.appendChild(badgeDiv);

      // HOVER EVENTS FOR TOOLTIP
      cell.addEventListener('mouseenter', (e) => showTooltip(e, item));
      cell.addEventListener('mousemove', (e) => moveTooltip(e));
      cell.addEventListener('mouseleave', hideTooltip);

      // CLICK EVENT FOR EDIT MODAL
      cell.addEventListener('click', () => openEditModal(fullDate, item));
    }

    return cell;
  }

  // 4. HOVER TOOLTIP HANDLERS
  function showTooltip(e, item) {
    ttReelNum.innerText = item.numBadge;
    ttDate.innerText = item.dateStr;
    
    ttReelNum.className = 'tooltip-reel-badge';
    if (item.type === 'post') ttReelNum.classList.add('tt-post');
    else if (item.type === 'event') ttReelNum.classList.add('tt-event');

    ttNiche.innerText = `${item.type.toUpperCase()}: ${item.niche}`;
    ttConcept.innerText = item.content;
    ttAudio.innerText = item.audio;

    tooltip.className = `reel-hover-tooltip tt-type-${item.type}`;
    tooltip.classList.remove('hidden');
    moveTooltip(e);
  }

  function moveTooltip(e) {
    const tooltipWidth = 340;
    const tooltipHeight = 260;
    
    let x = e.clientX + 15;
    let y = e.clientY + 15;

    if (x + tooltipWidth > window.innerWidth) {
      x = e.clientX - tooltipWidth - 15;
    }
    if (y + tooltipHeight > window.innerHeight) {
      y = e.clientY - tooltipHeight - 15;
    }

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    tooltip.classList.add('hidden');
  }

  // 5. FILTER BUTTONS HANDLER
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCalendar();
    });
  });

  // 6. REELS & CONTENT STRATEGY DECK LIST RENDER
  const reelsListContainer = document.getElementById('reels-list-container');
  
  function renderReelsDeck() {
    reelsListContainer.innerHTML = '';
    
    Object.keys(reelsData).sort().forEach(dateKey => {
      const item = reelsData[dateKey];
      const card = document.createElement('div');
      
      let cardTypeClass = '';
      let badgeStyleClass = '';
      if (item.type === 'post') {
        cardTypeClass = 'type-post';
        badgeStyleClass = 'badge-post';
      } else if (item.type === 'event') {
        cardTypeClass = 'type-event';
        badgeStyleClass = 'badge-event';
      }

      card.className = `reel-card ${cardTypeClass}`;
      card.innerHTML = `
        <div class="reel-card-header">
          <span class="reel-num-badge ${badgeStyleClass}">${item.numBadge} • ${item.type.toUpperCase()}</span>
          <span class="reel-date-badge"><i class="fa-regular fa-calendar"></i> ${item.dateStr}</span>
        </div>
        <div class="reel-card-body">
          <h4>${item.niche}</h4>
          <p><strong>Hook/Title:</strong> ${item.hook}</p>
          <p>${item.content}</p>
        </div>
        <div class="reel-card-footer">
          <span><i class="fa-solid fa-music"></i> ${item.audio}</span>
          <button class="btn btn-secondary btn-sm" onclick="triggerEdit('${dateKey}')">Edit Details</button>
        </div>
      `;
      reelsListContainer.appendChild(card);
    });
  }

  window.triggerEdit = function(dateKey) {
    if (reelsData[dateKey]) {
      openEditModal(dateKey, reelsData[dateKey]);
    }
  };

  // 7. EDIT MODAL LOGIC
  const reelModal = document.getElementById('reel-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const reelEditForm = document.getElementById('reel-edit-form');
  
  let currentEditingDate = null;

  function openEditModal(dateKey, item) {
    currentEditingDate = dateKey;
    document.getElementById('modal-reel-badge').innerText = `${item.numBadge} (${item.type.toUpperCase()})`;
    document.getElementById('modal-date-title').innerText = `${item.dateStr}, 2026`;
    document.getElementById('edit-niche').value = item.niche || '';
    document.getElementById('edit-hook').value = item.hook || '';
    document.getElementById('edit-content').value = item.content || '';
    document.getElementById('edit-audio').value = item.audio || '';
    
    hideTooltip();
    reelModal.classList.remove('hidden');
  }

  function closeEditModal() {
    reelModal.classList.add('hidden');
    currentEditingDate = null;
  }

  modalCloseBtn.addEventListener('click', closeEditModal);
  modalCancelBtn.addEventListener('click', closeEditModal);

  reelEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentEditingDate || !reelsData[currentEditingDate]) return;

    reelsData[currentEditingDate].niche = document.getElementById('edit-niche').value;
    reelsData[currentEditingDate].hook = document.getElementById('edit-hook').value;
    reelsData[currentEditingDate].content = document.getElementById('edit-content').value;
    reelsData[currentEditingDate].audio = document.getElementById('edit-audio').value;

    saveReelsData();
    renderCalendar();
    closeEditModal();
  });

  // Initial render
  renderCalendar();
});
