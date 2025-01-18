"use client";
import Style from './stories.module.scss';
import { storiesService } from "@/service/storiesService";
import { useEffect, useState } from "react";
import Image from "next/image";
import Stories from 'react-insta-stories'
interface IItems {
  createdAt: string;
  id: number;
  sourceUrl: string;
  storyId: number;
}
interface IStory {
  createdAt: string;
  id: number;
  previewImageUrl: string;
  items: IItems[];
}
export const StoriesBox = () => {
  const [stories, setStories] = useState<IStory[] | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<IStory>();

  useEffect(() => {
    storiesService.getStories().then((e) => {
      if (e.stories) {
        setStories(e.stories);
      }
    });
  }, []);



  const onClickStory = (story: IStory) => {
    setSelectedStory(story);

    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (<>
    <div className={`w-full flex gap-4 overflow-x-auto px-[10px]`}>
      {Array.isArray(stories) && stories.length > 0
        ? stories.map((story) => (
            <Image
              key={story.id}
              className={`rounded-2xl cursor-pointer flex-shrink-0 ${Style.img}`}
              onClick={() => onClickStory(story)}
              alt="img"
              src={story.previewImageUrl}
              width={200}
              height={250}
            />
          ))
        : Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className=" flex-shrink-0 flex w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse"
            />
          ))}
    </div>
    {open && (
          <div className="bg-gray-background fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-full bg-black/80 flex items-center justify-center z-30">
             
             <div className={Style.stories_container}>
  <Stories
    onAllStoriesEnd={() => setOpen(false)}
    stories={selectedStory?.items.map((item) => ({ url: item.sourceUrl })) || []}
    defaultInterval={3000}
    width="100%"
    height="100%"
  />
</div>

          </div>
        )}
    </>
  );
};
