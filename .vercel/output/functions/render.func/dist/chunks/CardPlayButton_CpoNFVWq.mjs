import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_DM7FSeTf.mjs';
import 'kleur/colors';
import cn from 'clsx';
import { p as playlists } from './data_CHOdMg2l.mjs';
/* empty css                         */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { create } from 'zustand';

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "/workspaces/Spotify-astro-clone/src/icons/Library.astro", undefined);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "/workspaces/Spotify-astro-clone/src/icons/Home.astro", undefined);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "/workspaces/Spotify-astro-clone/src/icons/Search.astro", undefined);

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center p-3 font-medium transition duration-300"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/workspaces/Spotify-astro-clone/src/components/SideMenuItem.astro", undefined);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gp-5 rounded-md hover:bg-zinc-600"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col mx-3 truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400"> ${artists} </span> </div> </a>`;
}, "/workspaces/Spotify-astro-clone/src/components/SideMenuCard.astro", undefined);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$Home, {})} <p class="font-semibold">Home</p> ` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$Search, {})} <p class="font-semibold">Search</p> ` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LibraryIcon", $$Library, {})} <p class="font-semibold">Library</p> ` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "/workspaces/Spotify-astro-clone/src/components/AsideMenu.astro", undefined);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/workspaces/Spotify-astro-clone/node_modules/.pnpm/astro@4.16.18_rollup@4.30.1_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", undefined);

const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
      }
    )
  }
);
const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
      }
    )
  }
);
const Prev = () => /* @__PURE__ */ jsx("svg", { fill: "currentColor", role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx(
  "path",
  {
    d: "M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
  }
) });
const Next = () => /* @__PURE__ */ jsx("svg", { fill: "currentColor", role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx(
  "path",
  {
    d: "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
  }
) });

function useCurrentMusic(currentMusic) {
  const getCurrentSongIndex = () => {
    if (currentMusic.songs.length === 0 || currentMusic.song === null) return -1;
    return currentMusic.songs.findIndex((e) => e.id === currentMusic.song.id) ?? -1;
  };
  const getNextSong = () => {
    const { songs } = currentMusic;
    const totalOfSongsInPlaylist = songs.length;
    if (totalOfSongsInPlaylist === 0) return null;
    const index = getCurrentSongIndex();
    if (index + 1 >= totalOfSongsInPlaylist) {
      return null;
    }
    return songs[index + 1];
  };
  const getPreviousSong = () => {
    const index = getCurrentSongIndex();
    if (index <= 0) {
      return null;
    }
    return currentMusic.songs[index - 1];
  };
  return { getPreviousSong, getNextSong };
}

const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 0.1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => {
    set({ currentMusic });
  }
}));

function PlayerControlButtonBar() {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);
  const { getNextSong, getPreviousSong } = useCurrentMusic(currentMusic);
  const onPlayPause = () => {
    if (currentMusic.song === null) return;
    setIsPlaying(!isPlaying);
  };
  const onNextSong = () => {
    const nextSong = getNextSong();
    if (nextSong) {
      setCurrentMusic({ ...currentMusic, song: nextSong });
    }
  };
  const onPrevSong = () => {
    const prevSong = getPreviousSong();
    if (prevSong) {
      setCurrentMusic({ ...currentMusic, song: prevSong });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-row flex-nowrap items-center gap-4", children: [
    /* @__PURE__ */ jsx("button", { className: "hover:scale-110", onClick: onPrevSong, title: "Previous song", children: /* @__PURE__ */ jsx(Prev, {}) }),
    /* @__PURE__ */ jsx("button", { className: "bg-white text-black rounded-full p-2 hover:scale-110", onClick: onPlayPause, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
    /* @__PURE__ */ jsx("button", { className: "hover:scale-110", onClick: onNextSong, title: "Next song", children: /* @__PURE__ */ jsx(Next, {}) })
  ] });
}

const PlayerCurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `
        flex items-center gap-5 relative
        overflow-hidden
      `,
      children: [
        image && /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
        ] })
      ]
    }
  );
};

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-500" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const PlayerSoundControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time) => {
    if (time == null) return `0:00`;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const duration = audio?.current?.duration ?? 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3 text-xs pt-2", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12 text-right", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        value: [currentTime],
        max: audio?.current?.duration ?? 0,
        min: 0,
        className: "w-[400px]",
        onValueChange: (value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12", children: duration ? formatTime(duration) : "0:00" })
  ] });
};

const VolumeSilenced = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen apagado",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"
        }
      )
    ]
  }
);
const VolumeLow = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-label": "Volumen bajo",
    "aria-hidden": "true",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
      }
    )
  }
);
const VolumeMedium = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-label": "Volumen medio",
    "aria-hidden": "true",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"
      }
    )
  }
);
const VolumeFull = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
    ]
  }
);

const isVolumeSilenced = (loud) => loud < 0.1;
const isVolumeLow = (loud) => loud >= 0.1 && loud < 0.5;
const isVolumeMedium = (loud) => loud >= 0.5 && loud < 0.9;
const isVolumeFull = (loud) => loud >= 0.9;
const getVolumeIconByLouder = (loud) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isVolumeSilenced(loud) && /* @__PURE__ */ jsx(VolumeSilenced, {}),
    isVolumeLow(loud) && /* @__PURE__ */ jsx(VolumeLow, {}),
    isVolumeMedium(loud) && /* @__PURE__ */ jsx(VolumeMedium, {}),
    isVolumeFull(loud) && /* @__PURE__ */ jsx(VolumeFull, {})
  ] });
};
const PlayerVolumeIconComponent = () => {
  const volume = usePlayerStore((state) => state.volume);
  return getVolumeIconByLouder(volume);
};

const PlayerVolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilenced = volume < 0.1;
  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2 text-white", children: [
    /* @__PURE__ */ jsx("button", { className: "opacity-70 hover:opacity-100 transition", onClick: handleClickVolumen, children: /* @__PURE__ */ jsx(PlayerVolumeIconComponent, {}) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [100],
        max: 100,
        min: 0,
        value: [volume * 100],
        className: "w-[95px]",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};

function Player() {
  const { currentMusic, isPlaying, volume, setCurrentMusic } = usePlayerStore((state) => state);
  const audioRef = useRef();
  const { getNextSong } = useCurrentMusic(currentMusic);
  useEffect(() => {
    if (!currentMusic.song) {
      return;
    }
    isPlaying ? play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      audioRef.current.src = `/music/${playlist?.id}/0${song.id}.mp3`;
      play();
    }
  }, [currentMusic]);
  const play = () => {
    audioRef.current.play().catch((e) => console.log("error playing: ", e));
  };
  function onNextSong() {
    const nextSong = getNextSong();
    if (nextSong) {
      setCurrentMusic({ ...currentMusic, song: nextSong });
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full px-1 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ jsx(PlayerCurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col items-center", children: [
      /* @__PURE__ */ jsx(PlayerControlButtonBar, {}),
      /* @__PURE__ */ jsx(PlayerSoundControl, { audio: audioRef }),
      /* @__PURE__ */ jsx(
        "audio",
        {
          ref: audioRef,
          onEnded: onNextSong
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(PlayerVolumeControl, {}) })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] overflow-y-auto rounded-lg bg-zinc-900" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] overflow-y-auto rounded-lg bg-zinc-900 h-[80px]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "/workspaces/Spotify-astro-clone/src/components/Player.jsx", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>  </body></html>`;
}, "/workspaces/Spotify-astro-clone/src/layouts/Layout.astro", "self");

function getPlayListInfoById(playListId) {
  return fetch(`/api/get-info-playlist.json?id=${playListId}`).then((res) => res.json());
}

function CardPlayButton({ id, size = "small" }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;
  const isThisPlaylistInStore = currentMusic?.playlist?.id === id;
  const handleClick = () => {
    if (isThisPlaylistInStore) {
      setIsPlaying(!isPlaying);
      return;
    }
    getPlayListInfoById(Number(id)).then((data) => {
      const { songs, playlist } = data;
      setCurrentMusic({ songs, playlist, song: songs[0] });
    }).then(() => {
      setIsPlaying(true);
    });
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "card-play-button rounded-full text-black bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400",
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName })
    }
  );
}

export { $$Layout as $, CardPlayButton as C, Pause as P, Play as a, getPlayListInfoById as g, usePlayerStore as u };
