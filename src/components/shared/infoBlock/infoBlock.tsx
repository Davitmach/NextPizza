'use client';
import { useCallback } from 'react';
import { Button } from '@/components/UI/button/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import { InfoBlockType } from '@/types/UI/infoBlock/infoBlockProps';

const nunito = Nunito({
  weight: ['1000', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic'],
});

export const InfoBlock = (props: InfoBlockType) => {
  const { refresh } = useRouter();
  const handleRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  return (
    <div
      className={`${nunito.className} Notfound_container flex w-full justify-center items-center h-[100vh] gap-[83px] flex-wrap xs:py-[100px] px-[50px]`}
    >
      <div className="Info_box flex flex-col gap-[45px]">
        <div className="Info">
          <div className="Title">
            <h1 className="font-[800] text-[40px] text-black-label">{props.title}</h1>
          </div>
          <div className="Description">
            <p className="text-gray-notFoundDescription font-[400] text-[20px] max-w-[445px] w-full">
              {props.description}
            </p>
          </div>
        </div>
        <div className="Btn_box flex gap-[20px]">
          <Button variant="orangeGoHome" size="default" status={false} />
          <Button variant="grayTransparent" size="default" status={false} func={handleRefresh}>
            Обновить
          </Button>
        </div>
      </div>
      <div className="Svg">
        <Image style={{width:'340px',height:'346px'}} priority src={props.img} alt="img" width={340} height={346} />
      </div>
    </div>
  );
};
