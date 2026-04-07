import './style.css';

// ===== DATA =====
const USERS = [
  { id: 1, name: 'sophia_ray', avatar: 'https://i.pravatar.cc/150?img=1', online: true },
  { id: 2, name: 'marcus_noir', avatar: 'https://i.pravatar.cc/150?img=3', online: true },
  { id: 3, name: 'elena_wave', avatar: 'https://i.pravatar.cc/150?img=5', online: false },
  { id: 4, name: 'james_flux', avatar: 'https://i.pravatar.cc/150?img=8', online: true },
  { id: 5, name: 'mia_cosmos', avatar: 'https://i.pravatar.cc/150?img=9', online: false },
  { id: 6, name: 'lucas_zen', avatar: 'https://i.pravatar.cc/150?img=11', online: true },
  { id: 7, name: 'aria_spark', avatar: 'https://i.pravatar.cc/150?img=16', online: false },
  { id: 8, name: 'noah_drift', avatar: 'https://i.pravatar.cc/150?img=12', online: true },
  { id: 9, name: 'zara_bloom', avatar: 'https://i.pravatar.cc/150?img=20', online: false },
  { id: 10, name: 'kai_storm', avatar: 'https://i.pravatar.cc/150?img=14', online: true },
];

const POSTS = [
  {
    user: USERS[0], location: 'Santorini, Greece',
    image: '/images/img01.jpg',
    likes: 2847, caption: 'Golden hour hits different here ✨🌅 #Santorini #Travel',
    comments: 184, time: '2 hours ago',
  },
  {
    user: USERS[1], location: 'Tokyo, Japan',
    image: '/images/img02.jpg',
    likes: 5123, caption: 'Neon dreams in the city that never sleeps 🌃🇯🇵 #Tokyo #NightLife',
    comments: 342, time: '4 hours ago',
  },
  {
    user: USERS[2], location: 'Bali, Indonesia',
    image: '/images/img03.jpg',
    likes: 1932, caption: 'Found my paradise 🌴💚 This place is absolutely unreal',
    comments: 97, time: '6 hours ago',
  },
  {
    user: USERS[3], location: 'New York City',
    image: '/images/img04.jpg',
    likes: 8901, caption: 'City vibes and skyline dreams 🏙️🔥 #NYC #Urban',
    comments: 521, time: '8 hours ago',
  },
  {
    user: USERS[4], location: 'Swiss Alps',
    image: '/images/img05.jpg',
    likes: 3456, caption: 'Nature is the ultimate artist 🏔️❄️ #Alps #Adventure',
    comments: 213, time: '12 hours ago',
  },
];

const MESSAGES = [
  { user: USERS[0], lastMsg: 'Hey! Did you see that sunset photo? 🌅', time: '2m', unread: 3 },
  { user: USERS[1], lastMsg: 'Let\'s grab coffee tomorrow ☕', time: '15m', unread: 1 },
  { user: USERS[3], lastMsg: 'That was an amazing trip!', time: '1h', unread: 0 },
  { user: USERS[5], lastMsg: 'Sent you the playlist 🎵', time: '2h', unread: 2 },
  { user: USERS[7], lastMsg: 'Check out this new spot', time: '3h', unread: 0 },
  { user: USERS[2], lastMsg: 'Happy birthday! 🎂🎉', time: '5h', unread: 0 },
  { user: USERS[4], lastMsg: 'The concert was incredible', time: '8h', unread: 0 },
  { user: USERS[6], lastMsg: 'Haha that\'s so true 😂', time: '1d', unread: 0 },
  { user: USERS[8], lastMsg: 'See you this weekend!', time: '1d', unread: 0 },
  { user: USERS[9], lastMsg: 'Thanks for the recommendation', time: '2d', unread: 0 },
];

const CHAT_MESSAGES = [
  { sent: false, text: 'Hey! How are you doing? 😊', time: '10:30 AM' },
  { sent: true, text: 'I\'m great! Just got back from a trip', time: '10:31 AM' },
  { sent: false, text: 'Oh that\'s awesome! Where did you go?', time: '10:32 AM' },
  { sent: true, text: 'Santorini! It was absolutely breathtaking', time: '10:33 AM' },
  { sent: true, type: 'image', image: '/images/img06.jpg', time: '10:33 AM' },
  { sent: false, text: 'OMG that view is incredible! 😍', time: '10:35 AM', reaction: '❤️' },
  { sent: false, text: 'I\'m so jealous right now haha', time: '10:35 AM' },
  { sent: true, text: 'You should definitely visit! I can share some tips', time: '10:36 AM' },
  { sent: false, type: 'voice', duration: '0:42', time: '10:38 AM' },
  { sent: true, text: 'That sounds like an amazing plan! Let\'s do it 🙌', time: '10:40 AM' },
  { sent: false, text: 'Perfect! Can\'t wait 🎉✈️', time: '10:41 AM' },
];

const NOTIFICATIONS = [
  { type: 'like', user: USERS[0], text: 'liked your photo', time: '2h', thumb: '/images/img07.jpg', section: 'Today' },
  { type: 'follow', user: USERS[1], text: 'started following you', time: '3h', section: 'Today' },
  { type: 'comment', user: USERS[3], text: 'commented: "This is fire 🔥"', time: '5h', thumb: '/images/img08.jpg', section: 'Today' },
  { type: 'mention', user: USERS[5], text: 'mentioned you in a story', time: '6h', section: 'Today' },
  { type: 'like', user: USERS[2], text: 'liked your reel', time: '1d', thumb: '/images/img09.jpg', section: 'This Week' },
  { type: 'follow', user: USERS[7], text: 'started following you', time: '2d', section: 'This Week' },
  { type: 'comment', user: USERS[4], text: 'commented: "Where is this?"', time: '3d', thumb: '/images/img10.jpg', section: 'This Week' },
  { type: 'like', user: USERS[6], text: 'and 12 others liked your post', time: '3d', thumb: '/images/img11.jpg', section: 'This Week' },
  { type: 'follow', user: USERS[8], text: 'started following you', time: '1w', section: 'This Month' },
  { type: 'mention', user: USERS[9], text: 'tagged you in a post', time: '2w', thumb: '/images/img12.jpg', section: 'This Month' },
  { type: 'like', user: USERS[5], text: 'liked your comment', time: '2w', section: 'This Month' },
];

const EXPLORE_IMAGES = [
  '/images/img13.jpg',
  '/images/img14.jpg',
  '/images/img15.jpg',
  '/images/img16.jpg',
  '/images/img17.jpg',
  '/images/img18.jpg',
  '/images/img19.jpg',
  '/images/img20.jpg',
  '/images/img21.jpg',
  '/images/img22.jpg',
  '/images/img23.jpg',
  '/images/img24.jpg',
  '/images/img25.jpg',
  '/images/img26.jpg',
  '/images/img27.jpg',
];

const REEL_DATA = [
  { user: USERS[1], video: '/images/img28.jpg', caption: 'Tokyo nights 🌃 #NeonCity', music: 'Midnight City - M83', likes: '24.5K', comments: '1.2K' },
  { user: USERS[0], video: '/images/img29.jpg', caption: 'Sunset paradise 🌅✨', music: 'Golden Hour - JVKE', likes: '18.3K', comments: '892' },
  { user: USERS[4], video: '/images/img30.jpg', caption: 'Northern lights are magic 🌌', music: 'Aurora - K-391', likes: '42.1K', comments: '3.4K' },
];

const CATEGORIES = ['For You', 'Travel', 'Food', 'Style', 'Art', 'Music', 'Sports', 'Tech', 'Nature'];
const HIGHLIGHTS = ['Travel', 'Food', 'Gym', 'Music', 'Pets'];

const STORY_IMAGES = [
  '/images/img31.jpg',
  '/images/img32.jpg',
  '/images/img33.jpg',
  '/images/img34.jpg',
  '/images/img35.jpg',
];

// ===== STATE =====
let currentPage = 'home';
let likedPosts = new Set();
let savedPosts = new Set();
let currentStoryUser = null;
let currentStoryIndex = 0;
let storyTimer = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', init);

function init() {
  renderStories();
  renderFeed();
  renderExplore();
  renderMessages();
  renderNotifications();
  renderProfile();
  renderReels();
  bindNavigation();
  bindLogin();
  bindChatInput();
  bindStoryViewer();
}

// ===== LOGIN =====
function bindLogin() {
  const form = document.getElementById('login-form');
  const toggleBtns = document.querySelectorAll('.toggle-pass');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('page-login').classList.remove('active');
    document.getElementById('app-shell').classList.remove('hidden');
  });

  document.getElementById('goto-signup')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('page-login').classList.remove('active');
    document.getElementById('app-shell').classList.remove('hidden');
  });

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector('.material-symbols-rounded');
      if (target.type === 'password') {
        target.type = 'text';
        icon.textContent = 'visibility_off';
      } else {
        target.type = 'password';
        icon.textContent = 'visibility';
      }
    });
  });
}

// ===== NAVIGATION =====
function bindNavigation() {
  // Bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.page));
  });

  // Top nav buttons
  document.getElementById('btn-notifications').addEventListener('click', () => navigateTo('notifications'));
  document.getElementById('btn-messages').addEventListener('click', () => navigateTo('messages'));

  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.back));
  });

  // Message tabs
  document.querySelectorAll('.msg-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.msg-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function navigateTo(page) {
  currentPage = page;

  // Show/hide top nav for subpages
  const topNav = document.getElementById('top-nav');
  const bottomNav = document.getElementById('bottom-nav');
  const subPages = ['messages', 'chat', 'notifications'];

  if (subPages.includes(page)) {
    topNav.classList.add('hidden');
  } else {
    topNav.classList.remove('hidden');
  }

  // Hide bottom nav in chat
  if (page === 'chat') {
    bottomNav.classList.add('hidden');
  } else {
    bottomNav.classList.remove('hidden');
  }

  // Switch pages
  document.querySelectorAll('.page-container > .page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update bottom nav active
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });
}

// ===== STORIES =====
function renderStories() {
  const bar = document.getElementById('stories-bar');
  const myStory = `
    <div class="story-item add-story">
      <div class="story-ring"><img src="https://i.pravatar.cc/150?img=33" alt="Your Story"/></div>
      <span class="story-name">Your Story</span>
    </div>`;

  const stories = USERS.slice(0, 8).map((u, i) => `
    <div class="story-item" data-user-id="${u.id}" data-story-index="${i}">
      <div class="story-ring ${i > 4 ? 'seen' : ''}"><img src="${u.avatar}" alt="${u.name}"/></div>
      <span class="story-name">${u.name}</span>
    </div>`).join('');

  bar.innerHTML = myStory + stories;
}

function bindStoryViewer() {
  document.getElementById('stories-bar').addEventListener('click', (e) => {
    const item = e.target.closest('.story-item:not(.add-story)');
    if (!item) return;
    openStory(parseInt(item.dataset.storyIndex) || 0);
  });

  document.getElementById('story-close').addEventListener('click', closeStory);

  document.getElementById('story-content').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      currentStoryIndex = Math.max(0, currentStoryIndex - 1);
    } else {
      currentStoryIndex++;
    }
    if (currentStoryIndex >= STORY_IMAGES.length) {
      closeStory();
    } else {
      updateStory();
    }
  });
}

function openStory(index) {
  currentStoryIndex = 0;
  currentStoryUser = USERS[index];
  const viewer = document.getElementById('story-viewer');
  viewer.classList.remove('hidden');

  // Progress bars
  const progress = document.getElementById('story-progress');
  progress.innerHTML = STORY_IMAGES.map(() => `
    <div class="story-prog-bar"><div class="fill"></div></div>
  `).join('');

  // User info
  document.getElementById('story-user-info').innerHTML = `
    <img src="${currentStoryUser.avatar}" alt="${currentStoryUser.name}"/>
    <span class="story-uname">${currentStoryUser.name}</span>
    <span class="story-utime">2h</span>
  `;

  updateStory();
}

function updateStory() {
  document.getElementById('story-content').innerHTML = `<img src="${STORY_IMAGES[currentStoryIndex]}" alt="Story"/>`;

  document.querySelectorAll('.story-prog-bar').forEach((bar, i) => {
    bar.classList.remove('active', 'done');
    if (i < currentStoryIndex) bar.classList.add('done');
    if (i === currentStoryIndex) bar.classList.add('active');
  });

  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    currentStoryIndex++;
    if (currentStoryIndex >= STORY_IMAGES.length) {
      closeStory();
    } else {
      updateStory();
    }
  }, 5000);
}

function closeStory() {
  clearTimeout(storyTimer);
  document.getElementById('story-viewer').classList.add('hidden');
}

// ===== FEED =====
function renderFeed() {
  const feed = document.getElementById('feed');
  feed.innerHTML = POSTS.map((post, i) => `
    <article class="post-card" style="animation-delay:${i * 0.1}s">
      <div class="post-header">
        <img class="post-avatar" src="${post.user.avatar}" alt="${post.user.name}"/>
        <div class="post-user-info">
          <div class="post-username">${post.user.name}</div>
          <div class="post-location">${post.location}</div>
        </div>
        <button class="icon-btn post-menu"><span class="material-symbols-rounded">more_horiz</span></button>
      </div>
      <img class="post-image" src="${post.image}" alt="Post" loading="lazy"/>
      <div class="post-actions">
        <button class="action-btn like-btn" data-post="${i}"><span class="material-symbols-rounded">favorite</span></button>
        <button class="action-btn"><span class="material-symbols-rounded">chat_bubble_outline</span></button>
        <button class="action-btn"><span class="material-symbols-rounded">send</span></button>
        <div class="spacer"></div>
        <button class="action-btn save-btn" data-post="${i}"><span class="material-symbols-rounded">bookmark</span></button>
      </div>
      <div class="post-likes">${formatNum(post.likes)} likes</div>
      <div class="post-caption">
        <span class="cap-user">${post.user.name}</span> ${post.caption.slice(0, 80)}<span class="cap-more"> more</span>
      </div>
      <div class="post-comments-link">View all ${post.comments} comments</div>
      <div class="post-time">${post.time}</div>
    </article>
  `).join('');

  // Like buttons
  feed.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.post);
      if (likedPosts.has(idx)) {
        likedPosts.delete(idx);
        btn.classList.remove('liked');
      } else {
        likedPosts.add(idx);
        btn.classList.add('liked');
      }
    });
  });

  // Save buttons
  feed.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.post);
      if (savedPosts.has(idx)) {
        savedPosts.delete(idx);
        btn.classList.remove('saved');
      } else {
        savedPosts.add(idx);
        btn.classList.add('saved');
      }
    });
  });

  // Double-tap to like on images
  feed.querySelectorAll('.post-image').forEach((img, i) => {
    let lastTap = 0;
    img.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastTap < 300) {
        if (!likedPosts.has(i)) {
          likedPosts.add(i);
          const btn = feed.querySelectorAll('.like-btn')[i];
          btn.classList.add('liked');
          showHeartOverlay(img);
        }
      }
      lastTap = now;
    });
  });
}

function showHeartOverlay(container) {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.cssText = `position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);font-size:80px;pointer-events:none;z-index:10;transition:transform 0.3s ease, opacity 0.3s ease;`;
  container.style.position = 'relative';
  container.appendChild(heart);
  requestAnimationFrame(() => {
    heart.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(() => {
      heart.style.transform = 'translate(-50%,-50%) scale(1.2)';
      heart.style.opacity = '0';
      setTimeout(() => heart.remove(), 300);
    }, 600);
  });
}

// ===== EXPLORE =====
function renderExplore() {
  const chips = document.getElementById('category-chips');
  chips.innerHTML = CATEGORIES.map((cat, i) => `
    <button class="chip ${i === 0 ? 'active' : ''}">${cat}</button>
  `).join('');

  chips.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  const grid = document.getElementById('explore-grid');
  grid.innerHTML = EXPLORE_IMAGES.map((img, i) => {
    const isTall = i === 2 || i === 6 || i === 11;
    const isReel = i === 2 || i === 6;
    return `
      <div class="explore-item ${isTall ? 'tall' : ''}">
        <img src="${img}" alt="Explore" loading="lazy"/>
        ${isReel ? `<div class="reel-badge"><span class="material-symbols-rounded">play_arrow</span>23K</div>` : ''}
      </div>`;
  }).join('');
}

// ===== MESSAGES =====
function renderMessages() {
  const list = document.getElementById('chat-list');
  list.innerHTML = MESSAGES.map(msg => `
    <div class="chat-item" data-user-id="${msg.user.id}">
      <div class="chat-avatar-wrap">
        <img class="chat-avatar" src="${msg.user.avatar}" alt="${msg.user.name}"/>
        ${msg.user.online ? '<div class="online-dot"></div>' : ''}
      </div>
      <div class="chat-info">
        <div class="chat-name">${msg.user.name}</div>
        <div class="chat-preview">${msg.lastMsg}</div>
      </div>
      <div class="chat-meta">
        <span class="chat-time">${msg.time}</span>
        ${msg.unread > 0 ? `<span class="unread-badge">${msg.unread}</span>` : ''}
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
      const userId = parseInt(item.dataset.userId);
      const user = USERS.find(u => u.id === userId);
      openChat(user);
    });
  });
}

function openChat(user) {
  navigateTo('chat');

  document.getElementById('chat-header').innerHTML = `
    <button class="icon-btn back-btn" onclick="document.querySelector('[data-back=\\'home\\']').click(); document.querySelector('[data-page=\\'messages\\']').click();">
      <span class="material-symbols-rounded">arrow_back</span>
    </button>
    <img class="chat-avatar" src="${user.avatar}" alt="${user.name}"/>
    <div class="chat-header-info">
      <div class="chat-header-name">${user.name}</div>
      <div class="chat-header-status">${user.online ? 'Active now' : 'Active 2h ago'}</div>
    </div>
    <div class="chat-header-actions">
      <button class="icon-btn"><span class="material-symbols-rounded">call</span></button>
      <button class="icon-btn"><span class="material-symbols-rounded">videocam</span></button>
    </div>
  `;

  const messagesEl = document.getElementById('chat-messages');
  messagesEl.innerHTML = CHAT_MESSAGES.map(msg => {
    if (msg.type === 'image') {
      return `
        <div class="message ${msg.sent ? 'sent' : 'received'}">
          <div class="msg-image"><img src="${msg.image}" alt="Shared"/></div>
          <span class="msg-time">${msg.time}</span>
        </div>`;
    }
    if (msg.type === 'voice') {
      return `
        <div class="message ${msg.sent ? 'sent' : 'received'}">
          <div class="msg-bubble msg-voice">
            <button class="icon-btn" style="width:28px;height:28px;"><span class="material-symbols-rounded" style="font-size:20px">play_arrow</span></button>
            <div class="voice-wave">
              ${Array(8).fill(0).map(() => `<div class="voice-bar"></div>`).join('')}
            </div>
            <span class="voice-duration">${msg.duration}</span>
          </div>
          <span class="msg-time">${msg.time}</span>
        </div>`;
    }
    return `
      <div class="message ${msg.sent ? 'sent' : 'received'}">
        <div class="msg-bubble">
          ${msg.text}
          ${msg.reaction ? `<span class="msg-reaction">${msg.reaction}</span>` : ''}
        </div>
        <span class="msg-time">${msg.time}</span>
      </div>`;
  }).join('') + `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;

  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Re-bind chat back button
  messagesEl.closest('.page').querySelector('.back-btn')?.addEventListener('click', () => {
    navigateTo('messages');
  });
}

function bindChatInput() {
  const input = document.getElementById('chat-input');
  const micBtn = document.getElementById('chat-mic-btn');
  const sendBtn = document.getElementById('chat-send-btn');

  input.addEventListener('input', () => {
    if (input.value.trim()) {
      micBtn.classList.add('hidden');
      sendBtn.classList.remove('hidden');
    } else {
      micBtn.classList.remove('hidden');
      sendBtn.classList.add('hidden');
    }
  });

  sendBtn.addEventListener('click', () => sendMessage());
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const messagesEl = document.getElementById('chat-messages');
  const typing = messagesEl.querySelector('.typing-indicator');

  const msgEl = document.createElement('div');
  msgEl.className = 'message sent';
  msgEl.innerHTML = `
    <div class="msg-bubble">${escapeHtml(text)}</div>
    <span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
  `;

  if (typing) messagesEl.insertBefore(msgEl, typing);
  else messagesEl.appendChild(msgEl);

  input.value = '';
  document.getElementById('chat-mic-btn').classList.remove('hidden');
  document.getElementById('chat-send-btn').classList.add('hidden');
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const list = document.getElementById('notif-list');
  const sections = {};
  NOTIFICATIONS.forEach(n => {
    if (!sections[n.section]) sections[n.section] = [];
    sections[n.section].push(n);
  });

  let html = '';
  for (const [section, items] of Object.entries(sections)) {
    html += `<div class="notif-section-title">${section}</div>`;
    items.forEach((n, i) => {
      html += `
        <div class="notif-item ${section === 'Today' && i < 2 ? 'unread' : ''}">
          <img class="notif-avatar" src="${n.user.avatar}" alt="${n.user.name}"/>
          <div class="notif-content">
            <div class="notif-text"><strong>${n.user.name}</strong> ${n.text} <span class="notif-time">${n.time}</span></div>
          </div>
          ${n.type === 'follow' ? `<button class="btn-follow">Follow</button>` : ''}
          ${n.thumb ? `<img class="notif-thumb" src="${n.thumb}" alt=""/>` : ''}
        </div>`;
    });
  }
  list.innerHTML = html;
}

// ===== PROFILE =====
function renderProfile() {
  const container = document.getElementById('profile-info');
  const profileImages = EXPLORE_IMAGES.slice(0, 9);

  container.innerHTML = `
    <div class="profile-top">
      <div class="profile-avatar-wrap">
        <div class="profile-avatar-ring">
          <img src="https://i.pravatar.cc/150?img=33" alt="Profile"/>
        </div>
      </div>
      <div class="profile-stats">
        <div class="stat-item"><div class="stat-num">127</div><div class="stat-label">Posts</div></div>
        <div class="stat-item"><div class="stat-num">14.2K</div><div class="stat-label">Followers</div></div>
        <div class="stat-item"><div class="stat-num">892</div><div class="stat-label">Following</div></div>
      </div>
    </div>
    <div class="profile-bio">
      <div class="bio-name">Austin Developer ✨</div>
      <div class="bio-text">Digital creator & Developer 🎨\nCapturing moments that matter 📸</div>
      <a href="#" class="bio-link">linktr.ee/austin_dev</a>
    </div>
    <div class="profile-actions">
      <button class="btn-profile primary">Edit Profile</button>
      <button class="btn-profile">Share Profile</button>
      <button class="btn-profile" style="flex:0;padding:8px 12px"><span class="material-symbols-rounded" style="font-size:18px">person_add</span></button>
    </div>
    <div class="profile-highlights">
      ${HIGHLIGHTS.map((h, i) => `
        <div class="highlight-item">
          <div class="highlight-ring"><img src="/images/img${String(36 + i).padStart(2, '0')}.jpg" alt="${h}"/></div>
          <span class="highlight-label">${h}</span>
        </div>
      `).join('')}
    </div>
    <div class="profile-tabs">
      <button class="profile-tab active"><span class="material-symbols-rounded">grid_on</span></button>
      <button class="profile-tab"><span class="material-symbols-rounded">movie</span></button>
      <button class="profile-tab"><span class="material-symbols-rounded">person</span></button>
    </div>
    <div class="profile-grid">
      ${profileImages.map(img => `
        <div class="profile-grid-item"><img src="${img}" alt="Post" loading="lazy"/></div>
      `).join('')}
    </div>
  `;

  // Profile tabs
  container.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ===== REELS =====
function renderReels() {
  const container = document.getElementById('reels-container');
  container.innerHTML = REEL_DATA.map(reel => `
    <div class="reel">
      <img class="reel-bg" src="${reel.video}" alt="Reel"/>
      <div class="reel-overlay">
        <div class="reel-user">
          <img src="${reel.user.avatar}" alt="${reel.user.name}"/>
          <span>${reel.user.name}</span>
          <button class="btn-follow-sm">Follow</button>
        </div>
        <div class="reel-caption">${reel.caption}</div>
        <div class="reel-music"><span class="material-symbols-rounded">music_note</span> ${reel.music}</div>
      </div>
      <div class="reel-actions">
        <div class="reel-action"><span class="material-symbols-rounded">favorite</span><span>${reel.likes}</span></div>
        <div class="reel-action"><span class="material-symbols-rounded">chat_bubble</span><span>${reel.comments}</span></div>
        <div class="reel-action"><span class="material-symbols-rounded">send</span><span>Share</span></div>
        <div class="reel-action"><span class="material-symbols-rounded">more_vert</span><span></span></div>
      </div>
    </div>
  `).join('');
}

// ===== HELPERS =====
function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
