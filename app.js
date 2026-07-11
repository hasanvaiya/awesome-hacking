// App State Management
const state = {
  currentCategory: "all",
  searchQuery: "",
  favorites: [],
  selectedTools: []
};

// DOM References
const sidebarMenu = document.getElementById("sidebar-menu");
const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("search-input");
const viewTitle = document.getElementById("view-title");
const viewDescription = document.getElementById("view-description");
const statTotalTools = document.getElementById("stat-total-tools");
const statActiveInstallers = document.getElementById("stat-active-installers");
const builderPanel = document.getElementById("builder-panel");
const selectedBadgesContainer = document.getElementById("selected-badges-container");
const codeOutput = document.getElementById("code-output");
const copyBtn = document.getElementById("copy-btn");
const panelCloseBtn = document.getElementById("panel-close-btn");
const toastContainer = document.getElementById("toast-container");

// Modal References
const infoModal = document.getElementById("info-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalToolName = document.getElementById("modal-tool-name");
const modalToolSubcategory = document.getElementById("modal-tool-subcategory");
const modalToolDescription = document.getElementById("modal-tool-description");
const modalToolTags = document.getElementById("modal-tool-tags");
const modalToolInstallCmd = document.getElementById("modal-tool-install-cmd");

// Load local storage items
function loadStorage() {
  const savedFavorites = localStorage.getItem("ah_favorites");
  if (savedFavorites) {
    state.favorites = JSON.parse(savedFavorites);
  }
}

// Save local storage
function saveStorage() {
  localStorage.setItem("ah_favorites", JSON.stringify(state.favorites));
}

// Toast notification trigger
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "ℹ"}</span>
    <div>${message}</div>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s forwards ease-in";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Calculate counts for categories
function getCounts() {
  const counts = { all: TOOLS_DATA.length, favorites: state.favorites.length };
  TOOLS_DATA.forEach(tool => {
    counts[tool.category] = (counts[tool.category] || 0) + 1;
  });
  return counts;
}

// Initialize Sidebar Menu
function renderSidebar() {
  const counts = getCounts();
  
  // Set default items counts
  document.getElementById("count-all").textContent = counts.all;
  document.getElementById("count-favorites").textContent = counts.favorites;

  // Clear dynamically added categories (keep all and favorites)
  const existingCategories = sidebarMenu.querySelectorAll(".menu-item-dynamic");
  existingCategories.forEach(el => el.remove());

  // Render categories from metadata
  Object.keys(CATEGORY_METADATA).forEach(category => {
    const meta = CATEGORY_METADATA[category];
    const count = counts[category] || 0;

    const menuItem = document.createElement("a");
    menuItem.className = `menu-item menu-item-dynamic ${state.currentCategory === category ? 'active' : ''}`;
    menuItem.setAttribute("data-category", category);
    menuItem.innerHTML = `
      <span class="menu-item-icon">${meta.icon}</span>
      <span>${category}</span>
      <span class="menu-item-count">${count}</span>
    `;

    sidebarMenu.appendChild(menuItem);
  });

  // Attach event listeners
  const menuItems = sidebarMenu.querySelectorAll(".menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      menuItems.forEach(mi => mi.classList.remove("active"));
      item.classList.add("active");
      state.currentCategory = item.getAttribute("data-category");
      updateDashboardHeader();
      renderTools();
    });
  });
}

// Update Title and Subtitle dynamically
function updateDashboardHeader() {
  if (state.currentCategory === "all") {
    viewTitle.textContent = "All Security Modules";
    viewDescription.textContent = "Explore and download curated, professional tools for penetration testers, security researchers, and developers.";
  } else if (state.currentCategory === "favorites") {
    viewTitle.textContent = "Bookmarked Modules";
    viewDescription.textContent = "Your customized subset of tools saved for offline research and quick deployment.";
  } else {
    viewTitle.textContent = state.currentCategory;
    viewDescription.textContent = CATEGORY_METADATA[state.currentCategory]?.desc || "Curated list of utility submodules.";
  }
}

// Compile custom install shell script command
function updateCommandScript() {
  if (state.selectedTools.length === 0) {
    codeOutput.innerHTML = `# Select tools to generate custom download command`;
    builderPanel.classList.remove("active");
    statActiveInstallers.textContent = 0;
    return;
  }

  builderPanel.classList.add("active");
  statActiveInstallers.textContent = state.selectedTools.length;

  let scriptLines = [
    `#!/bin/bash`,
    `# ========================================================`,
    `# Hasan's Security Toolkit Custom Installer Script`,
    `# Generated: ${new Date().toLocaleDateString()}`,
    `# Selected Modules: ${state.selectedTools.join(', ')}`,
    `# ========================================================`,
    ``,
    `echo "[+] Initializing custom security installation process..."`,
    ``
  ];

  state.selectedTools.forEach(toolName => {
    const tool = TOOLS_DATA.find(t => t.name === toolName);
    if (tool) {
      scriptLines.push(`# Installing ${tool.name} (${tool.subcategory})`);
      scriptLines.push(tool.installCmd);
      scriptLines.push(``);
    }
  });

  scriptLines.push(`echo "[+] Custom installation process completed successfully!"`);
  codeOutput.textContent = scriptLines.join('\n');

  // Render selected tool badges
  selectedBadgesContainer.innerHTML = "";
  state.selectedTools.forEach(toolName => {
    const badge = document.createElement("span");
    badge.className = "selected-badge";
    badge.innerHTML = `
      <span>${toolName}</span>
      <button class="remove-selected-btn" data-tool="${toolName}">✕</button>
    `;
    badge.querySelector(".remove-selected-btn").addEventListener("click", () => {
      toggleToolSelection(toolName);
    });
    selectedBadgesContainer.appendChild(badge);
  });
}

// Toggle tool in custom installer build
function toggleToolSelection(toolName) {
  const index = state.selectedTools.indexOf(toolName);
  if (index === -1) {
    state.selectedTools.push(toolName);
    showToast(`Added ${toolName} to installer list.`);
  } else {
    state.selectedTools.splice(index, 1);
    showToast(`Removed ${toolName} from installer list.`, "info");
  }
  updateCommandScript();
  renderTools(); // refresh visual added states
}

// Toggle Favorite Bookmarks
function toggleFavorite(toolName) {
  const index = state.favorites.indexOf(toolName);
  if (index === -1) {
    state.favorites.push(toolName);
    showToast(`Added ${toolName} to bookmarks.`);
  } else {
    state.favorites.splice(index, 1);
    showToast(`Removed ${toolName} from bookmarks.`, "info");
  }
  saveStorage();
  renderSidebar();
  renderTools();
}

// Open Info Modal with setup details
function openInfoModal(toolName) {
  const tool = TOOLS_DATA.find(t => t.name === toolName);
  if (!tool) return;

  modalToolName.textContent = tool.name;
  modalToolSubcategory.textContent = tool.subcategory;
  modalToolDescription.textContent = tool.description;
  
  // Render tags
  modalToolTags.innerHTML = tool.tags.map(t => `<span class="tag">${t}</span>`).join("");
  modalToolInstallCmd.textContent = tool.installCmd;

  infoModal.classList.add("active");
}

// Add 3D card tilt effect event listeners
function apply3DTilt(card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate inside element
    const y = e.clientY - rect.top;  // y coordinate inside element
    
    // Normalize coordinates around zero
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12; // max tilt 12 degrees
    const rotateX = ((centerY - y) / centerY) * 12;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// Render Tool Cards
function renderTools() {
  toolsGrid.innerHTML = "";
  
  // Filter dataset
  const filteredTools = TOOLS_DATA.filter(tool => {
    // 1. Category Filter
    if (state.currentCategory === "favorites") {
      if (!state.favorites.includes(tool.name)) return false;
    } else if (state.currentCategory !== "all") {
      if (tool.category !== state.currentCategory) return false;
    }

    // 2. Search Query Filter
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchSub = tool.subcategory.toLowerCase().includes(q);
      const matchTags = tool.tags.some(tag => tag.toLowerCase().includes(q));
      return matchName || matchDesc || matchSub || matchTags;
    }

    return true;
  });

  statTotalTools.textContent = filteredTools.length;

  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);">
        <p style="font-size: 18px; margin-bottom: 8px;">🔍 No security modules found</p>
        <p style="font-size: 14px;">Try searching for a different keyword or category.</p>
      </div>
    `;
    return;
  }

  filteredTools.forEach(tool => {
    const isFav = state.favorites.includes(tool.name);
    const isAdded = state.selectedTools.includes(tool.name);

    const card = document.createElement("article");
    card.className = "tool-card";
    
    // Build tags HTML
    const tagsHtml = tool.tags.map(t => `<span class="tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="card-header">
        <div class="tool-meta">
          <h3 class="tool-name">${tool.name}</h3>
          <span class="tool-subcategory">${tool.subcategory}</span>
        </div>
        <button class="favorite-btn ${isFav ? 'active' : ''}" title="Bookmark Tool">
          ${isFav ? '★' : '☆'}
        </button>
      </div>
      <p class="tool-description">${tool.description}</p>
      <div class="tag-list">${tagsHtml}</div>
      <div class="card-actions">
        <button class="card-btn btn-primary btn-details">
          <span>Local Setup</span>
        </button>
        <button class="card-btn btn-secondary ${isAdded ? 'added' : ''}">
          ${isAdded ? '✓ Selected' : '+ Add to Script'}
        </button>
      </div>
    `;

    // Apply 3D Tilt
    apply3DTilt(card);

    // Click handler for favorite button
    card.querySelector(".favorite-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(tool.name);
    });

    // Click handler for details button
    card.querySelector(".btn-details").addEventListener("click", (e) => {
      e.stopPropagation();
      openInfoModal(tool.name);
    });

    // Click handler for script installer action
    card.querySelector(".btn-secondary").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleToolSelection(tool.name);
    });

    toolsGrid.appendChild(card);
  });
}

// Event Listeners
searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderTools();
});

copyBtn.addEventListener("click", () => {
  if (state.selectedTools.length === 0) return;
  navigator.clipboard.writeText(codeOutput.textContent)
    .then(() => {
      showToast("Clone script copied to clipboard successfully!");
    })
    .catch(err => {
      showToast("Failed to copy command.", "info");
    });
});

panelCloseBtn.addEventListener("click", () => {
  builderPanel.classList.remove("active");
});

modalCloseBtn.addEventListener("click", () => {
  infoModal.classList.remove("active");
});

// Close modal on background overlay click
infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) {
    infoModal.classList.remove("active");
  }
});

// App Startup
function init() {
  loadStorage();
  renderSidebar();
  renderTools();
}

init();
