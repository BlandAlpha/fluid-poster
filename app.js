(() => {
  "use strict";

  /* ==========================================================================
     Data
     ========================================================================== */

  const PALETTES = [
    { id: "nocturne", name: "Nocturne", colors: ["#080a18", "#2945ff", "#a44bff", "#ff7857", "#f4e8d2"] },
    { id: "sorbet", name: "Sorbet", colors: ["#f6ead7", "#ffc1b2", "#ff7c9b", "#d5a4ff", "#685bda"] },
    { id: "tide", name: "Tide", colors: ["#062a2d", "#087e7a", "#1bc7ad", "#95e7d4", "#efe9d5"] },
    { id: "ember", name: "Ember", colors: ["#1a0b06", "#7d2512", "#eb4b1e", "#ff9d15", "#ffe3a6"] },
    { id: "iris", name: "Iris", colors: ["#160b2d", "#4721c8", "#6074ff", "#b98fff", "#f5c1e2"] },
    { id: "citrus", name: "Citrus", colors: ["#fff8e2", "#e5ff47", "#a4e72e", "#ffc62d", "#ff7a2e"] },
    { id: "rosewood", name: "Rosewood", colors: ["#2c0a17", "#8c1e43", "#d8406b", "#ff9b8d", "#f6d9ba"] },
    { id: "glacier", name: "Glacier", colors: ["#07161c", "#0b5b6a", "#62c7d4", "#c9f4ef", "#ede9da"] },
    { id: "dusk", name: "Dusk", colors: ["#21163b", "#694f91", "#b580aa", "#f3ab9c", "#f6e7c7"] },
    { id: "forest", name: "Forest", colors: ["#062416", "#1e5a36", "#4ea054", "#c1e36c", "#f1ead3"] },
    { id: "mono", name: "Monochrome", colors: ["#0a0a0a", "#373632", "#7b776d", "#c7c0b3", "#f5f1e7"] },
    { id: "pop", name: "Pop", colors: ["#1a0816", "#ff2e8b", "#ff7600", "#ffd400", "#6f4bff"] }
  ];

  const MOTIONS = [
    { id: "flow", name: "Flow", mode: 0, icon: "i-waves" },
    { id: "mesh", name: "Mesh", mode: 1, icon: "i-mesh" },
    { id: "aurora", name: "Aurora", mode: 2, icon: "i-aurora" },
    { id: "orbit", name: "Orbit", mode: 3, icon: "i-orbit" },
    { id: "bloom", name: "Bloom", mode: 4, icon: "i-aperture" },
    { id: "ribbon", name: "Ribbon", mode: 5, icon: "i-ribbon" }
  ];

  const RATIOS = [
    { id: "a4", name: "A4", width: 210, height: 297, icon: "i-file" },
    { id: "16x9", name: "16 by 9", width: 16, height: 9, icon: "i-monitor" },
    { id: "4x3", name: "4 by 3", width: 4, height: 3, icon: "i-image" },
    { id: "3x2", name: "3 by 2", width: 3, height: 2, icon: "i-camera" },
    { id: "5x4", name: "5 by 4", width: 5, height: 4, icon: "i-crop" },
    { id: "1x1", name: "Square", width: 1, height: 1, icon: "i-square" }
  ];

  const LAYOUTS = [
    { id: "editorial", name: "Editorial", align: "left" },
    { id: "monolith", name: "Monolith", align: "center" },
    { id: "split", name: "Split", align: "left" },
    { id: "axis", name: "Axis", align: "left" },
    { id: "stack", name: "Stack", align: "left" },
    { id: "frame", name: "Frame", align: "center" }
  ];

  const DISPLAY_FONTS = [
    { name: "Instrument Serif", family: '"Instrument Serif", Georgia, serif', weight: 400, cssName: "Instrument Serif", online: false },
    { name: "Cormorant Garamond", family: '"Cormorant Garamond", Garamond, serif', weight: 500, cssName: "Cormorant Garamond", online: false },
    { name: "Playfair Display", family: '"Playfair Display", Georgia, serif', weight: 600, cssName: "Playfair Display", online: true },
    { name: "Bodoni Moda", family: '"Bodoni Moda", "Times New Roman", serif', weight: 600, cssName: "Bodoni Moda", online: true },
    { name: "Fraunces", family: '"Fraunces", Georgia, serif', weight: 600, cssName: "Fraunces", online: true },
    { name: "Syne", family: '"Syne", "Arial Black", sans-serif', weight: 700, cssName: "Syne", online: false },
    { name: "Archivo", family: '"Archivo", "Arial Narrow", sans-serif', weight: 600, cssName: "Archivo", online: false },
    { name: "Bricolage Grotesque", family: '"Bricolage Grotesque", "Arial Narrow", sans-serif', weight: 600, cssName: "Bricolage Grotesque", online: true },
    { name: "Unbounded", family: '"Unbounded", "Arial Black", sans-serif', weight: 600, cssName: "Unbounded", online: true },
    { name: "Anton", family: '"Anton", Impact, sans-serif', weight: 400, cssName: "Anton", online: true },
    { name: "Noto Serif SC", family: '"Noto Serif SC", "Songti SC", serif', weight: 600, cssName: "Noto Serif SC", sample: "永", online: true }
  ];

  const BODY_FONTS = [
    { name: "Manrope", family: '"Manrope", "Helvetica Neue", sans-serif', weight: 500, cssName: "Manrope", online: false },
    { name: "Instrument Sans", family: '"Instrument Sans", "Helvetica Neue", sans-serif', weight: 500, cssName: "Instrument Sans", online: true },
    { name: "Inter", family: '"Inter", "Helvetica Neue", sans-serif', weight: 500, cssName: "Inter", online: true },
    { name: "Work Sans", family: '"Work Sans", "Helvetica Neue", sans-serif', weight: 500, cssName: "Work Sans", online: true },
    { name: "Space Grotesk", family: '"Space Grotesk", "Helvetica Neue", sans-serif', weight: 500, cssName: "Space Grotesk", online: false },
    { name: "Source Serif 4", family: '"Source Serif 4", Georgia, serif', weight: 500, cssName: "Source Serif 4", online: true },
    { name: "IBM Plex Mono", family: '"IBM Plex Mono", "SFMono-Regular", monospace', weight: 400, cssName: "IBM Plex Mono", online: false },
    { name: "JetBrains Mono", family: '"JetBrains Mono", "SFMono-Regular", monospace', weight: 500, cssName: "JetBrains Mono", online: true },
    { name: "Noto Sans SC", family: '"Noto Sans SC", "PingFang SC", sans-serif', weight: 500, cssName: "Noto Sans SC", sample: "永", online: true }
  ];

  const GOOGLE_FONTS_HREF = "https://fonts.googleapis.com/css2?family=Anton&family=Bodoni+Moda:wght@600&family=Bricolage+Grotesque:wght@600&family=Fraunces:wght@600&family=Instrument+Sans:wght@500&family=Inter:wght@500&family=JetBrains+Mono:wght@500&family=Noto+Sans+SC:wght@500&family=Noto+Serif+SC:wght@600&family=Playfair+Display:wght@600&family=Source+Serif+4:wght@500&family=Unbounded:wght@600&family=Work+Sans:wght@500&display=swap";

  const googleFontsReady = new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = GOOGLE_FONTS_HREF;
    link.addEventListener("load", () => resolve(true), { once: true });
    link.addEventListener("error", () => resolve(false), { once: true });
    document.head.appendChild(link);
  });

  const LAYOUT_TEXT_LIMITS = { title: 72, subtitle: 140, meta: 48 };
  const DEFAULT_COPY = {
    title: "Liquid Light",
    subtitle: "Studies in motion, material and colour",
    meta: "STUDY 04 — MMXXVI"
  };
  const DEFAULT_TITLE_SIZE = 72;

  const state = {
    panel: "type",
    paletteId: PALETTES[0].id,
    colors: [...PALETTES[0].colors],
    motionIndex: 0,
    fluidMode: MOTIONS[0].mode,
    speedValue: 42,
    warpValue: 50,
    grainValue: 28,
    marginValue: 50,
    paused: false,
    ratioId: "a4",
    orientation: "portrait",
    layout: "editorial",
    align: "left",
    displayFont: 0,
    bodyFont: 0,
    titleSize: DEFAULT_TITLE_SIZE,
    subtitleSize: null,
    lastTitle: DEFAULT_COPY.title,
    tone: "auto",
    resolvedTone: "light",
    dim: 20,
    showGuides: false,
    focus: false,
    imageUrl: null,
    imagePalette: null,
    imageName: "",
    exporting: false
  };

  /* ==========================================================================
     DOM references
     ========================================================================== */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const dom = {
    app: $("#app"),
    poster: $("#poster"),
    posterContent: $("#posterContent"),
    posterFit: $("#posterFit"),
    canvas: $("#fluidCanvas"),
    guides: $("#posterGuides"),
    paletteGrid: $("#paletteGrid"),
    currentPalette: $("#currentPalette"),
    motionGrid: $("#motionGrid"),
    ratioGrid: $("#ratioGrid"),
    formatSheet: $("#formatSheet"),
    orientationGroup: $("#orientationGroup"),
    displayFontSelect: $("#displayFontSelect"),
    bodyFontSelect: $("#bodyFontSelect"),
    displayFontPreview: $("#displayFontPreview"),
    bodyFontPreview: $("#bodyFontPreview"),
    titleSizeInput: $("#titleSizeInput"),
    subtitleSizeInput: $("#subtitleSizeInput"),
    layoutGrid: $("#layoutGrid"),
    alignGroup: $("#alignGroup"),
    toneGroup: $("#toneGroup"),
    titleInput: $("#titleInput"),
    subtitleInput: $("#subtitleInput"),
    metaInput: $("#metaInput"),
    speedRange: $("#speedRange"),
    warpRange: $("#warpRange"),
    grainRange: $("#grainRange"),
    marginRange: $("#marginRange"),
    dimRange: $("#dimRange"),
    playToggle: $("#playToggle"),
    playIcon: $("#playIcon"),
    motionPlay: $("#motionPlay"),
    motionPlayIcon: $("#motionPlayIcon"),
    quickRandom: $("#quickRandom"),
    shufflePalette: $("#shufflePalette"),
    focusToggle: $("#focusToggle"),
    focusIcon: $("#focusIcon"),
    downloadButton: $("#downloadButton"),
    gridToggle: $("#gridToggle"),
    imageInput: $("#imageInput"),
    dropZone: $("#dropZone"),
    uploadEmpty: $("#uploadEmpty"),
    imageLoaded: $("#imageLoaded"),
    sourceImage: $("#sourceImage"),
    replaceImage: $("#replaceImage"),
    reapplyPalette: $("#reapplyPalette"),
    removeImage: $("#removeImage"),
    extractedColors: $("#extractedColors"),
    liveStatus: $("#liveStatus"),
    railButtons: $$(".rail-button[data-panel]"),
    panels: $$("[data-panel-view]"),
    editableFields: $$("[data-field]", $("#posterContent")),
    titleField: $('[data-field="title"]', $("#posterContent")),
    subtitleField: $('[data-field="subtitle"]', $("#posterContent")),
    metaField: $('[data-field="meta"]', $("#posterContent"))
  };

  const fieldInputs = {
    title: dom.titleInput,
    subtitle: dom.subtitleInput,
    meta: dom.metaInput
  };

  const fieldNodes = {
    title: dom.titleField,
    subtitle: dom.subtitleField,
    meta: dom.metaField
  };

  /* ==========================================================================
     Small utilities
     ========================================================================== */

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const hexToRgb = (hex) => {
    const value = hex.replace("#", "");
    const expanded = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
    const number = Number.parseInt(expanded, 16);
    return { r: (number >> 16) & 255, g: (number >> 8) & 255, b: number & 255 };
  };
  const rgbToHex = ({ r, g, b }) =>
    "#" + [r, g, b].map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0")).join("");
  const srgbToLinear = (channel) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const relativeLuminance = (hex) => {
    const { r, g, b } = hexToRgb(hex);
    return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
  };
  const paletteGradient = (colors, angle = 135) => {
    const stops = colors.map((color, index) => `${color} ${((index / (colors.length - 1)) * 100).toFixed(1)}%`);
    return `linear-gradient(${angle}deg, ${stops.join(", ")})`;
  };
  const motionGradient = (colors, index) => {
    const c = colors;
    const variants = [
      [c[0], c[1], c[2], c[3], c[4], 135],
      [c[2], c[0], c[3], c[1], c[4], 35],
      [c[1], c[2], c[4], c[0], c[3], 160],
      [c[0], c[2], c[4], c[1], c[3], 105],
      [c[3], c[1], c[4], c[0], c[2], 75],
      [c[1], c[4], c[0], c[3], c[2], 190]
    ];
    const v = variants[index % variants.length];
    const gradientStops = v.slice(0, 5).map((color, i) => `${color} ${(i * 25).toFixed(0)}%`).join(", ");
    return `linear-gradient(${v[5]}deg, ${gradientStops})`;
  };
  const animateSpin = (element) => {
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof element.animate !== "function") return;
    element.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(180deg)" }
      ],
      { duration: 420, easing: "cubic-bezier(.22, 1, .36, 1)" }
    );
  };

  /* ==========================================================================
     State application
     ========================================================================== */

  function actualRatio(ratio = getSelectedRatio()) {
    const long = Math.max(ratio.width, ratio.height);
    const short = Math.min(ratio.width, ratio.height);
    if (state.orientation === "portrait") return short / long;
    return long / short;
  }

  function getSelectedRatio() {
    return RATIOS.find((ratio) => ratio.id === state.ratioId) || RATIOS[0];
  }

  function effectColors() {
    return state.colors;
  }

  function resolvedTone() {
    if (state.tone !== "auto") return state.tone;
    const luminances = state.colors.map(relativeLuminance).sort((a, b) => a - b);
    const average = luminances.reduce((sum, value) => sum + value, 0) / luminances.length;
    const deepest = luminances[0];
    // Dark text is reserved for genuinely pale palettes. A single deep anchor means
    // light type will read more reliably, even when the rest of the palette is bright.
    if (state.dim > 50) return "light";
    if (average > 0.47 && deepest > 0.09) return "dark";
    return "light";
  }

  function applyTone() {
    state.resolvedTone = resolvedTone();
    dom.poster.classList.toggle("tone-light", state.resolvedTone === "light");
    dom.poster.classList.toggle("tone-dark", state.resolvedTone === "dark");
    $$("button", dom.toneGroup).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.tone === state.tone));
    });
  }

  function applyPalette(palette) {
    state.colors = [...palette.colors];
    state.paletteId = palette.id;
    dom.poster.style.backgroundImage = paletteGradient(state.colors, 150);
    dom.currentPalette.style.backgroundImage = paletteGradient(state.colors, 115);
    dom.formatSheet.style.backgroundImage = paletteGradient(state.colors, 130);

    $$(".palette-option", dom.paletteGrid).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.palette === state.paletteId));
    });
    $$(".motion-fill", dom.motionGrid).forEach((fill, index) => {
      fill.style.backgroundImage = motionGradient(state.colors, index);
    });
    $$(".motion-option", dom.motionGrid).forEach((button) => {
      const index = Number(button.dataset.motion);
      button.setAttribute("aria-pressed", String(index === state.motionIndex));
    });

    applyTone();
    updateReapplyState();
    syncUniforms();
    requestPosterRender();
  }

  function applyPaletteById(id) {
    const palette = PALETTES.find((entry) => entry.id === id);
    if (palette) applyPalette(palette);
  }

  function applyMotion(index, fromControl = true) {
    const next = clamp(index, 0, MOTIONS.length - 1);
    state.motionIndex = next;
    state.fluidMode = MOTIONS[next].mode;
    $$(".motion-option", dom.motionGrid).forEach((button) => {
      button.setAttribute("aria-pressed", String(Number(button.dataset.motion) === next));
    });
    syncUniforms();
    requestPosterRender();
    if (fromControl) {
      const icon = $(".motion-disc .icon", dom.motionGrid.children[next] || dom.motionGrid);
      if (icon) animateSpin(icon);
    }
  }

  function setPlayback(paused) {
    state.paused = paused;
    const label = paused ? "Resume fluid motion" : "Pause fluid motion";
    [dom.playToggle, dom.motionPlay].forEach((button) => {
      button.setAttribute("aria-pressed", String(paused));
      button.setAttribute("aria-label", label);
    });
    dom.playIcon.setAttribute("href", paused ? "#i-play" : "#i-pause");
    dom.motionPlayIcon.setAttribute("href", paused ? "#i-play" : "#i-pause");

    if (paused) {
      stopAnimation();
      requestSingleFrame();
    } else {
      startAnimation();
    }
  }

  function setFocus(enabled) {
    state.focus = enabled;
    dom.app.classList.toggle("is-focus", enabled);
    dom.focusToggle.setAttribute("aria-pressed", String(enabled));
    dom.focusToggle.setAttribute("aria-label", enabled ? "Exit distraction-free preview" : "Enter distraction-free preview");
    dom.focusIcon.setAttribute("href", enabled ? "#i-minimize" : "#i-maximize");
    requestAnimationFrame(() => {
      layoutPoster();
      fitPosterText();
    });
  }

  function setPanel(name) {
    if (!name) return;
    state.panel = name;
    dom.railButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.panel === name));
    });
    dom.panels.forEach((panel) => {
      panel.hidden = panel.dataset.panelView !== name;
    });
    $(".inspector-scroll").scrollTop = 0;
  }

  function setLayout(layoutId) {
    const layout = LAYOUTS.find((entry) => entry.id === layoutId) || LAYOUTS[0];
    state.layout = layout.id;
    dom.poster.dataset.layout = layout.id;
    state.align = layout.align;
    dom.posterContent.dataset.align = layout.align;
    $$(".layout-option", dom.layoutGrid).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.layout === layout.id));
    });
    $$("button", dom.alignGroup).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.align === state.align));
    });
    scheduleTextFit();
  }

  function setAlign(alignment) {
    if (!["left", "center", "right"].includes(alignment)) return;
    state.align = alignment;
    dom.posterContent.dataset.align = alignment;
    $$("button", dom.alignGroup).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.align === alignment));
    });
    scheduleTextFit();
  }

  const fontLoadRequests = { display: 0, body: 0 };

  function fontLoadSpec(font) {
    return `${font.weight} 20px "${font.cssName}"`;
  }

  async function ensureFontLoaded(font, text = "") {
    if (!document.fonts) return false;
    if (font.online) {
      const stylesheetReady = await Promise.race([
        googleFontsReady,
        new Promise((resolve) => setTimeout(() => resolve(false), 12000))
      ]);
      if (!stylesheetReady) return false;
    }
    const spec = fontLoadSpec(font);
    const sample = `${font.sample || "Aa"} ${text || ""}`.slice(0, 4000);
    try {
      const faces = await Promise.race([
        document.fonts.load(spec, sample),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Font load timed out")), 12000))
      ]);
      if (!Array.isArray(faces) || faces.length === 0) return false;
      await document.fonts.ready;
      return true;
    } catch (error) {
      return false;
    }
  }

  function currentTypeProbeText() {
    return [
      dom.titleField.textContent || "",
      dom.subtitleField.textContent || "",
      dom.metaField.textContent || ""
    ].join(" ");
  }

  function renderDisplayFontControl() {
    const font = DISPLAY_FONTS[state.displayFont] || DISPLAY_FONTS[0];
    dom.displayFontSelect.value = String(state.displayFont);
    dom.displayFontSelect.removeAttribute("aria-busy");
    dom.displayFontPreview.classList.remove("is-loading");
    dom.displayFontPreview.style.fontFamily = font.family;
    dom.displayFontPreview.style.fontWeight = String(font.weight);
    dom.displayFontPreview.textContent = font.sample || "Aa";
    dom.displayFontPreview.dataset.fontIndex = String(state.displayFont);
  }

  function renderBodyFontControl() {
    const font = BODY_FONTS[state.bodyFont] || BODY_FONTS[0];
    dom.bodyFontSelect.value = String(state.bodyFont);
    dom.bodyFontSelect.removeAttribute("aria-busy");
    dom.bodyFontPreview.classList.remove("is-loading");
    dom.bodyFontPreview.style.fontFamily = font.family;
    dom.bodyFontPreview.style.fontWeight = String(font.weight);
    dom.bodyFontPreview.textContent = font.sample || "Aa";
    dom.bodyFontPreview.dataset.fontIndex = String(state.bodyFont);
  }

  function applyDisplayFont(font, index) {
    state.displayFont = index;
    dom.poster.style.setProperty("--font-display", font.family);
    dom.poster.style.setProperty("--display-weight", String(font.weight));
    renderDisplayFontControl();
    scheduleTextFit(true);
  }

  function applyBodyFont(font, index) {
    state.bodyFont = index;
    dom.poster.style.setProperty("--font-body", font.family);
    dom.poster.style.setProperty("--body-weight", String(font.weight));
    renderBodyFontControl();
    scheduleTextFit(true);
  }

  function markFontError(preview) {
    preview.classList.add("is-error");
    window.setTimeout(() => preview.classList.remove("is-error"), 1600);
  }

  async function setDisplayFont(index) {
    const font = DISPLAY_FONTS[index];
    if (!font) return;
    if (
      state.displayFont === index &&
      dom.displayFontPreview.dataset.fontIndex === String(index) &&
      !dom.displayFontPreview.classList.contains("is-loading")
    ) {
      return;
    }
    const previousIndex = state.displayFont;
    const request = ++fontLoadRequests.display;

    if (!font.online) {
      applyDisplayFont(font, index);
      ensureFontLoaded(font, currentTypeProbeText()).then((loaded) => {
        if (loaded && request === fontLoadRequests.display) scheduleTextFit(true);
      });
      return;
    }

    dom.displayFontSelect.value = String(index);
    dom.displayFontSelect.setAttribute("aria-busy", "true");
    dom.displayFontPreview.classList.add("is-loading");
    dom.displayFontPreview.textContent = "";
    const loaded = await ensureFontLoaded(font, currentTypeProbeText());
    if (request !== fontLoadRequests.display) return;
    dom.displayFontPreview.classList.remove("is-loading");
    dom.displayFontSelect.removeAttribute("aria-busy");

    if (!loaded) {
      dom.displayFontSelect.value = String(previousIndex);
      renderDisplayFontControl();
      markFontError(dom.displayFontPreview);
      dom.liveStatus.textContent = `${font.name} could not be loaded.`;
      return;
    }
    applyDisplayFont(font, index);
  }

  async function setBodyFont(index) {
    const font = BODY_FONTS[index];
    if (!font) return;
    if (
      state.bodyFont === index &&
      dom.bodyFontPreview.dataset.fontIndex === String(index) &&
      !dom.bodyFontPreview.classList.contains("is-loading")
    ) {
      return;
    }
    const previousIndex = state.bodyFont;
    const request = ++fontLoadRequests.body;

    if (!font.online) {
      applyBodyFont(font, index);
      ensureFontLoaded(font, currentTypeProbeText()).then((loaded) => {
        if (loaded && request === fontLoadRequests.body) scheduleTextFit(true);
      });
      return;
    }

    dom.bodyFontSelect.value = String(index);
    dom.bodyFontSelect.setAttribute("aria-busy", "true");
    dom.bodyFontPreview.classList.add("is-loading");
    dom.bodyFontPreview.textContent = "";
    const loaded = await ensureFontLoaded(font, currentTypeProbeText());
    if (request !== fontLoadRequests.body) return;
    dom.bodyFontPreview.classList.remove("is-loading");
    dom.bodyFontSelect.removeAttribute("aria-busy");

    if (!loaded) {
      dom.bodyFontSelect.value = String(previousIndex);
      renderBodyFontControl();
      markFontError(dom.bodyFontPreview);
      dom.liveStatus.textContent = `${font.name} could not be loaded.`;
      return;
    }
    applyBodyFont(font, index);
  }

  function applyTitleSize(px) {
    const size = clamp(Math.round(px), 8, 320);
    state.titleSize = size;
    dom.poster.dataset.titleSize = "custom";
    dom.poster.style.setProperty("--custom-title-size", `${size}px`);
    dom.titleField.style.fontSize = "";
    scheduleTextFit();
  }

  function applySubtitleSize(px) {
    const size = clamp(Math.round(px), 6, 200);
    state.subtitleSize = size;
    dom.poster.dataset.subtitleSize = "custom";
    dom.poster.style.setProperty("--custom-subtitle-size", `${size}px`);
    dom.subtitleField.style.fontSize = "";
    scheduleTextFit();
  }

  function resetTitleSize() {
    state.titleSize = null;
    dom.poster.removeAttribute("data-title-size");
    dom.poster.style.removeProperty("--custom-title-size");
    dom.titleField.style.fontSize = "";
    scheduleTextFit();
  }

  function resetSubtitleSize() {
    state.subtitleSize = null;
    dom.poster.removeAttribute("data-subtitle-size");
    dom.poster.style.removeProperty("--custom-subtitle-size");
    dom.subtitleField.style.fontSize = "";
    scheduleTextFit();
  }

  function syncTypeSizeInputs() {
    if (document.activeElement !== dom.titleSizeInput) {
      const value = state.titleSize !== null
        ? state.titleSize
        : Number.parseFloat(getComputedStyle(dom.titleField).fontSize);
      if (Number.isFinite(value) && value > 0) dom.titleSizeInput.value = String(Math.round(value));
    }
    if (document.activeElement !== dom.subtitleSizeInput) {
      const value = state.subtitleSize !== null
        ? state.subtitleSize
        : Number.parseFloat(getComputedStyle(dom.subtitleField).fontSize);
      if (Number.isFinite(value) && value > 0) dom.subtitleSizeInput.value = String(Math.round(value));
    }
  }

  function setTone(tone) {
    state.tone = tone;
    applyTone();
  }

  function setDim(value) {
    state.dim = clamp(Number(value) || 0, 0, 72);
    dom.dimRange.value = String(state.dim);
    updateRangeFill(dom.dimRange);
    applyTone();
    syncUniforms();
    requestPosterRender();
  }

  function setSpeed(value) {
    state.speedValue = clamp(Number(value) || 0, 0, 100);
    dom.speedRange.value = String(state.speedValue);
    updateRangeFill(dom.speedRange);
  }

  function setWarp(value) {
    state.warpValue = clamp(Number(value) || 0, 0, 100);
    dom.warpRange.value = String(state.warpValue);
    updateRangeFill(dom.warpRange);
    syncUniforms();
    requestPosterRender();
  }

  function setGrain(value) {
    state.grainValue = clamp(Number(value) || 0, 0, 100);
    dom.grainRange.value = String(state.grainValue);
    updateRangeFill(dom.grainRange);
    syncUniforms();
    requestPosterRender();
  }

  function setMargin(value) {
    state.marginValue = clamp(Number(value) || 0, 0, 100);
    dom.marginRange.value = String(state.marginValue);
    updateRangeFill(dom.marginRange);
    const scale = 0.65 + (state.marginValue / 100) * 0.7;
    dom.posterContent.style.setProperty("--pad-scale", String(scale));
    scheduleTextFit(true);
  }

  function setGuides(visible) {
    state.showGuides = visible;
    dom.poster.classList.toggle("show-guides", visible);
    dom.gridToggle.setAttribute("aria-pressed", String(visible));
  }

  function updateRangeFill(input) {
    const min = Number(input.min) || 0;
    const max = Number(input.max) || 100;
    const value = Number(input.value) || 0;
    const percent = ((value - min) / (max - min)) * 100;
    input.style.setProperty("--fill", `${percent}%`);
  }

  function limitFieldText(field, value) {
    const limit = LAYOUT_TEXT_LIMITS[field] || 140;
    return value.slice(0, limit);
  }

  function setField(field, value, opts = {}) {
    const node = fieldNodes[field];
    const input = fieldInputs[field];
    if (!node || !input) return;
    const next = limitFieldText(field, value);
    if (node.textContent !== next) node.textContent = next;
    if (input.value !== next) input.value = next;
    if (field === "title" && next.trim()) state.lastTitle = next.trim();
    if (opts.fit !== false) scheduleTextFit();
  }

  function syncFieldFromPoster(field) {
    const node = fieldNodes[field];
    if (!node) return;
    let value = (node.textContent || "").replace(/\u00a0/g, " ");
    value = limitFieldText(field, value);
    if (value !== node.textContent) {
      node.textContent = value;
      setCaretToEnd(node);
    }
    fieldInputs[field].value = value;
    if (field === "title" && value.trim()) state.lastTitle = value.trim();
    scheduleTextFit();
  }

  function restoreTitleIfEmpty() {
    if ((dom.titleField.textContent || "").trim()) return false;
    const fallback = state.lastTitle || DEFAULT_COPY.title;
    dom.titleField.textContent = fallback;
    dom.titleInput.value = fallback;
    return true;
  }

  function commitFieldOnBlur(field, node) {
    const value = (node.textContent || "").trim();
    if (field === "title" && !value) {
      setField("title", state.lastTitle || DEFAULT_COPY.title);
      return;
    }
    setField(field, value);
  }

  function setCaretToEnd(element) {
    try {
      const range = document.createRange();
      range.selectNodeContents(element);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    } catch (error) {
      /* no-op */
    }
  }

  /* ==========================================================================
     UI construction
     ========================================================================== */

  function buildPaletteGrid() {
    const fragment = document.createDocumentFragment();
    PALETTES.forEach((palette, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "palette-option";
      button.dataset.palette = palette.id;
      button.setAttribute("aria-label", `${palette.name} palette`);
      button.setAttribute("aria-pressed", String(palette.id === state.paletteId));
      const fill = document.createElement("span");
      fill.className = "swatch-fill";
      fill.style.backgroundImage = paletteGradient(palette.colors, 35 + ((index * 43) % 145));
      button.appendChild(fill);
      button.addEventListener("click", () => applyPalette(palette));
      fragment.appendChild(button);
    });
    dom.paletteGrid.replaceChildren(fragment);
  }

  function buildMotionGrid() {
    const fragment = document.createDocumentFragment();
    MOTIONS.forEach((motion, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "motion-option";
      button.dataset.motion = String(index);
      button.setAttribute("aria-label", `${motion.name} fluid preset`);
      button.setAttribute("aria-pressed", String(index === state.motionIndex));

      const fill = document.createElement("span");
      fill.className = "motion-fill";
      fill.style.backgroundImage = motionGradient(state.colors, index);

      const disc = document.createElement("span");
      disc.className = "motion-disc";
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "icon");
      icon.setAttribute("aria-hidden", "true");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", `#${motion.icon}`);
      icon.appendChild(use);
      disc.appendChild(icon);
      fill.appendChild(disc);
      button.appendChild(fill);
      button.addEventListener("click", () => applyMotion(index));
      fragment.appendChild(button);
    });
    dom.motionGrid.replaceChildren(fragment);
  }

  function buildFontSelects() {
    const appendOptions = (select, fonts) => {
      select.replaceChildren(
        ...fonts.map((font, index) => {
          const option = document.createElement("option");
          option.value = String(index);
          option.textContent = font.name;
          return option;
        })
      );
    };
    appendOptions(dom.displayFontSelect, DISPLAY_FONTS);
    appendOptions(dom.bodyFontSelect, BODY_FONTS);
    dom.displayFontSelect.value = String(state.displayFont);
    dom.bodyFontSelect.value = String(state.bodyFont);
  }

  function wireSizeInput(input, min, max, apply, reset) {
    const applyFromInput = () => {
      if (input.value.trim() === "") return false;
      const value = Number(input.value);
      if (!Number.isFinite(value)) return false;
      apply(clamp(Math.round(value), min, max));
      return true;
    };

    input.addEventListener("input", () => {
      applyFromInput();
    });

    input.addEventListener("change", () => {
      if (input.value.trim() === "") {
        reset();
        return;
      }
      if (!applyFromInput()) return;
      input.value = String(clamp(Math.round(Number(input.value)), min, max));
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
      }
    });

    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        reset();
        return;
      }
      const value = clamp(Math.round(Number(input.value) || min), min, max);
      input.value = String(value);
      apply(value);
      requestAnimationFrame(syncTypeSizeInputs);
    });
  }

  function shapeSizeForRatio(ratio, orientation) {
    const long = Math.max(ratio.width, ratio.height);
    const short = Math.min(ratio.width, ratio.height);
    const numeric = orientation === "portrait" ? short / long : long / short;
    const edge = 64;
    if (numeric >= 1) {
      return { width: edge, height: edge / numeric };
    }
    return { width: edge * numeric, height: edge };
  }

  function buildRatioGrid() {
    const fragment = document.createDocumentFragment();
    RATIOS.forEach((ratio) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ratio-option";
      button.dataset.ratio = ratio.id;
      button.setAttribute("aria-pressed", String(ratio.id === state.ratioId));

      const frame = document.createElement("span");
      frame.className = "ratio-frame";
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "icon");
      icon.setAttribute("aria-hidden", "true");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", `#${ratio.icon}`);
      icon.appendChild(use);
      frame.appendChild(icon);
      button.appendChild(frame);

      button.addEventListener("click", () => setRatio(ratio.id));
      fragment.appendChild(button);
    });
    dom.ratioGrid.replaceChildren(fragment);
    updateRatioVisuals();
  }

  function updateRatioVisuals() {
    const ratio = getSelectedRatio();
    $$(".ratio-option", dom.ratioGrid).forEach((button) => {
      const current = RATIOS.find((entry) => entry.id === button.dataset.ratio);
      if (!current) return;
      const isActive = current.id === state.ratioId;
      button.setAttribute("aria-pressed", String(isActive));
      const label = `${current.name}, ${state.orientation}`;
      button.setAttribute("aria-label", label);
      const frame = $(".ratio-frame", button);
      const size = shapeSizeForRatio(current, state.orientation);
      frame.style.width = `${size.width}px`;
      frame.style.height = `${size.height}px`;
    });

    $$("button", dom.orientationGroup).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.orientation === state.orientation));
    });
    dom.poster.setAttribute("data-orientation", state.orientation);

    const previewRatio = actualRatio();
    const maxWidth = 256;
    const maxHeight = 108;
    let sheetWidth = maxWidth;
    let sheetHeight = sheetWidth / previewRatio;
    if (sheetHeight > maxHeight) {
      sheetHeight = maxHeight;
      sheetWidth = sheetHeight * previewRatio;
    }
    dom.formatSheet.style.width = `${Math.round(sheetWidth)}px`;
    dom.formatSheet.style.height = `${Math.round(sheetHeight)}px`;
  }

  function buildGuides() {
    const fragment = document.createDocumentFragment();
    for (let i = 1; i < 12; i += 1) {
      const vertical = document.createElement("span");
      vertical.className = "guide guide-v";
      vertical.style.left = `${(i / 12) * 100}%`;
      fragment.appendChild(vertical);

      const horizontal = document.createElement("span");
      horizontal.className = "guide guide-h";
      horizontal.style.top = `${(i / 12) * 100}%`;
      fragment.appendChild(horizontal);
    }
    dom.guides.replaceChildren(fragment);
  }

  /* ==========================================================================
     Fluid shader
     ========================================================================== */

  const VERTEX_SHADER = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const FRAGMENT_SHADER = `
    precision highp float;

    varying vec2 vUv;

    uniform float uTime;
    uniform float uMode;
    uniform float uDim;
    uniform float uWarp;
    uniform float uGrain;
    uniform vec3 uC0;
    uniform vec3 uC1;
    uniform vec3 uC2;
    uniform vec3 uC3;
    uniform vec3 uC4;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float valueNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.52;
      mat2 turn = mat2(0.80, 0.60, -0.60, 0.80);
      for (int i = 0; i < 5; i++) {
        value += amplitude * valueNoise(p);
        p = turn * p * 2.02 + 11.17;
        amplitude *= 0.5;
      }
      return value;
    }

    float fbmSoft(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 3; i++) {
        value += amplitude * valueNoise(p);
        p = p * 1.72 + vec2(5.2, 8.4);
        amplitude *= 0.48;
      }
      return value;
    }

    vec2 rotate(vec2 p, float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c) * p;
    }

    vec3 spectral(float coordinate) {
      float u = clamp(coordinate, 0.0, 1.0);
      vec3 color = mix(uC0, uC1, smoothstep(0.01, 0.3, u));
      color = mix(color, uC2, smoothstep(0.24, 0.55, u));
      color = mix(color, uC3, smoothstep(0.5, 0.8, u));
      color = mix(color, uC4, smoothstep(0.78, 1.0, u));
      return color;
    }

    void main() {
      float t = uTime;
      vec2 p = vUv - 0.5;

      if (uMode > 0.5 && uMode < 1.5) {
        vec2 cell = floor(p * 10.0);
        vec2 cellNoise = vec2(fbm(cell * 0.22 + t * 0.1), fbm(cell * 0.22 + 7.2 - t * 0.09)) - 0.5;
        p += cellNoise * 0.14;
        p += 0.035 * vec2(sin(p.y * 22.0 + t * 0.33), cos(p.x * 22.0 - t * 0.29));
      } else if (uMode > 1.5 && uMode < 2.5) {
        float ridge = fbm(vec2(p.x * 1.7, p.y * 2.9 - t * 0.1));
        p.x += 0.2 * sin(p.y * 6.4 + t * 0.26 + ridge * 3.4);
        p.y += 0.075 * (ridge - 0.5);
      } else if (uMode > 2.5 && uMode < 3.5) {
        float radius = length(p);
        float orbit = 0.4 * sin(radius * 4.2 - t * 0.2);
        p = rotate(p, orbit);
        p += vec2(-p.y, p.x) * 0.08 * sin(radius * 4.6 + t * 0.12);
      } else if (uMode > 3.5 && uMode < 4.5) {
        float bloomNoise = fbm(p * 1.8 + t * 0.11);
        float ring = sin(length(p) * 10.0 - t * 0.28 + bloomNoise * 3.6);
        p += vec2(sin(p.y * 7.0 + t * 0.22), cos(p.x * 6.0 - t * 0.2)) * ring * 0.035;
      } else if (uMode > 4.5) {
        p.x += 0.2 * sin(p.y * 4.6 + t * 0.23 + fbm(p * 1.9 + t * 0.08) * 3.2);
        p.y += 0.11 * cos(p.x * 3.8 - t * 0.18);
      }

      float warpA = fbmSoft(p * 1.3 + vec2(t * 0.07, -t * 0.054));
      float warpB = fbmSoft(p * 1.8 + vec2(-t * 0.045, t * 0.064) + 4.6);
      float warpC = fbmSoft(p * 0.95 + vec2(t * 0.032, 8.1) - p.yx);
      vec2 flow = (vec2(warpA, warpB) - 0.5) * 1.03;
      flow += vec2((warpC - 0.5) * 0.56, (warpC - 0.5) * -0.34);
      flow += vec2(sin(p.y * 5.8 + t * 0.18), cos(p.x * 5.0 - t * 0.15)) * 0.04;
      p += flow * (0.2 + uWarp * 0.44);

      float drift = fbmSoft(p * 1.5 + vec2(t * 0.047, -t * 0.035) + 6.1);
      float coord;

      if (uMode > 0.5 && uMode < 1.5) {
        vec2 meshWarp = vec2(
          fbm(vec2(p.x * 2.8 + t * 0.06, p.y * 1.9 - t * 0.04)),
          fbm(vec2(p.x * 1.9 - t * 0.05, p.y * 3.0 + t * 0.05) + 5.0)
        );
        coord = 0.48 + p.x * 0.62 + p.y * 0.56 + (meshWarp.x - 0.5) * 0.62 + (meshWarp.y - 0.5) * 0.2;
      } else if (uMode > 1.5 && uMode < 2.5) {
        coord = 0.48 + p.y * 0.84 + p.x * 0.25 + (drift - 0.5) * 0.48;
        coord += 0.06 * sin(p.y * 10.0 - t * 0.18 + drift * 3.0);
      } else if (uMode > 2.5 && uMode < 3.5) {
        float radius = length(p);
        vec2 orbital = rotate(p, 0.62 * sin(radius * 3.8 - t * 0.18));
        coord = 0.47 + orbital.x * 0.82 + orbital.y * 0.34 + (drift - 0.5) * 0.78;
        coord += 0.15 * sin(orbital.y * 4.8 + orbital.x * 2.1 - t * 0.13);
      } else if (uMode > 3.5 && uMode < 4.5) {
        float radius = length(p);
        coord = 0.48 + 0.4 * sin(radius * 7.2 - t * 0.12 + drift * 3.4);
        coord += p.x * 0.16 + (drift - 0.5) * 0.25;
        coord += 0.025 * sin(p.y * 7.0 + p.x * 3.0 - t * 0.09);
      } else if (uMode > 4.5) {
        coord = 0.48 + p.x * 0.78 + 0.13 * sin(p.y * 5.2 + t * 0.21);
        coord += (drift - 0.5) * 0.72;
      } else {
        coord = 0.47 + p.x * 0.72 + p.y * 0.36 + (drift - 0.5) * 0.92;
      }

      coord += (fbmSoft(p * 2.1 - vec2(t * 0.03, t * 0.024) + 11.0) - 0.5) * 0.06;
      vec3 col = spectral(coord);

      float gleam = smoothstep(0.62, 0.9, fbm(p * 2.2 - vec2(t * 0.06, -t * 0.045) + 7.1));
      col = mix(col, uC4, gleam * 0.16);

      float undertow = fbm(p * 2.7 - vec2(t * 0.035, t * 0.045) + 13.0);
      col *= 0.92 + undertow * 0.16;

      float deep = smoothstep(0.58, 0.9, fbm(p * 1.25 + vec2(t * 0.022, 2.7) + 16.0));
      col = mix(col, uC0, deep * 0.23);

      float lumen = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(lumen), col, 1.24);
      col = (col - 0.5) * 1.09 + 0.5;

      float edge = smoothstep(1.15, 0.24, length((vUv - 0.5) * vec2(1.18, 1.0)));
      col *= mix(0.68, 1.02, edge);

      col *= 1.0 - uDim * 0.86;

      float grainAmount = 0.004 + uGrain * 0.055;
      float dither = (hash21(gl_FragCoord.xy + fract(uTime)) - 0.5) * grainAmount;
      col += dither;
      col = clamp(col, 0.0, 1.0);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const webgl = {
    gl: null,
    program: null,
    buffer: null,
    uniforms: {},
    available: false,
    lastWidth: 0,
    lastHeight: 0
  };

  let clock = 8.0;
  let lastFrameTime = 0;
  let animationId = null;
  let hasFallenBack = false;

  function initWebGL() {
    const canvas = dom.canvas;
    const options = {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance"
    };

    let gl = null;
    try {
      gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
    } catch (error) {
      gl = null;
    }

    if (!gl) {
      fallbackBackground();
      return;
    }

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertex || !fragment) {
      fallbackBackground();
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      fallbackBackground();
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    webgl.gl = gl;
    webgl.program = program;
    webgl.buffer = buffer;
    webgl.available = true;
    webgl.uniforms = {
      time: gl.getUniformLocation(program, "uTime"),
      mode: gl.getUniformLocation(program, "uMode"),
      dim: gl.getUniformLocation(program, "uDim"),
      warp: gl.getUniformLocation(program, "uWarp"),
      grain: gl.getUniformLocation(program, "uGrain"),
      colors: [0, 1, 2, 3, 4].map((index) => gl.getUniformLocation(program, `uC${index}`))
    };

    canvas.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      webgl.available = false;
      stopAnimation();
      fallbackBackground();
    });

    canvas.addEventListener("webglcontextrestored", () => {
      window.location.reload();
    });

    syncUniforms();
    startAnimation();
  }

  function fallbackBackground() {
    if (hasFallenBack) return;
    hasFallenBack = true;
    dom.canvas.style.display = "none";
    dom.poster.style.backgroundImage = paletteGradient(state.colors, 150);
  }

  function colorToRgbArray(hex) {
    const { r, g, b } = hexToRgb(hex);
    return [r / 255, g / 255, b / 255];
  }

  function syncUniforms() {
    if (!webgl.available) {
      dom.poster.style.backgroundImage = paletteGradient(state.colors, 150);
      return;
    }
    const gl = webgl.gl;
    const colors = state.colors.map(colorToRgbArray);
    colors.forEach((color, index) => gl.uniform3fv(webgl.uniforms.colors[index], color));
    gl.uniform1f(webgl.uniforms.warp, state.warpValue / 100);
    gl.uniform1f(webgl.uniforms.grain, state.grainValue / 100);
    requestPosterRender();
  }

  function resizeCanvasIfNeeded() {
    if (!webgl.available) return;
    const rect = dom.poster.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const deviceDpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    const budgetDpr = Math.sqrt(2800000 / (rect.width * rect.height));
    const dpr = Math.max(1, Math.min(deviceDpr, budgetDpr));
    const width = Math.max(2, Math.round(rect.width * dpr));
    const height = Math.max(2, Math.round(rect.height * dpr));
    if (width === webgl.lastWidth && height === webgl.lastHeight) return;

    webgl.lastWidth = width;
    webgl.lastHeight = height;
    dom.canvas.width = width;
    dom.canvas.height = height;

    const gl = webgl.gl;
    gl.viewport(0, 0, width, height);
    requestSingleFrame();
  }

  function drawFrame() {
    if (!webgl.available) return;
    const gl = webgl.gl;
    gl.useProgram(webgl.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl.buffer);
    gl.uniform1f(webgl.uniforms.time, clock);
    gl.uniform1f(webgl.uniforms.mode, state.fluidMode);
    gl.uniform1f(webgl.uniforms.dim, state.dim / 100);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function animationLoop(now) {
    animationId = null;
    if (state.paused) return;
    if (!lastFrameTime) lastFrameTime = now;
    const delta = Math.min(0.06, Math.max(0, (now - lastFrameTime) / 1000));
    lastFrameTime = now;
    const speed = 0.25 + (state.speedValue / 100) * 1.55;
    clock += delta * speed;
    drawFrame();
    animationId = requestAnimationFrame(animationLoop);
  }

  function startAnimation() {
    if (animationId !== null || !webgl.available) return;
    lastFrameTime = 0;
    animationId = requestAnimationFrame(animationLoop);
  }

  function stopAnimation() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function requestSingleFrame() {
    if (!webgl.available) return;
    resizeCanvasIfNeeded();
    drawFrame();
  }

  let renderPending = false;
  function requestPosterRender() {
    if (renderPending) return;
    renderPending = true;
    requestAnimationFrame(() => {
      renderPending = false;
      if (state.paused) {
        requestSingleFrame();
      } else if (!animationId) {
        startAnimation();
      }
    });
  }

  /* ==========================================================================
     Poster sizing / aspect ratio
     ========================================================================== */

  let lastPosterWidth = 0;
  let lastPosterHeight = 0;
  let fitFrame = null;

  function setRatio(id) {
    if (!RATIOS.some((ratio) => ratio.id === id)) return;
    state.ratioId = id;
    updateRatioVisuals();
    layoutPoster();
  }

  function setOrientation(orientation) {
    if (!["portrait", "landscape"].includes(orientation)) return;
    state.orientation = orientation;
    updateRatioVisuals();
    layoutPoster();
  }

  function layoutPoster() {
    const bounds = dom.posterFit.getBoundingClientRect();
    const availableWidth = Math.max(80, bounds.width);
    const availableHeight = Math.max(80, bounds.height);
    const ratio = actualRatio();
    let width = availableWidth;
    let height = width / ratio;
    if (height > availableHeight) {
      height = availableHeight;
      width = height * ratio;
    }
    width = Math.max(80, Math.floor(width));
    height = Math.max(80, Math.floor(height));
    dom.poster.style.width = `${width}px`;
    dom.poster.style.height = `${height}px`;

    const significantChange = Math.abs(width - lastPosterWidth) > 1 || Math.abs(height - lastPosterHeight) > 1;
    lastPosterWidth = width;
    lastPosterHeight = height;

    resizeCanvasIfNeeded();
    if (state.paused) requestSingleFrame();
    syncTypeSizeInputs();
    if (significantChange) scheduleTextFit(true);
  }

  function scheduleTextFit(force = false) {
    if (fitFrame !== null) cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(() => {
      fitFrame = null;
      fitPosterText(force);
    });
  }

  function fitOneField(node, minSize = 8) {
    if (!node) return;
    node.style.fontSize = "";
    const style = window.getComputedStyle(node);
    const baseSize = Number.parseFloat(style.fontSize);
    if (!Number.isFinite(baseSize)) return;
    if (style.writingMode && style.writingMode !== "horizontal-tb") return;

    let size = baseSize;
    node.style.fontSize = `${size}px`;
    const maxHeight = Number.parseFloat(style.maxHeight);
    const maxWidth = node.clientWidth;

    for (let step = 0; step < 36; step += 1) {
      const exceedsHeight = Number.isFinite(maxHeight) && node.scrollHeight > maxHeight + 1;
      const exceedsWidth = maxWidth > 0 && node.scrollWidth > maxWidth + 1;
      if (!exceedsHeight && !exceedsWidth) break;
      size *= 0.936;
      if (size < minSize) {
        size = minSize;
        node.style.fontSize = `${size}px`;
        break;
      }
      node.style.fontSize = `${size}px`;
    }
  }

  function fitPosterText() {
    if (document.activeElement !== dom.titleField && document.activeElement !== dom.titleInput) {
      restoreTitleIfEmpty();
    }
    if (state.titleSize === null) {
      fitOneField(dom.titleField, 12);
    } else {
      dom.titleField.style.fontSize = "";
    }
    if (state.subtitleSize === null) {
      fitOneField(dom.subtitleField, 7);
    } else {
      dom.subtitleField.style.fontSize = "";
    }
    fitOneField(dom.metaField, 6);
    syncTypeSizeInputs();
  }

  /* ==========================================================================
     Color extraction from images
     ========================================================================== */

  function rgbToHsl({ r, g, b }) {
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l: lightness };
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue;
    if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0);
    else if (max === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    return { h: hue / 6, s: saturation, l: lightness };
  }

  function hslToRgb({ h, s, l }) {
    if (s === 0) {
      const value = l * 255;
      return { r: value, g: value, b: value };
    }
    const hueToRgb = (p, q, t) => {
      let value = t;
      if (value < 0) value += 1;
      if (value > 1) value -= 1;
      if (value < 1 / 6) return p + (q - p) * 6 * value;
      if (value < 1 / 2) return q;
      if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
      r: hueToRgb(p, q, h + 1 / 3) * 255,
      g: hueToRgb(p, q, h) * 255,
      b: hueToRgb(p, q, h - 1 / 3) * 255
    };
  }

  function polishColor({ r, g, b }) {
    const hsl = rgbToHsl({ r, g, b });
    const boostedSaturation = clamp(hsl.s * 1.38 + 0.06, 0.12, 0.94);
    const clampedLightness = clamp(hsl.l, 0.14, 0.9);
    return rgbToHex(hslToRgb({ h: hsl.h, s: boostedSaturation, l: clampedLightness }));
  }

  function deriveColor(hex, amount, warm = false) {
    const hsl = rgbToHsl(hexToRgb(hex));
    return rgbToHex(
      hslToRgb({
        h: (hsl.h + (warm ? 0.045 : 0.92)) % 1,
        s: clamp(hsl.s * 0.88 + 0.08, 0.12, 0.88),
        l: clamp(hsl.l + amount, 0.1, 0.92)
      })
    );
  }

  function extractPalette(image) {
    const canvas = document.createElement("canvas");
    const sampleSize = 96;
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return [...PALETTES[5].colors];
    context.drawImage(image, 0, 0, sampleSize, sampleSize);
    const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
    const buckets = new Map();

    for (let i = 0; i < pixels.length; i += 4) {
      const alpha = pixels[i + 3];
      if (alpha < 180) continue;
      const red = pixels[i];
      const green = pixels[i + 1];
      const blue = pixels[i + 2];
      const key = ((red >> 3) << 10) | ((green >> 3) << 5) | (blue >> 3);
      const existing = buckets.get(key);
      if (existing) {
        existing.count += 1;
        existing.r += red;
        existing.g += green;
        existing.b += blue;
      } else {
        buckets.set(key, { count: 1, r: red, g: green, b: blue });
      }
    }

    let colors = Array.from(buckets.values()).map((bucket) => ({
      count: bucket.count,
      r: bucket.r / bucket.count,
      g: bucket.g / bucket.count,
      b: bucket.b / bucket.count
    }));

    if (!colors.length) return [...PALETTES[5].colors];

    // Median-cut quantisation with a light emphasis on colorful midtones.
    let boxes = [makeColorBox(colors)];
    while (boxes.length < 5) {
      boxes.sort((a, b) => b.score - a.score);
      const target = boxes.shift();
      if (!target || target.colors.length < 2) {
        if (target) boxes.push(target);
        break;
      }
      const split = splitColorBox(target);
      if (!split) {
        boxes.push(target);
        break;
      }
      boxes.push(split[0], split[1]);
    }

    const averages = boxes.map((box) => {
      const total = box.colors.reduce((sum, color) => sum + color.count, 0);
      return {
        count: total,
        r: box.colors.reduce((sum, color) => sum + color.r * color.count, 0) / total,
        g: box.colors.reduce((sum, color) => sum + color.g * color.count, 0) / total,
        b: box.colors.reduce((sum, color) => sum + color.b * color.count, 0) / total
      };
    });

    colors = averages.map(polishColor);
    colors = uniqueColors(colors);

    let attempt = 0;
    while (colors.length < 5 && attempt < 12) {
      const base = colors[colors.length % Math.max(1, colors.length)] || "#606060";
      const lightness = attempt % 2 === 0 ? 0.16 : -0.13;
      colors.push(deriveColor(base, lightness, attempt % 4 === 0));
      colors = uniqueColors(colors);
      attempt += 1;
    }

    if (colors.length < 5) {
      PALETTES[5].colors.forEach((fallback) => {
        if (colors.length < 5) colors.push(fallback);
      });
    }

    return colors
      .slice(0, 5)
      .sort((a, b) => relativeLuminance(a) - relativeLuminance(b));
  }

  function makeColorBox(colors) {
    const ranges = ["r", "g", "b"].map((channel) => {
      const values = colors.map((color) => color[channel]);
      return Math.max(...values) - Math.min(...values);
    });
    const count = colors.reduce((sum, color) => sum + color.count, 0);
    return {
      colors,
      count,
      range: Math.max(...ranges),
      channel: ranges.indexOf(Math.max(...ranges)),
      score: Math.max(...ranges) * Math.log(count + 2)
    };
  }

  function splitColorBox(box) {
    const channelKeys = ["r", "g", "b"];
    const channel = channelKeys[box.channel];
    const sorted = [...box.colors].sort((a, b) => a[channel] - b[channel]);
    const total = sorted.reduce((sum, color) => sum + color.count, 0);
    let running = 0;
    let splitIndex = 1;
    for (let i = 0; i < sorted.length - 1; i += 1) {
      running += sorted[i].count;
      splitIndex = i + 1;
      if (running >= total / 2) break;
    }
    const left = sorted.slice(0, splitIndex);
    const right = sorted.slice(splitIndex);
    if (!left.length || !right.length) return null;
    return [makeColorBox(left), makeColorBox(right)];
  }

  function uniqueColors(colors) {
    const unique = [];
    colors.forEach((color) => {
      const duplicate = unique.some((existing) => {
        const a = hexToRgb(existing);
        const b = hexToRgb(color);
        return Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b) < 18;
      });
      if (!duplicate) unique.push(color);
    });
    return unique;
  }

  function applyImagePalette() {
    if (!state.imagePalette?.length) return;
    applyPalette({
      id: "image",
      name: state.imageName || "Image colors",
      colors: state.imagePalette
    });
    updateReapplyState();
  }

  function updateReapplyState() {
    dom.reapplyPalette.setAttribute("aria-pressed", String(state.paletteId === "image"));
  }

  function setImageLoaded(image, fileName, objectUrl, previousUrl = null) {
    dom.sourceImage.src = objectUrl;
    dom.sourceImage.alt = fileName ? `Imported reference: ${fileName}` : "Imported reference";
    dom.sourceImage.decode?.().catch(() => {});
    dom.uploadEmpty.hidden = true;
    dom.imageLoaded.hidden = false;
    dom.replaceImage.hidden = false;

    const palette = extractPalette(image);
    state.imagePalette = palette;
    state.imageUrl = objectUrl;
    state.imageName = fileName || "Image colors";
    if (previousUrl && previousUrl !== objectUrl) URL.revokeObjectURL(previousUrl);
    dom.extractedColors.replaceChildren(
      ...palette.map((color) => {
        const swatch = document.createElement("span");
        swatch.className = "extracted-swatch";
        swatch.style.background = color;
        return swatch;
      })
    );
    state.tone = "auto";
    applyPalette({ id: "image", name: state.imageName, colors: palette });
    updateReapplyState();
    dom.liveStatus.textContent = "Image imported. Palette extracted and applied.";
  }

  function clearImage({ restorePalette = true } = {}) {
    if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);
    state.imageUrl = null;
    state.imagePalette = null;
    state.imageName = "";
    dom.sourceImage.removeAttribute("src");
    dom.imageLoaded.hidden = true;
    dom.uploadEmpty.hidden = false;
    dom.replaceImage.hidden = true;
    dom.extractedColors.replaceChildren();
    if (restorePalette && state.paletteId === "image") {
      applyPaletteById(PALETTES[0].id);
    }
    updateReapplyState();
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const previousUrl = state.imageUrl;
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      try {
        setImageLoaded(image, file.name, objectUrl, previousUrl);
      } catch (error) {
        console.warn(error);
        URL.revokeObjectURL(objectUrl);
        dom.liveStatus.textContent = "Could not read that image.";
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      dom.liveStatus.textContent = "Could not open that image.";
    };
    image.src = objectUrl;
  }

  /* ==========================================================================
     Export
     ========================================================================== */

  function applyTextTransform(text, transform) {
    if (transform === "uppercase") return text.toUpperCase();
    if (transform === "lowercase") return text.toLowerCase();
    if (transform === "capitalize") {
      return text.replace(/\b\p{L}/gu, (character) => character.toUpperCase());
    }
    return text;
  }

  function isIdeographic(character) {
    return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/.test(character);
  }

  function getCharacterBoxes(element, posterRect) {
    const boxes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.textContent || "";
      for (let index = 0; index < text.length; index += 1) {
        const character = text[index];
        if (character === "\n" || character === "\r") continue;
        try {
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + 1);
          const rect = range.getBoundingClientRect();
          boxes.push({
            character,
            left: rect.left - posterRect.left,
            top: rect.top - posterRect.top,
            width: rect.width,
            height: rect.height
          });
        } catch (error) {
          /* a detached text node can be ignored */
        }
      }
    }
    return boxes;
  }

  function buildTextExportBlocks() {
    const posterRect = dom.poster.getBoundingClientRect();
    const blocks = [];

    ["title", "subtitle", "meta"].forEach((field) => {
      const element = fieldNodes[field];
      if (!element || !(element.textContent || "").trim()) return;

      const style = getComputedStyle(element);
      const elementRect = element.getBoundingClientRect();
      const boxes = getCharacterBoxes(element, posterRect);
      if (!boxes.length) return;

      const fontSize = Number.parseFloat(style.fontSize) || 12;
      const lineHeight = Number.parseFloat(style.lineHeight) || fontSize * 1.2;
      const paddingTop = Number.parseFloat(style.paddingTop) || 0;
      const vertical = style.writingMode.startsWith("vertical");
      const block = {
        vertical,
        color: style.color,
        font: `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`,
        letterSpacing: style.letterSpacing === "normal" ? "0px" : style.letterSpacing,
        textTransform: style.textTransform
      };

      if (vertical) {
        block.characters = boxes
          .filter((box) => box.character.trim() !== "")
          .map((box) => ({
            ...box,
            text: applyTextTransform(box.character, style.textTransform)
          }));
      } else {
        const lines = [];
        let currentLine = null;

        boxes.forEach((box) => {
          const blank = box.character.trim() === "";
          if (!currentLine || (!blank && Math.abs(box.top - currentLine.top) > 0.75)) {
            currentLine = { top: box.top, boxes: [] };
            lines.push(currentLine);
          }
          currentLine.boxes.push(box);
        });

        block.lines = [];
        lines.forEach((line, lineIndex) => {
          const raw = line.boxes.map((box) => box.character).join("");
          const leadingSpace = raw.match(/^\s*/)[0].length;
          const text = raw.slice(leadingSpace).replace(/\s+$/, "");
          if (!text) return;
          const startBox = line.boxes[leadingSpace];
          if (!startBox) return;
          block.lines.push({
            text: applyTextTransform(text, style.textTransform),
            x: startBox.left,
            y: elementRect.top - posterRect.top + paddingTop + lineHeight * (lineIndex + 0.5)
          });
        });
      }

      if (block.vertical ? block.characters.length : block.lines.length) {
        blocks.push(block);
      }
    });

    return blocks;
  }

  function drawTextExport(canvas, blocks) {
    if (!blocks.length) return;
    const posterWidth = dom.poster.getBoundingClientRect().width;
    if (!posterWidth) return;
    const scale = canvas.width / posterWidth;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.save();
    context.scale(scale, scale);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.textAlign = "left";
    context.textBaseline = "middle";

    blocks.forEach((block) => {
      context.font = block.font;
      context.fillStyle = block.color;
      if ("letterSpacing" in context) context.letterSpacing = block.letterSpacing;

      if (block.vertical) {
        context.textAlign = "center";
        block.characters.forEach((box) => {
          context.save();
          context.translate(box.left + box.width / 2, box.top + box.height / 2);
          if (!isIdeographic(box.text)) context.rotate(Math.PI / 2);
          context.fillText(box.text, 0, 0);
          context.restore();
        });
      } else {
        context.textAlign = "left";
        block.lines.forEach((line) => {
          context.fillText(line.text, line.x, line.y);
        });
      }
    });

    context.restore();
  }

  async function waitForPendingFontSelections() {
    const deadline = Date.now() + 15000;
    while (
      (
        dom.displayFontPreview.classList.contains("is-loading") ||
        dom.bodyFontPreview.classList.contains("is-loading")
      ) &&
      Date.now() < deadline
    ) {
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  }

  async function ensureExportFonts() {
    const titleText = (dom.titleField.textContent || "").trim();
    const subtitleText = (dom.subtitleField.textContent || "").trim();
    const metaText = (dom.metaField.textContent || "").trim();
    const displayFont = DISPLAY_FONTS[state.displayFont];
    const bodyFont = BODY_FONTS[state.bodyFont];

    await Promise.allSettled([
      ensureFontLoaded(displayFont, titleText),
      ensureFontLoaded(bodyFont, subtitleText),
      ensureFontLoaded(
        { weight: 500, cssName: "IBM Plex Mono", sample: "Aa" },
        metaText || "STUDY 04"
      )
    ]);
    await document.fonts.ready;
  }

  async function capturePosterWithoutText(pixelRatio) {
    dom.poster.classList.add("capture-text-hidden");
    try {
      return await window.htmlToImage.toCanvas(dom.poster, {
        pixelRatio,
        cacheBust: false,
        skipFonts: true,
        backgroundColor: state.colors[0],
        filter: (node) => {
          if (!(node instanceof Element)) return true;
          return !node.classList.contains("poster-guides");
        }
      });
    } finally {
      dom.poster.classList.remove("capture-text-hidden");
    }
  }

  function canvasToDownload(canvas, filename) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Could not encode the poster."));
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = filename;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 15000);
        resolve(blob);
      }, "image/png");
    });
  }

  async function exportPoster() {
    if (state.exporting) return;
    state.exporting = true;
    dom.downloadButton.setAttribute("aria-busy", "true");
    dom.downloadButton.setAttribute("aria-disabled", "true");
    const use = $("use", dom.downloadButton);
    const originalIcon = use.getAttribute("href");
    const guidesWereVisible = state.showGuides;
    let exportCanvasState = null;
    use.setAttribute("href", "#i-loader");
    dom.downloadButton.classList.add("is-busy");

    try {
      await waitForPendingFontSelections();
      await ensureExportFonts();
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      restoreTitleIfEmpty();
      fitPosterText();
      dom.poster.classList.add("exporting");
      setGuides(false);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const rect = dom.poster.getBoundingClientRect();
      const maxEdge = 2600;
      const pixelRatio = clamp(maxEdge / Math.max(rect.width, rect.height), 2, 5);
      const textBlocks = buildTextExportBlocks();

      if (webgl.available) {
        exportCanvasState = {
          wasPlaying: !state.paused,
          width: dom.canvas.width,
          height: dom.canvas.height
        };
        stopAnimation();
        const exportWidth = Math.round(rect.width * pixelRatio);
        const exportHeight = Math.round(rect.height * pixelRatio);
        dom.canvas.width = exportWidth;
        dom.canvas.height = exportHeight;
        webgl.gl.viewport(0, 0, exportWidth, exportHeight);
        drawFrame();
        webgl.gl.finish();
      }

      const rendered = await capturePosterWithoutText(pixelRatio);
      drawTextExport(rendered, textBlocks);

      const ratio = getSelectedRatio();
      await canvasToDownload(rendered, `fluid-poster-${ratio.id}-${state.orientation}.png`);

      use.setAttribute("href", "#i-check");
      dom.liveStatus.textContent = "Poster downloaded.";
      window.setTimeout(() => {
        if (!dom.downloadButton.classList.contains("is-busy")) return;
        use.setAttribute("href", originalIcon);
      }, 1100);
    } catch (error) {
      console.error(error);
      use.setAttribute("href", originalIcon);
      dom.liveStatus.textContent = "Export did not complete.";
    } finally {
      dom.poster.classList.remove("exporting");
      dom.poster.classList.remove("capture-text-hidden");
      setGuides(guidesWereVisible);
      if (exportCanvasState && webgl.available) {
        webgl.lastWidth = 0;
        webgl.lastHeight = 0;
        resizeCanvasIfNeeded();
        drawFrame();
        if (exportCanvasState.wasPlaying) startAnimation();
      }
      dom.downloadButton.classList.remove("is-busy");
      dom.downloadButton.removeAttribute("aria-busy");
      dom.downloadButton.removeAttribute("aria-disabled");
      window.setTimeout(() => {
        use.setAttribute("href", "#i-download");
      }, 1400);
      state.exporting = false;
    }
  }

  /* ==========================================================================
     Runtime wiring
     ========================================================================== */

  function randomizeDesign() {
    const paletteIndex = PALETTES.findIndex((palette) => palette.id === state.paletteId);
    let nextPaletteIndex = Math.floor(Math.random() * PALETTES.length);
    if (nextPaletteIndex === paletteIndex) nextPaletteIndex = (nextPaletteIndex + 1) % PALETTES.length;

    let nextMotion = Math.floor(Math.random() * MOTIONS.length);
    if (nextMotion === state.motionIndex) nextMotion = (nextMotion + 1 + Math.floor(Math.random() * (MOTIONS.length - 1))) % MOTIONS.length;

    applyPalette(PALETTES[nextPaletteIndex]);
    applyMotion(nextMotion, false);
    animateSpin(dom.quickRandom.querySelector(".icon"));
  }

  function wireEvents() {
    dom.railButtons.forEach((button) => {
      button.addEventListener("click", () => setPanel(button.dataset.panel));
    });

    dom.layoutGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".layout-option");
      if (!button) return;
      setLayout(button.dataset.layout);
    });

    dom.alignGroup.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-align]");
      if (!button) return;
      setAlign(button.dataset.align);
    });

    dom.toneGroup.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-tone]");
      if (!button) return;
      setTone(button.dataset.tone);
    });

    dom.orientationGroup.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-orientation]");
      if (!button) return;
      setOrientation(button.dataset.orientation);
    });

    dom.ratioGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".ratio-option");
      if (!button) return;
      setRatio(button.dataset.ratio);
    });

    Object.entries(fieldInputs).forEach(([field, input]) => {
      input.addEventListener("input", () => {
        setField(field, input.value);
      });
      input.addEventListener("focus", () => {
        dom.poster.dataset.editFocus = field;
      });
      input.addEventListener("blur", () => {
        if (dom.poster.dataset.editFocus === field) delete dom.poster.dataset.editFocus;
        if (field === "title" && !input.value.trim()) {
          setField("title", state.lastTitle || DEFAULT_COPY.title);
        }
      });
    });

    Object.entries(fieldNodes).forEach(([field, node]) => {
      node.addEventListener("input", () => syncFieldFromPoster(field));
      node.addEventListener("focus", () => {
        dom.poster.dataset.editFocus = field;
      });
      node.addEventListener("blur", () => {
        if (dom.poster.dataset.editFocus === field) delete dom.poster.dataset.editFocus;
        commitFieldOnBlur(field, node);
      });
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter") event.preventDefault();
        if (event.key === "Escape") node.blur();
      });
      node.addEventListener("paste", (event) => {
        event.preventDefault();
        const text = (event.clipboardData?.getData("text/plain") || "").replace(/\s+/g, " ").trim();
        if (!text) return;
        if (document.execCommand) {
          document.execCommand("insertText", false, text);
        } else {
          const selection = window.getSelection();
          if (selection.rangeCount) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(text));
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
            syncFieldFromPoster(field);
          }
        }
      });
    });

    dom.displayFontSelect.addEventListener("change", () => setDisplayFont(Number(dom.displayFontSelect.value)));
    dom.bodyFontSelect.addEventListener("change", () => setBodyFont(Number(dom.bodyFontSelect.value)));
    wireSizeInput(dom.titleSizeInput, 8, 320, applyTitleSize, resetTitleSize);
    wireSizeInput(dom.subtitleSizeInput, 6, 200, applySubtitleSize, resetSubtitleSize);

    dom.speedRange.addEventListener("input", () => setSpeed(dom.speedRange.value));
    dom.warpRange.addEventListener("input", () => setWarp(dom.warpRange.value));
    dom.grainRange.addEventListener("input", () => setGrain(dom.grainRange.value));
    dom.marginRange.addEventListener("input", () => setMargin(dom.marginRange.value));
    dom.dimRange.addEventListener("input", () => setDim(dom.dimRange.value));

    dom.playToggle.addEventListener("click", () => setPlayback(!state.paused));
    dom.motionPlay.addEventListener("click", () => setPlayback(!state.paused));

    dom.quickRandom.addEventListener("click", randomizeDesign);
    dom.shufflePalette.addEventListener("click", () => {
      const currentIndex = PALETTES.findIndex((palette) => palette.id === state.paletteId);
      let next = Math.floor(Math.random() * PALETTES.length);
      if (next === currentIndex) next = (next + 1) % PALETTES.length;
      applyPalette(PALETTES[next]);
      animateSpin(dom.shufflePalette.querySelector(".icon"));
    });

    dom.focusToggle.addEventListener("click", () => setFocus(!state.focus));
    dom.downloadButton.addEventListener("click", exportPoster);
    dom.gridToggle.addEventListener("click", () => setGuides(!state.showGuides));

    dom.imageInput.addEventListener("change", () => {
      const file = dom.imageInput.files?.[0];
      if (file) handleFile(file);
      dom.imageInput.value = "";
    });

    [dom.dropZone, dom.replaceImage].forEach((button) => {
      button.addEventListener("click", () => {
        dom.imageInput.value = "";
        dom.imageInput.click();
      });
    });

    dom.reapplyPalette.addEventListener("click", applyImagePalette);
    dom.removeImage.addEventListener("click", () => clearImage());

    ["dragenter", "dragover"].forEach((eventName) => {
      dom.dropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dom.dropZone.classList.add("is-dragover");
      });
    });

    ["dragleave", "dragend"].forEach((eventName) => {
      dom.dropZone.addEventListener(eventName, (event) => {
        if (event.relatedTarget && dom.dropZone.contains(event.relatedTarget)) return;
        dom.dropZone.classList.remove("is-dragover");
      });
    });

    dom.dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      dom.dropZone.classList.remove("is-dragover");
      const file = Array.from(event.dataTransfer?.files || []).find((entry) => entry.type.startsWith("image/"));
      if (file) handleFile(file);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && state.focus) setFocus(false);
    });

    const resizeObserver = new ResizeObserver(() => {
      layoutPoster();
    });
    resizeObserver.observe(dom.posterFit);

    window.addEventListener("resize", () => {
      layoutPoster();
    });
  }

  function init() {
    dom.poster.style.setProperty("--font-display", DISPLAY_FONTS[0].family);
    dom.poster.style.setProperty("--display-weight", String(DISPLAY_FONTS[0].weight));
    dom.poster.style.setProperty("--font-body", BODY_FONTS[0].family);
    dom.poster.style.setProperty("--body-weight", String(BODY_FONTS[0].weight));
    dom.poster.style.setProperty("--font-mono", '"IBM Plex Mono", monospace');

    buildPaletteGrid();
    buildMotionGrid();
    buildFontSelects();
    buildRatioGrid();
    buildGuides();
    setPanel(state.panel);
    setLayout(state.layout);
    setDisplayFont(state.displayFont);
    setBodyFont(state.bodyFont);
    applyTitleSize(state.titleSize);
    setTone(state.tone);
    setSpeed(state.speedValue);
    setWarp(state.warpValue);
    setGrain(state.grainValue);
    setMargin(state.marginValue);
    setDim(state.dim);
    setGuides(false);
    updateRangeFill(dom.speedRange);
    updateRangeFill(dom.warpRange);
    updateRangeFill(dom.grainRange);
    updateRangeFill(dom.marginRange);
    updateRangeFill(dom.dimRange);
    dom.poster.style.backgroundImage = paletteGradient(state.colors, 150);
    dom.currentPalette.style.backgroundImage = paletteGradient(state.colors, 115);
    dom.formatSheet.style.backgroundImage = paletteGradient(state.colors, 130);
    updateReapplyState();

    if (!dom.sourceImage.getAttribute("src")) {
      dom.replaceImage.hidden = true;
      dom.imageLoaded.hidden = true;
      dom.uploadEmpty.hidden = false;
    }

    wireEvents();
    initWebGL();
    layoutPoster();
    requestAnimationFrame(() => {
      layoutPoster();
      fitPosterText();
    });

    const ready = document.fonts?.ready || Promise.resolve();
    ready.then(() => {
      fitPosterText();
      requestSingleFrame();
    }).catch(() => {});
    window.setTimeout(fitPosterText, 350);
  }

  init();
})();
