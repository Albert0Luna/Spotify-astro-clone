/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderTransition } from '../../chunks/astro/server_DM7FSeTf.mjs';
import 'kleur/colors';
import { u as usePlayerStore, P as Pause, a as Play, g as getPlayListInfoById, C as CardPlayButton, $ as $$Layout } from '../../chunks/CardPlayButton_CpoNFVWq.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_CHOdMg2l.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../../renderers.mjs';

const TimeIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"
        }
      )
    ]
  }
);

const isNewSongOfAnotherPlaylist = (currentMusic, song) => {
  return currentMusic.playlist?.id != song.albumId;
};
const setNewCurrentMusic = (song, setIsPlaying, setCurrentMusic) => {
  getPlayListInfoById(song.albumId).then((data) => {
    const { songs, playlist } = data;
    setCurrentMusic({ songs, playlist, song });
  }).then(() => {
    setIsPlaying(true);
  });
};
const MusicsTablePlay = ({ song, isCurrentSong }) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore((state) => state);
  const isCurrentSongRunning = (song2) => {
    return currentMusic.song?.id == song2.id && currentMusic.playlist?.albumId == song2.albumId && isPlaying;
  };
  const handleClick = (song2) => {
    if (isCurrentSongRunning(song2)) {
      setIsPlaying(false);
      return;
    }
    if (isNewSongOfAnotherPlaylist(currentMusic, song2)) {
      setNewCurrentMusic(song2, setIsPlaying, setCurrentMusic);
      return;
    }
    if (currentMusic.song?.id !== song2.id) {
      setCurrentMusic({ songs: currentMusic.songs, playlist: currentMusic.playlist, song: song2 });
    }
    setIsPlaying(true);
  };
  const className = "hover:scale-125";
  return /* @__PURE__ */ jsx("button", { className: "text-white", onClick: () => handleClick(song), children: isCurrentSongRunning(song) ? /* @__PURE__ */ jsx(Pause, { className }) : /* @__PURE__ */ jsx(Play, { className }) });
};

const isCurrentSong = (song) => {
  const { song: currentSong, playlist } = usePlayerStore((state) => state.currentMusic);
  return currentSong?.id == song.id && playlist?.albumId == song.albumId;
};
const MusicsTable = ({ songs }) => {
  return /* @__PURE__ */ jsxs("table", { className: "table-auto text-left min-w-full divide-y divide-gray-500/20", children: [
    /* @__PURE__ */ jsx("thead", { className: "", children: /* @__PURE__ */ jsxs("tr", { className: "text-zinc-400 text-sm", children: [
      /* @__PURE__ */ jsx("th", { className: "px-4 py-2 font-light", children: "#" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-2 font-light", children: "Título" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-2 font-light", children: "Álbum" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-2 font-light", children: /* @__PURE__ */ jsx(TimeIcon, {}) })
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsx("tr", { className: "h-[16px]" }),
      songs.map(
        (song, index) => {
          const isCurrentSongBoolean = isCurrentSong(song);
          return /* @__PURE__ */ jsxs(
            "tr",
            {
              className: "text-gray-300 border-spacing-0 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300 group",
              children: [
                /* @__PURE__ */ jsxs("td", { className: "relative px-4 py-2 rounded-tl-lg rounded-bl-lg w-5", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute top-5 opacity-100 transition-all group-hover:opacity-0", children: index + 1 }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-5 opacity-0 transition-all group-hover:opacity-100", children: /* @__PURE__ */ jsx(MusicsTablePlay, { song, isCurrentSong: isCurrentSongBoolean }) })
                ] }),
                /* @__PURE__ */ jsxs("td", { className: "px-4 py-2 flex gap-3", children: [
                  /* @__PURE__ */ jsx("picture", { className: "", children: /* @__PURE__ */ jsx("img", { src: song.image, alt: song.title, className: "w-11 h-11" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsx("h3", { className: `text-base font-normal
                        ${isCurrentSongBoolean ? "text-green-400" : "text-White"}
                        `, children: song.title }),
                    /* @__PURE__ */ jsx("span", { children: song.artists.join(", ") })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("td", { className: "px-4 py-2", children: song.album }),
                /* @__PURE__ */ jsx("td", { className: "px-4 py-2 rounded-tr-lg rounded-br-lg", children: song.duration })
              ]
            },
            `{song.albumId}-${song.id}`
          );
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter(
    (song) => song.albumId === playlist?.albumId
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden bg-gradient-to-t from-50% from-zinc-900 via-zinc-900/80"${addAttribute(`background-color: ${playlist?.color.accent}`, "style")}${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- <PageHeader /> --> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square w-52 h-52 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "jkadwh6j", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> <span${addAttribute(renderTransition($$result2, "vl5qskca", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}> ${playlist?.title} </span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "2qsllmyo", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playListSongs.length} songs</span>, 3 h
              aprox.
</p> </div> </div> </div> </header> <div class="pl-6 pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "client:load": true, "id": id, "size": "large", "client:component-hydration": "load", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <div class="relative z-10 px-6 pt-10"></div> <section class="p-6"> ${renderComponent($$result2, "MusicsTable", MusicsTable, { "songs": playListSongs, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MusicsTable", "client:component-export": "MusicsTable" })} </section> </div> ` })}`;
}, "/workspaces/Spotify-astro-clone/src/pages/playlist/[id].astro", "self");

const $$file = "/workspaces/Spotify-astro-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
