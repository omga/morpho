"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Lazy YouTube facade: renders only the poster + play button until clicked,
 * then swaps in a cookie-free youtube-nocookie.com iframe. Keeps case pages
 * fast and drops no tracking cookies before the visitor chooses to play.
 */
export function VideoEmbed({
  youtubeId,
  title,
  caption
}: {
  youtubeId: string;
  title: string;
  caption?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  );

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-md border border-foreground/20 bg-card">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 60rem, 100vw"
              className="object-cover"
              onError={() =>
                setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)
              }
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent transition group-hover:from-background/40" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
