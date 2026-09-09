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
  // Rules:
  // - Reels every Saturday
  // - Posts every Wednesday
  // - Events on Sundays (Sept 27 & Oct 11)
  // - Event Recap Reel on Monday after Event (Sept 28 & Oct 12)
  const initialContentData = {
    // Wed Sept 16 - Post 01
    "2026-09-16": {
      type: "post",
      numBadge: "Post 01",
      dateStr: "Wed, Sept 16",
      niche: "Signature Coffee & Menu Grid",
      hook: "Welcome to Two Hearts Cafe — Where Moments Bloom ☕✨",
      content: "High-resolution 4-photo grid post showcasing heart latte art, avocado toast, berry pastries, and cozy table seating.",
      audio: "Instagram Grid Post",
      status: "Scheduled"
    },
    // Sat Sept 19 - Reel 01
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

    // Wed Sept 23 - Post 02
    "2026-09-23": {
      type: "post",
      numBadge: "Post 02",
      dateStr: "Wed, Sept 23",
      niche: "Storefront Floral Arch Carousel",
      hook: "Where moments feel magical — Two Hearts Cafe 🌸✨",
      content: "Aesthetic Carousel post showing closeups of the floral entrance arch, outdoor lighting, and couples posing at the door.",
      audio: "Instagram Carousel Post",
      status: "Scheduled"
    },
    // Sat Sept 26 - Reel 02
    "2026-09-26": {
      type: "reel",
      numBadge: "Reel 02",
      dateStr: "Sat, Sept 26",
      niche: "Pink Wisteria Floral Ceiling Vibe",
      hook: "The most Instagrammable pink floral ceiling in town 🌸♡",
      content: "Aesthetic panning shots looking up at the hanging pink & lavender flowers, showing cozy plush velvet seating and warm ambient glow.",
      audio: "Lofi Chill Cafe Beat",
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
    // Mon Sept 28 - Reel 05 (EVENT 01 RECAP REEL)
    "2026-09-28": {
      type: "reel",
      numBadge: "Reel 05",
      dateStr: "Mon, Sept 28",
      niche: "Event 01 Recap & Review Reel 🎥",
      hook: "Recap: Highlights from our Couple Canvas Paint Night! 🎨💖",
      content: "Post-event highlight edit showcasing couples painting under the pink floral canopy, custom mugs, smiling reviews, and romantic cafe vibes!",
      audio: "Upbeat Heartwarming Event Montage",
      status: "Event Recap Reel"
    },

    // Wed Sept 30 - Post 03
    "2026-09-30": {
      type: "post",
      numBadge: "Post 03",
      dateStr: "Wed, Sept 30",
      niche: "Chef Special Dessert Showcase",
      hook: "Sweet cravings solved at Two Hearts Cafe 🍰♡",
      content: "Vibrant single photo post highlighting our signature heart chocolate fondant & berry tart with warm lighting.",
      audio: "Instagram Single Post",
      status: "Scheduled"
    },
    // Sat Oct 03 - Reel 03
    "2026-10-03": {
      type: "reel",
      numBadge: "Reel 03",
      dateStr: "Sat, Oct 03",
      niche: "Heart Latte Art ASMR",
      hook: "Watch how we craft our signature Heart Latte Art ☕♡",
      content: "ASMR close-up of steaming milk, pouring heart latte art into a ceramic cup, served on marble top tables under warm floral lighting.",
      audio: "Aesthetic Romantic Pop Track",
      status: "Scheduled"
    },

    // Wed Oct 07 - Post 04
    "2026-10-07": {
      type: "post",
      numBadge: "Post 04",
      dateStr: "Wed, Oct 07",
      niche: "Aesthetic Photo Spots Carousel",
      hook: "Top 3 Photo Spots at @two_hearts_cafe 📸✨",
      content: "Carousel post highlighting 1) Under the Pink Canopy, 2) Storefront Entrance, 3) Neon Heart Backdrop.",
      audio: "Instagram Carousel Post",
      status: "Scheduled"
    },
    // Sat Oct 10 - Reel 04
    "2026-10-10": {
      type: "reel",
      numBadge: "Reel 04",
      dateStr: "Sat, Oct 10",
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

    // Wed Oct 14 - Post 05
    "2026-10-14": {
      type: "post",
      numBadge: "Post 05",
      dateStr: "Wed, Oct 14",
      niche: "Monthly Recap & Highlights Grid",
      hook: "1 Month of Warmth & Memories at Two Hearts Cafe 💖",
      content: "Aesthetic Grid Recap showcasing top moments, coffee pours, and date nights under the floral canopy.",
      audio: "Instagram Grid Post",
      status: "Scheduled"
    }
  };

  // Always refresh dataset v7
  let reelsData = initialContentData;
  localStorage.setItem('twohearts_content_v7', JSON.stringify(reelsData));

  function saveReelsData() {
    localStorage.setItem('twohearts_content_v7', JSON.stringify(reelsData));
  }

  // 3. CALENDAR GENERATION (SEPT 16 - OCT 16, 2026)
  const calendarGrid = document.getElementById('calendar-days-container');
  const tooltip = document.getElementById('reel-hover-tooltip');
  
  // Tooltip fields
  const ttReelNum = document.getElementById('tt-reel-num');
  const ttDate = document.getElementById('tt-date');
  const ttNiche = document.getElementById('tt-niche');
  const ttConcept = document.getElementById('tt-concept');
  const ttAudio = document.getElementById('tt-audio');

  let activeFilter = 'all';

  function renderCalendar() {
    calendarGrid.innerHTML = '';
    
    // Sept 1, 2026 was a Tuesday (index 2)
    const septStartDayIndex = 2; 

    // Render empty padding slots before Sept 1
    for (let i = 0; i < septStartDayIndex; i++) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'cal-day empty';
      calendarGrid.appendChild(emptyDiv);
    }

    // September Days 1 to 30
    for (let day = 1; day <= 30; day++) {
      const monthStr = '09';
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      const fullDate = `2026-${monthStr}-${dayStr}`;
      
      const isInProposalRange = day >= 16;
      const contentInfo = reelsData[fullDate];

      createCalendarDayCell(day, `Sept ${day}`, fullDate, isInProposalRange, contentInfo);
    }

    // October Days 1 to 16
    for (let day = 1; day <= 16; day++) {
      const monthStr = '10';
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      const fullDate = `2026-${monthStr}-${dayStr}`;
      
      const isInProposalRange = true;
      const contentInfo = reelsData[fullDate];

      createCalendarDayCell(day, `Oct ${day}`, fullDate, isInProposalRange, contentInfo);
    }

    renderReelsDeck();
  }

  function createCalendarDayCell(dayNum, labelStr, fullDate, inRange, item) {
    const hasItem = !!item;
    
    if (activeFilter === 'reels' && (!hasItem || item.type !== 'reel')) return;
    if (activeFilter === 'posts' && (!hasItem || item.type !== 'post')) return;
    if (activeFilter === 'events' && (!hasItem || item.type !== 'event')) return;

    const cell = document.createElement('div');
    
    let typeClass = '';
    if (hasItem) {
      if (item.type === 'reel') typeClass = 'is-reel-day';
      else if (item.type === 'post') typeClass = 'is-post-day';
      else if (item.type === 'event') typeClass = 'is-event-day';
    }

    cell.className = `cal-day ${typeClass} ${!inRange ? 'out-of-range' : ''}`;
    cell.dataset.date = fullDate;

    if (!inRange) {
      cell.style.opacity = '0.35';
    }

    const header = document.createElement('div');
    header.className = 'cal-day-num';
    header.innerText = labelStr;
    cell.appendChild(header);

    if (hasItem) {
      const chip = document.createElement('div');
      
      if (item.type === 'reel') {
        chip.className = 'reel-chip';
        chip.innerHTML = `<i class="fa-solid fa-film"></i> <span>${item.numBadge}</span>`;
      } else if (item.type === 'post') {
        chip.className = 'post-chip';
        chip.innerHTML = `<i class="fa-solid fa-image"></i> <span>${item.numBadge}</span>`;
      } else if (item.type === 'event') {
        chip.className = 'event-chip';
        chip.innerHTML = `<i class="fa-solid fa-star"></i> <span>${item.numBadge} (White)</span>`;
      }
      
      cell.appendChild(chip);

      const nichePreview = document.createElement('div');
      nichePreview.className = 'reel-niche-preview';
      nichePreview.innerText = item.niche;
      cell.appendChild(nichePreview);

      // HOVER EVENTS FOR TOOLTIP
      cell.addEventListener('mouseenter', (e) => showTooltip(e, item));
      cell.addEventListener('mousemove', (e) => moveTooltip(e));
      cell.addEventListener('mouseleave', hideTooltip);

      // CLICK EVENT FOR EDIT MODAL
      cell.addEventListener('click', () => openEditModal(fullDate, item));
    }

    calendarGrid.appendChild(cell);
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

    tooltip.classList.remove('hidden');
    moveTooltip(e);
  }

  function moveTooltip(e) {
    const tooltipWidth = 330;
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
