"use client";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const truncateTitle = (title: string): string => {
  const words = title.split(" ");
  if (words.length > 2) {
    return words.slice(0, 2).join(" ") + "...";
  }
  return title;
};

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    return player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[42px] 
          min-w-[42px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
          <p className=" text-md text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-[10px] lg:text-md truncate">By {data.author}</p>

      
      </div>
    </div>
  );
};

export default MediaItem;
